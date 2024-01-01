import { Poppins } from 'next/font/google'
import BaseLayout from './components/layout/Layout'
import './globals.css'

const poppins = Poppins ({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['100','200','300','400','500','600','700','800']
})

export const metadata = {
  metadataBase: new URL('https://bilhaq-portofolio.vercel.app'),
  title: {
    default: 'Bilhaq Avi Dewantara - Portofolio',
    template: '%s | Bilhaq Avi Dewantara - Portofolio'
  },
  description: 'Come here, see my portofolio. And let&#39;s build something together.',
  generator: 'Next.js',
  applicationName: 'Bilhaq Avi Dewantara - Portofolio',
  referrer: 'origin-when-cross-origin',
  keywords: ['Next.js', 'React', 'JavaScript', 'Bilhaq Avi Dewantara', 'Bilhaq', 'Avi', 'Dewantara', 'BAD', 'Portofolio', 'Bilhaq Avi Dewantara - Portofolio', 'Bilhaq - Portofolio', 'BAD - Portofolio'],
  authors: [
    { name: 'Bilhaq Avi Dewantara' }, 
    { name: 'BilhaqAD07', url: 'https://github.com/BilhaqAD07' }
  ],
  creator: 'BilhaqAD07',
  publisher: 'BilhaqAD07',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    images: [{
      url: '/open-graph-image.png',
      width: 1200,
      height: 630
    }]
  },
  verification: {
    google: 'w58Ev3TPdTb4N0ptbdETOFXPwVfMeFrSqbhwb_dcFCQ'
  },
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


