const careerBySlug = `
*[_type == "career" && slug.current == $slug][0] {
  title,
  location,
  content
}
`

export default careerBySlug
