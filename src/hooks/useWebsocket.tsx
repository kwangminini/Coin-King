'use client'

import useSetCoinData from '@/hooks/useSetCoinData'
import { IUpbitCoin } from '@/types/upbit/coin'
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
          },
          { format: 'SIMPLE' },
        ]
        socket.current?.send(JSON.stringify(sendData))
      }
    }

    socket.current.onmessage = async (event: MessageEvent) => {
      const coinData = await event.data.text()
      setCoinData(JSON.parse(coinData))
      setSocketData(coinData)
    }
    socket.current.onclose = () => {
      setIsConnected(false)
      console.log('연결 종료 !!!')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { socket, isConnected, socketData }
}
