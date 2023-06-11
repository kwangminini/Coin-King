import { API } from '@/api/axiosInstance'

export const getUserAmount = async (): Promise<{ amount: number }> => {
  const response = await API.get('user/amount')
  return response.data
}
