type StatusProps = {
  //   status: string
  status: "loading..." | "success" | "error"
}

export default function Status({ status }: StatusProps) {
  let message
  if (status === "loading...") message = "Loading..."
  else if (status === "success") message = "Data Fetched Successfully"
  else if (status === "error") message = "Error Fetching Data"
  return (
    <div>
      {/* <h2>Loading....</h2>
      <h2>Data Fetched Successfully</h2>
      <h2>Error Fetching Data</h2> */}
      <h2>Status - {message}</h2>
    </div>
  )
}
