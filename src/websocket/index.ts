const url = 'wss://api.upbit.com/websocket/v1'

export function connectWebsocekt() {
  console.log('process.env.UPBIT_UUID:::', process.env.NEXT_PUBLIC_UPBIT_UUID)
  const ws = new WebSocket(url)
  ws.onopen = function (event) {
    const sendData = [
      { ticket: process.env.UPBIT_UUID },
      { type: 'ticker', codes: ['KRW-BTC'] },
    ]
    ws.send(JSON.stringify(sendData))
  }
  ws.onmessage = (e) => {
    console.log('e :::', e)
  }
}
