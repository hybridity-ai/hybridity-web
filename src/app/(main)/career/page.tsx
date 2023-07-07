import { client } from '@/sanity/lib'
import { careers } from '@/sanity/queries'
import { Prose } from '@/components'

export const metadata = {
  title: 'Careers | Hybridity | Scaling AI Implementation',
}

export default async function Page() {
  const posts = await client.fetch(careers)

  return (
    <>
      <Prose>
        <p className="lead">Start your career within AI today</p>
        <h1>Work with us</h1>
        <p>
          Interested in a career at Hybridity? Join our team of experts skilled in strategy, product
          development, engineering, AI research and more.
        </p>
        <p>
          By joining Hybridity, you will be stepping into a challenging environment where every day
          is an opportunity to grow, innovate, and solve problems.
        </p>
        <h2>Current openings</h2>
      </Prose>
      <div className="divide-y divide-gray-200">
        {posts.map((post: any, idx: number) => (
          <a
            key={`post-${idx}`}
            className="block px-2 py-4 hover:bg-gray-100/50"
            href={`/career/${post.slug.current}`}
          >
            <div className="text-sm font-semibold text-gray-500">{post.department}</div>
            <div className="text-2xl font-semibold font-darker">{post.title}</div>
            <div className="mt-2 flex gap-4 text-xs text-gray-500">
              <div className="flex gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="inline-block w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
                {post.location}
              </div>
              <div className="flex gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="inline-block w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {post.positionType}
              </div>
              <div className="flex gap-1 ml-auto">
                Read more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="inline-block w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </div>
            </div>
          </a>
        ))}
      </div>
      <div className="flex flex-col md:flex-row mt-10 md:mt-20 gap-10 md:gap-20 items-center">
        <Prose>
          <p className="lead">What we offer</p>
          <h3>Working at Hybridity</h3>
          <p>
            At Hybridity, we value collaboration, innovation, and continuous learning. Our culture
            fosters an environment where ideas are shared openly, and everyone&#39;s contribution is
            valued. We believe in maintaining a healthy work-life balance and offer flexible working
            arrangements. Professional growth is important to us; hence, we provide opportunities
            for learning and development. Whether it is working on cutting-edge AI solutions or
            collaborating with our diverse team, there is always something exciting happening at
            Hybridity.
          </p>
        </Prose>
        <div>
          <img className="rounded-3xl shadow-2xl" src="/images/stockholm.jpg" alt="" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row-reverse mt-10 md:my-40 gap-10 md:gap-20 items-center">
        <Prose>
          <p className="lead">Share our values</p>
          <h3>Diversity and Inclusion</h3>
          <p>
            Hybridity is committed to cultivating a diverse and inclusive work environment. We
            believe our strength lies in the diversity of our team&#39;s experiences, perspectives,
            and backgrounds. We are dedicated to creating an environment where everyone feels
            valued, included, and empowered to do their best work. We continue to build and nurture
            a culture where inclusiveness is a reflex, not an initiative. To us, diversity and
            inclusion are not just buzzwords, but a commitment underscored by actions.
          </p>
        </Prose>
        <div>
          <img className="rounded-3xl shadow-2xl" src="/images/work.jpg" alt="" />
        </div>
      </div>
    </>
  )
}
