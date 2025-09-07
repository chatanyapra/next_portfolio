import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Chatanya Pratap - Full Stack Developer Portfolio',
    short_name: 'Chatanyapra',
    description: 'Chatanya Pratap (Chatanyapra) - Full Stack Developer Portfolio showcasing web development projects, tech blogs, and professional experience.',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#000000',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
