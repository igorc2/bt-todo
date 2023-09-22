// useAuthorizedMutation.ts
import { useMutation as useReactMutation, UseMutationOptions } from 'react-query';
import axiosInstance from './axiosInstance';

// Custom hook for authorized mutations
export function useAuthorizedMutation(
  key: string,
) {
  return useReactMutation<any, unknown, any>(
    (data) => axiosInstance.put(`http://localhost:3700/${key}`, data),
    { onSuccess: () => console.log('success') }
  );
}