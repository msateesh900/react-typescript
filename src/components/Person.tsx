type PersonProps = {
  name: {
    first: string
    last: string
  }
}

export default function Person(props: PersonProps) {
  return (
    <div>
      {/* Bruce Wayne */}
      {props.name.first} {props.name.last}
    </div>
  )
}
