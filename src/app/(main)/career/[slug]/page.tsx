import { client } from '@/sanity/lib'
import { PortableText } from '@portabletext/react'
import { careerBySlug } from '@/sanity/queries'
import { Prose } from '@/components'

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params
  const post = await client.fetch(careerBySlug, { slug })

  return (
    <>
      <a href="/career" className="flex gap-1 text-xs text-gray-500">
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
            d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
          />
        </svg>
        See all open positions
      </a>

      <Prose className="mt-4">
        <h2>{post.title}</h2>
        <div className="mt-2 flex gap-4 text-sm text-gray-500">
          <div className="flex gap-1 items-center">
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
                d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
              />
            </svg>
            {post.department}
          </div>
          <div className="flex gap-1 items-center">
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
          <div className="flex gap-1 items-center">
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
        </div>

        <PortableText value={post.content} />
      </Prose>
      <Prose className="p-8 mt-8 mb-8 bg-black prose-sm" inverted>
        <h4>How to apply</h4>
        <p>
          To apply for any of our open positions, please send an email to{' '}
          <a href="mailto:hello@hybridity.ai">hello@hybridity.ai</a>. In your email, make sure to
          include the following:
        </p>
        <ul>
          <li>The position you&#39;re applying for in the subject line.</li>
          <li>Your current resume/CV attached.</li>
          <li>
            A brief cover letter in the body of the email explaining why you&#39;re interested in
            the role and how you believe you can contribute to Hybridity&#39;s mission.
          </li>
        </ul>
        <p>We look forward to hearing from you!</p>
      </Prose>

      <a href="/career" className="flex gap-1 text-xs text-gray-500">
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
            d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
          />
        </svg>
        See all open positions
      </a>
    </>
  )
}
