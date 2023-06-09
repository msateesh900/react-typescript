import { Name } from "./Person.types"
type PersonListProps = {
  names: Name[]
}
export default function PersonList({ names }: PersonListProps) {
  return (
    <div>
      {/* <h2>Bruce Wayne</h2>
      <h2>Clark Kent </h2>
      <h2>Pricess Diana</h2> */}

      {names.map((name) => {
        return (
          <h2>
            {name.first} {name.last}
          </h2>
        )
      })}
    </div>
  )
}
