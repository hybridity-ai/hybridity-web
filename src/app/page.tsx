import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <div className="relative isolate h-[450px] md:h-[650px]">
        <div className="flex justify-center px-8 md:p-8">
          <div className="grow max-w-7xl">
            <p className="font-semibold text-gray-500 text-sm">Scaling AI implementation</p>
            <h2 className="font-darker leading-heading font-semibold text-5xl md:text-8xl text-gray-950 max-w-4xl">
              We help companies become AI-first
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 mt-4 md:mt-8 max-w-xl">
              We strive to make AI integration accessible and efficient for all businesses,
              regardless of size or industry.
            </p>
          </div>
        </div>
        <div className="splash absolute bottom-0 right-0">
          <Image className="object-cover" src="/splash.jpg" alt="" width={1800} height={1200} />
        </div>
      </div>
      <div className="bg-gray-950 text-gray-50">
        <div className="flex justify-center p-8">
          <div className="grow max-w-7xl">
            <p className="font-semibold text-gray-500 text-sm">Get in touch</p>
            <h2 className="font-darker leading-heading font-semibold text-3xl md:text-6xl max-w-4xl">
              Contact us
            </h2>
            <p className="mt-4">
              Grev Turegatan 10
              <br />
              114 46 Stockholm
              <br />
              +46 737891792
              <br />
              hello@hybridity.ai
            </p>

            <ul className="mt-8">
              <li>
                <a href="#" target="_blank">
                  ↪ LinkedIn
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  ↪ Twitter
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  ↪ GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}
