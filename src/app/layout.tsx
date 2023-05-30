import Image from 'next/image'
import { Inter, Darker_Grotesque } from 'next/font/google'
import clsx from 'clsx'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--inter-font',
})
const darker = Darker_Grotesque({
  subsets: ['latin'],
  weight: '600',
  variable: '--darker-font',
})

export const metadata = {
  title: 'Hybridity | Scaling AI Implementation',
  description:
    'We strive to make AI integration accessible and efficient for all businesses, regardless of size or industry.',
  icons: {
    icon: '/icon.png',
  },
  openGraph: {
    siteName: 'Hybridity',
    images: [
      {
        url: 'https://hybridity.ai/og.png',
        width: 1200,
        height: 675,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={clsx(inter.className, darker.variable)}>
        <header className="flex justify-center p-8 md:mb-8">
          <h1 className="grow max-w-7xl">
            <Image src="/hybridity.svg" alt="Hybridity" width={178} height={32} />
          </h1>
        </header>
        {children}
        <footer className="flex justify-center p-8 bg-gray-950 text-gray-500">
          <p className="grow max-w-7xl text-xs">© Hybridity 2023</p>
        </footer>
      </body>
    </html>
  )
}
