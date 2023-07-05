import { client } from '@/sanity/lib'
import { careers } from '@/sanity/queries'
import { Prose } from '@/components'

export default async function Page() {
  const posts = await client.fetch(careers)

  return (
    <main>
      <div className="flex justify-center px-8 md:p-8">
        <div className="grow max-w-7xl">
          <Prose>
            <p className="lead">Start your career within AI today</p>
            <h1>Work with us</h1>
            <p>
              Interested in a career at Hybridity? Join an expert team of individuals skilled in
              strategy, product development, engineering, AI research and more.
            </p>
            <p>
              By joining Hybridity, you will be stepping into a challenging environment where every
              day is an opportunity to grow, innovate, and solve problems.
            </p>
            <h2>Current openings</h2>
          </Prose>
          <div>
            {posts.map((post: any, idx: number) => (
              <a key={`post-${idx}`} className="" href={`/career/${post.slug.current}`}>
                {post.title},{post.location}
              </a>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
