import Navigation from '@/components/Navigation'
import './globals.css'
import 'react-loading-skeleton/dist/skeleton.css'
import { Inter } from 'next/font/google'
import RecoilContext from '@/context/RecoilContext'
import WebsocketConnect from '@/components/WebsocketConnect'
import AuthContext from '@/context/AuthContext/indext'
import ThemeContext from '@/context/ThemeContext'
import ReactQueryContext from '@/context/ReactQueryContext'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: '코인왕',
    template: '코인완 | %s',
  },
  description: '코인 모의 투자',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="w-full">
        <ThemeContext>
          <ReactQueryContext>
            <AuthContext>
              <Navigation />
              <main className="h-[calc(100vh-60px)] w-full">
                <RecoilContext>
                  <WebsocketConnect />
                  {children}
                </RecoilContext>
              </main>
            </AuthContext>
          </ReactQueryContext>
        </ThemeContext>
      </body>
    </html>
  )
}
