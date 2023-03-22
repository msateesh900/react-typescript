type PersonListProps = {
  names: {
    first: string
    last: string
  }[]
}
export default function PersonList(props: PersonListProps) {
  return (
    <div>
      {/* <h2>Bruce Wayne</h2>
      <h2>Clark Kent </h2>
      <h2>Pricess Diana</h2> */}

      {props.names.map((name) => {
        return (
          <h2>
            {name.first} {name.last}
          </h2>
        )
      })}
    </div>
  )
}
