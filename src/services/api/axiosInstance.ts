import axios, { AxiosRequestConfig } from 'axios'

const UPBIT_BASE_URL = 'https://api.upbit.com/v1/'

const axiosInstance = (url: string, options?: AxiosRequestConfig) => {
  const instance = axios.create({
    baseURL: url,
    ...options,
  })
  return instance
}

export const upbitAPI = axiosInstance(UPBIT_BASE_URL)
