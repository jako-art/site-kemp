import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import './globals.css'

export const metadata: Metadata = {
  title: 'Сгенерируй работу за пару минут | Кэмп',
  description: 'Введи тему, выбери формат и объём — дальше продолжишь в Кэмпе.',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="ru">
      <body className="antialiased">{children}</body>
    </html>
  )
}

