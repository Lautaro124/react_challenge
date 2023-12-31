'use client'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ReduxProvider } from '@/redux/provider'
import Footer from './components/footer'
import logo from '@/assets/logo.png'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`bg-[#f0efef] ${inter.className} h-screen max-h-screen overscroll-none`}>
        <header className="bg-[#32cd32] p-2 py-3 h-20 flex items-center border-b border-b-[rgb(21,144,171)]">
          <Image src={logo} width={170} height={60} alt='Logo' />
        </header>
        <ReduxProvider>
          {children}
        </ReduxProvider>
        <Footer />
      </body>
    </html>
  )
}
