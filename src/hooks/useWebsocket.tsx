'use client'

import useSetCoinData from '@/hooks/useSetCoinData'
import { IUpbitCoin } from '@/model/upbitCoin'
import { useEffect, useRef, useState } from 'react'

export default function useWebsocket() {
  const URL = 'wss://api.upbit.com/websocket/v1'
  const socket = useRef<WebSocket | null>(null)
  const [socketData, setSocketData] = useState<IUpbitCoin[]>([])
  const [isConnected, setIsConnected] = useState(false)
  const { setCoinData } = useSetCoinData()

  useEffect(() => {
    if (!socket.current) {
      socket.current = new WebSocket(URL)
      // socket.current.binaryType = 'arraybuffer'
      socket.current.onopen = () => {
        setIsConnected(true)
        console.log('연결 성공!!!')
        const sendData = [
          { ticket: 'test' },
          {
            type: 'ticker',
            codes: ['KRW-BTC', 'KRW-ETH', 'KRW-XRP'],
            isOnlyRealtime: true,
          },
          { format: 'SIMPLE' },
        ]
        socket.current?.send(JSON.stringify(sendData))
      }
    }

    socket.current.onmessage = async (event: MessageEvent) => {
      const text = await event.data.text()
      console.log('text ### ', JSON.parse(text))
      setCoinData(JSON.parse(text))
      setSocketData(text)
    }
    socket.current.onclose = () => {
      setIsConnected(false)
      console.log('연결 종료 !!!')
    }
  }, [])

  // const handleChangeSocketData = (data: IUpbitCoin) => {
  //   if (socketData?.length > 0) {
  //     const
  //   } else {
  //     setSocketData([data])
  //   }
  // }

  return { socket, isConnected, socketData }
}
