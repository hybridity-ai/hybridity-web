import * as React from 'react'
import clsx from 'clsx'

type ProseProps = {
  children: React.ReactNode
  className?: string
  inverted?: boolean
}

const Prose = React.memo(function Prose(props: ProseProps) {
  const { children, className, inverted } = props

  return (
    <div
      className={clsx(
        'prose',
        'prose-headings:font-darker prose-headings:leading-heading prose-headings:m-0',
        'prose-h1:text-5xl prose-h1:md:text-8xl',
        'prose-h2:text-4xl prose-h2:md:text-6xl prose-h2:mb-4',
        'prose-h3:text-3xl prose-h3:md:text-4xl prose-h3:mb-4',
        'prose-lead:font-semibold prose-lead:text-sm prose-lead:text-gray-500 prose-lead:mb-0',
        inverted ? 'prose-invert' : '',
        className,
      )}
    >
      {children}
    </div>
  )
})

export default Prose
