import LoadingBar from '@/components/common/LoadingBar'
import { Suspense, SuspenseProps } from 'react'
import {
  ErrorBoundary,
  ErrorBoundaryPropsWithRender,
} from 'react-error-boundary'
import ErrorFallback from './ErrorFallback'

interface IAsyncBoundary {
  children: React.ReactNode
  SuspenseFallBack?: SuspenseProps['fallback']
  ErrorFallbackRender?: ErrorBoundaryPropsWithRender['fallbackRender']
}

export default function AsyncBoundary({
  children,
  SuspenseFallBack,
  ErrorFallbackRender,
}: IAsyncBoundary) {
  return (
    <ErrorBoundary
      fallbackRender={ErrorFallbackRender ? ErrorFallbackRender : ErrorFallback}
    >
      <Suspense fallback={SuspenseFallBack ? SuspenseFallBack : <LoadingBar />}>
        {children}
      </Suspense>
    </ErrorBoundary>
  )
}
