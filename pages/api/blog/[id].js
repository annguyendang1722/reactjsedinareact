import { BoxBlog } from '../../../api-data/components/edinareact'

export default function personHandler({ query: { id } }, res) {
  const filtered = BoxBlog.filter((databoxblog) => databoxblog.id === id)

  // User with id exists
  if (filtered.length > 0) {
    res.status(200).json(filtered[0])
  } else {
    res.status(404).json({ message: `User with id: ${id} not found.` })
  }
}
