import * as React from 'react'

export function Counter5() {
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    const id = setInterval(() => {
      setCount(c => c + 1)
    }, 1000)
    return () => clearInterval(id)
  }, [])

  return <h1>{count}</h1>
}