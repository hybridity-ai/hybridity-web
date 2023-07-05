const careers = `
*[_type == "career"] {
  title,
  location,
  "department": department->name,
  positionType,
  slug
}
`

export default careers
