import { useState } from "react";
import apiClient from "./axios";
import { AxiosRequestConfig, AxiosResponse } from "axios";

type Method = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

interface UseAxiosResponse<T> {
  data: T | null;
  error: any;
  loading: boolean;
  request: (
    method: Method,
    url: string,
    options?: AxiosRequestConfig
  ) => Promise<AxiosResponse<T> | void>;
}

export function useApi<T = any>(): UseAxiosResponse<T> {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const request = async (
    method: Method,
    url: string,
    options: AxiosRequestConfig = {}
  ): Promise<AxiosResponse<T> | void> => {
    setLoading(true);
    setError(null);

    try {
      const response = await apiClient.request<T>({
        method,
        url,
        ...options,
      });
      setData(response.data);
      return response;
    } catch (err: any) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { data, error, loading, request };
}
