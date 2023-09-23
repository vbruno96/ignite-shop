import './globals.css'
import type { Metadata } from 'next'
import { Roboto_Flex as Roboto } from 'next/font/google'

import logoImg from '../assets/logo.svg'
import Image from 'next/image'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })

export const metadata: Metadata = {
  title: 'Ignite Shop',
  description: 'Loja virtual ficticia criada no curso de React da Rocketseat',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body
        className={`${roboto.variable} bg-gray-900 text-gray-100 font-sans flex justify-center flex-col items-start min-h-screen`}
      >
        <header className="py-8 px-0 w-full max-w-[68.75rem] my-0 mx-auto">
          <Image src={logoImg} alt="" />
        </header>
        {children}
      </body>
    </html>
  )
}
