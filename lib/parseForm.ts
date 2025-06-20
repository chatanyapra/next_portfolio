import { IncomingForm, File } from 'formidable';
import { NextRequest } from 'next/server';

export const parseForm = async (req: NextRequest): Promise<{
  fields: Record<string, any>;
  files: File[];
}> => {
  const form = new IncomingForm({ multiples: true, keepExtensions: true, uploadDir: '/tmp' });

  return new Promise((resolve, reject) => {
    form.parse(req as any, (err, fields, files) => {
      if (err) return reject(err);

      const uploadedFiles = Array.isArray(files.files) ? files.files : [files.files];
      const filteredFiles = uploadedFiles.filter((file): file is File => file !== undefined);
      resolve({ fields, files: filteredFiles });
    });
  });
};
