import type { Metadata } from 'next'
import './globals.css'
import { Manrope } from 'next/font/google'
import clsx from 'clsx'

const fontHeading = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
})

const fontBody = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
})

export const metadata: Metadata = {
  title: 'OpenAI API Interface',
  description: 'TODO',
}

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={clsx('antialiased', fontHeading.variable, fontBody.variable)}
      >
        {children}
      </body>
    </html>
  )
}
