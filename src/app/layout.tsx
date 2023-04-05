import Navigation from '@/components/Navigation'
import './globals.css'
import { Inter } from 'next/font/google'
import Recoil from '@/components/Recoil'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="w-full">
        <Navigation />
        <main className="h-[calc(100vh-60px)] w-full">
          <Recoil>{children}</Recoil>
        </main>
      </body>
    </html>
  )
}
