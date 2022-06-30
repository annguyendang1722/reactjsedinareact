import { useRouter } from 'next/router'
import useSWR from 'swr'

const fetcher = async (url) => {
  const res = await fetch(url)
  const data = await res.json()

  if (res.status !== 200) {
    throw new Error(data.message)
  }
  return data
}

export default function Blog() {
  const { query } = useRouter()
  const { data, error } = useSWR(
    () => query.id && `/api/blog/${query.id}`,
    fetcher
  )

  if (error) return <div>{error.message}</div>
  if (!data) return <div>Loading...</div>

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Height</th>
          <th>Mass</th>
          <th>Hair color</th>
          <th>Skin color</th>
          <th>Eye color</th>
          <th>Gender</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{data.name}</td>
        </tr>
      </tbody>
    </table>
  )
}
