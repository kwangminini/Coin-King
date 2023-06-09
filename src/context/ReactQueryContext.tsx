'use client'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
interface IReactQueryContextProps {
  children: React.ReactNode
}
export default function ReactQueryContext({
  children,
}: IReactQueryContextProps) {
  // Create a client
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false, //화면 다른 곳 이동하다가 왔을 때 fetch 방지
        retry: 0, //실패 시 재호출 방지
        suspense: true,
        useErrorBoundary: true,
      },
    },
  })
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      {children}
    </QueryClientProvider>
  )
}
