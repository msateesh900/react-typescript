type GreetProps = {
  name: string
  messageCount?: number
  isLoggesIn: boolean
}

export default function Greet(props: GreetProps) {
  const { messageCount = 0 } = props
  return (
    <div>
      <h2>
        {/* Welcome Vishwas you have 10 unread messages */}
        {/* {props.isLoggesIn
          ? `Welcome ${props.name} you have ${props.messageCount} unread messages`
          : `Welcome Guest`} */}
        {props.isLoggesIn
          ? `Welcome ${props.name} you have ${messageCount} unread messages`
          : `Welcome Guest`}
      </h2>
    </div>
  )
}
