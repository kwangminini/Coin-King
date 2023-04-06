'use client'

import useWebsocket from '@/hooks/useWebsocket'

interface IProp {
  children: React.ReactNode
}
export default function WebsocketContext({ children }: IProp) {
  const { socket, isConnected } = useWebsocket()
  if (!isConnected) {
    socket.current?.onopen
  }
  return <>{children}</>
}
