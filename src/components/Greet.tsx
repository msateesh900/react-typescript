type GreetProps = {
  name: string
  messageCount?: number
  isLoggesIn: boolean
}

export default function Greet({
  name,
  messageCount = 0,
  isLoggesIn,
}: GreetProps) {
  // const { messageCount = 0 } = messageCount
  // messageCount = 0
  return (
    <div>
      <h2>
        {/* Welcome Vishwas you have 10 unread messages */}
        {/* {props.isLoggesIn
          ? `Welcome ${props.name} you have ${props.messageCount} unread messages`
          : `Welcome Guest`} */}
        {isLoggesIn
          ? `Welcome ${name} you have ${messageCount} unread messages`
          : `Welcome Guest`}
      </h2>
    </div>
  )
}
