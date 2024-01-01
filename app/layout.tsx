import { Poppins } from 'next/font/google'
import BaseLayout from './components/layout/Layout'
import './globals.css'

const poppins = Poppins ({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['100','200','300','400','500','600','700','800']
})

export const metadata = {
  title: 'BAD | PORTOFOLIO',
  description: 'This website describe me',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
        <body className={poppins.className}>
          <BaseLayout>
            {children}
          </BaseLayout>
        </body>
      </html>
  )
}


