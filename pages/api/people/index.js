import { people } from '../../../api-data/components/dataperson'


export default function handler(req, res) {
  res.status(200).json(people)
}
