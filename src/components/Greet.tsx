type GreetProps = {
  name: string
  messageCount: number
  isLoggesIn: boolean
}

export default function Greet(props: GreetProps) {
  return (
    <div>
      <h2>
        {/* Welcome VIshwas you have 10 unread messages */}
        {props.isLoggesIn
          ? `Welcome ${props.name} you have ${props.messageCount} unread messages`
          : `Welcome Guest`}
      </h2>
    </div>
  )
}
