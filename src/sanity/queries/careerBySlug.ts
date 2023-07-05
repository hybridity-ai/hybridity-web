const careerBySlug = `
*[_type == "career" && slug.current == $slug][0] {
  title,
  location,
  "department": department->name,
  positionType,
  content
}
`

export default careerBySlug
