import Image from 'next/image'
import { Prose } from '@/components'

export default function Home() {
  return (
    <main>
      <div className="relative isolate h-[450px] md:h-[650px]">
        <div className="flex justify-center px-8 md:p-8">
          <div className="grow max-w-7xl">
            <Prose className="max-w-4xl">
              <p className="lead">Scaling AI implementation</p>
              <h1>We help companies become AI-first</h1>
              <p className="text-xl md:text-2xl text-gray-600 mt-4 md:mt-8 max-w-xl">
                We strive to make AI integration accessible and efficient for all businesses,
                regardless of size or industry.
              </p>
            </Prose>
          </div>
        </div>
        <div className="splash absolute bottom-0 right-0">
          <Image className="object-cover" src="/splash.jpg" alt="" width={1800} height={1200} />
        </div>
      </div>
    </main>
  )
}
