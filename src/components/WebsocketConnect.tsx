'use client'

import useWebsocket from '@/hooks/useWebsocket'

export default function WebsocketConnect() {
  const { socket, isConnected } = useWebsocket()
  if (!isConnected) {
    console.log('연결 끊김')
    socket.current?.onopen
  }
  return <></>
}
