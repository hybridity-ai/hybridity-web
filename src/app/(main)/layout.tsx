import Image from 'next/image'
import { Inter, Darker_Grotesque } from 'next/font/google'
import clsx from 'clsx'
import { Prose } from '@/components'
import '../globals.css'

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
            <a href="/">
              <Image
                className="inline"
                src="/hybridity.svg"
                alt="Hybridity"
                width={178}
                height={32}
              />
            </a>
            <a
              className="inline-block py-1 px-2 mt-2 md:mt-0 md:ml-4 text-sm font-semibold rounded-full bg-cyan-100"
              href="/career"
            >
              🧑‍💻 We are hiring - click here!
            </a>
          </h1>
        </header>
        {children}
        <div className="bg-gray-950 text-gray-50">
          <div className="flex justify-center p-8">
            <Prose className={clsx('grow max-w-7xl', 'prose-a:no-underline')} inverted>
              <p className="lead">Get in touch</p>
              <h2>Contact us</h2>
              <p>
                Götgatan 18
                <br />
                118 46 Stockholm
                <br />
                +46707547150
                <br />
                <a href="mailto:hello@hybridity.ai">hello@hybridity.ai</a>
              </p>
              <p>
                <a href="https://www.linkedin.com/company/hybridity-ai" target="_blank">
                  LinkedIn
                </a>
                <br />
                <a href="https://twitter.com/hybridity_ai" target="_blank">
                  Twitter
                </a>
                <br />
                <a href="https://github.com/hybridity-ai" target="_blank">
                  GitHub
                </a>
              </p>
            </Prose>
          </div>
        </div>
        <footer className="flex justify-center p-8 bg-gray-950 text-gray-500">
          <p className="grow max-w-7xl text-xs">© Hybridity 2023</p>
        </footer>
      </body>
    </html>
  )
}
