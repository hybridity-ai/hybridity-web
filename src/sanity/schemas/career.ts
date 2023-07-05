const career = {
  name: 'career',
  type: 'document',
	title: 'Career',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        slugify: (input: String) => input
          .toLowerCase()
          .replace(/\s+/g, '-')
          .slice(0, 200)
      }
    },
    {
      title: 'Location',
      name: 'location',
      type: 'string',
    },
    {
      title: 'Position Type',
      name: 'positionType',
      type: 'string',
    },
    {
      title: 'Department',
      name: 'department',
      type: 'reference',
      to: [{type: 'department'}]
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
      title: 'Content',
      name: 'content',
      type: 'array',
      of: [{type: 'block'}]
    }
  ]
}

export default career
