const people = {
  name: 'people',
  type: 'document',
	title: 'People',
  fields: [
    {
      title: 'Name',
      name: 'name',
      description: 'Display name',
      type: 'string',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
        slugify: (input: String) => input
          .toLowerCase()
          .replace(/\s+/g, '-')
          .slice(0, 200)
      }
    },
    {
      title: 'First name',
      name: 'firstName',
      type: 'string',
    },
    {
      title: 'Last name',
      name: 'lastName',
      type: 'string',
    },
    {
      title: 'Department',
      name: 'department',
      type: 'reference',
      to: [{type: 'department'}]
    },
    {
      title: 'Job title',
      name: 'jobTitle',
      type: 'string',
    },
    {
      title: 'Tags',
      name: 'tags',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags'
      }
    },
    {
      title: 'Excerpt',
      name: 'excerpt',
      type: 'text',
    },
    {
      title: 'Biography',
      name: 'biography',
      type: 'array',
      of: [{type: 'block'}]
    }
  ]
}

export default people
