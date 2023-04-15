import axios, { AxiosRequestConfig } from 'axios'

const UPBIT_BASE_URL = 'https://api.upbit.com/v1/'
const BITHUMB_BASE_URL = 'https://api.bithumb.com/public/candlestick'
const axiosInstance = (url: string, options?: AxiosRequestConfig) => {
  const instance = axios.create({
    baseURL: url,
    ...options,
  })
  return instance
}

export const upbitAPI = axiosInstance(UPBIT_BASE_URL)
export const bithumbAPI = axiosInstance(BITHUMB_BASE_URL)
