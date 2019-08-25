import * as React from 'react'

export function Counter4() {
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    const id = setInterval(() => {
      setCount(count + 1)
      console.log(count)
    }, 1000)
    return () => clearInterval(id)
  }, [count])

  return (
    <h1>{count}</h1>
  )
}