import './globals.css'
import { Roboto } from 'next/font/google'
import { Header } from '@/components/Header'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-roboto'
})

export const metadata = {
  title: 'Portfolio Paulo Montefusco',
  description: 'O Portfolio do Paulo Montefusco, que fala um pouco das minhas experiências como Desenvolvedor!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={roboto.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
