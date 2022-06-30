import { BoxBlog } from '../../../api-data/components/edinareact'


export default function handler(req, res) {
  res.status(200).json(BoxBlog)
}
