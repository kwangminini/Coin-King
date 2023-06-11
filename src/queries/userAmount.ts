import { getUserAmount } from '@/api/userAmount'
import { useSession } from 'next-auth/react'
import { useQuery } from 'react-query'

const prefix = 'user/'

const useQueryKey = {
  GET_USER_AMOUNT: prefix + 'getUserAmount',
}

export const useGetUserAmount = () => {
  const session = useSession()
  return useQuery([useQueryKey.GET_USER_AMOUNT], getUserAmount, {
    enabled: session.data ? true : false,
  })
}
