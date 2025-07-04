'use client';

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';

type Blog = {
  _id: string;
  title: string;
  shortDescription: string,
  images: Image[],
  techStack: { name: string; _id: string }[],
  isDeleted: boolean,
};
type Image = {
  url: string,
  alt: string,
  _id: string
}
type Project = {
  _id: string;
  title: string;
  shortDescription: string,
  images: Image[],
  techStack: { name: string; _id: string }[],
  link: string,
  isDeleted: boolean,
};

type DataContextType = {
  blogs: Blog[];
  projects: Project[];
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  error: string | null;
  refreshBlogs: () => Promise<void>;
  refreshProjects: () => Promise<void>;
};

const DataContext = createContext<DataContextType | undefined>(undefined);

export const useDataContext = (): DataContextType => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useDataContext must be used within a DataProvider');
  }
  return context;
};

type DataProviderProps = {
  children: ReactNode;
};

export const DataProvider = ({ children }: DataProviderProps) => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchBlogs = async () => {
    try {
      const res = await fetch('/api/blogs');
      if (!res.ok) throw new Error('Failed to fetch blogs');
      const data = await res.json();
      setBlogs(data.data);
    } catch (err: any) {
      setError(err.message);
    }
  };

  const fetchProjects = async () => {
    try {
      const res = await fetch('/api/projects');
      if (!res.ok) throw new Error('Failed to fetch projects');
      const data = await res.json();
      setProjects(data.data);
    } catch (err: any) {
      setError(err.message);
    }
  };

  const refreshBlogs = async () => {
    setLoading(true);
    await fetchBlogs();
    setLoading(false);
  };

  const refreshProjects = async () => {
    setLoading(true);
    await fetchProjects();
    setLoading(false);
  };

  useEffect(() => {
    refreshBlogs();
    refreshProjects();
  }, []);

  return (
    <DataContext.Provider
      value={{
        blogs,
        projects,
        loading,
        setLoading,
        error,
        refreshBlogs,
        refreshProjects,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
