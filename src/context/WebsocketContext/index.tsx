'use client'

import useWebsocket from '@/hooks/useWebsocket'

interface IWebsocketContextProps {
  children: React.ReactNode
}
export default function WebsocketContext({ children }: IWebsocketContextProps) {
  const { socket, isConnected } = useWebsocket()
  if (!isConnected) {
    console.log('연결 끊김')
    socket.current?.onopen
  }
  return <>{children}</>
}
