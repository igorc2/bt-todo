// useAuthorizedQuery.ts
import { useQuery as useReactQuery, UseQueryOptions } from 'react-query';
import axiosInstance from './axiosInstance';
import { useRouter } from 'next/navigation';

interface ExampleData {

}

// Custom hook for authorized queries
export function useAuthorizedQuery(
  key: string,
  options?: UseQueryOptions<ExampleData>
) {
  const router = useRouter()
  return useReactQuery<ExampleData>(
    key,
    async () => {
      try {
        const response = await axiosInstance.get(`http://localhost:3700/${key}`);
        return response.data;
      } catch (error: any) {

        if (error.response && error.response.status === 401) {
          router.push('/')
        }

        throw error;
      }
    },
    {
      retry: false,
      ...options,
    }
  );
}