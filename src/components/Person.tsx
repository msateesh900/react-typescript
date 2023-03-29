import { PersonProps } from "./Person.types"

export default function Person({ name }: PersonProps) {
  return (
    <div>
      {/* Bruce Wayne */}
      {name.first} {name.last}
    </div>
  )
}
