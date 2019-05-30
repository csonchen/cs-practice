import * as React from 'react'

export function Counter6() {
  const [count, setCount] = React.useState(0)
  const [step, setStep] = React.useState(0)

  React.useEffect(() => {
    const id = setInterval(() => {
      setCount(c => c + step)
    }, 1000)

    return () => clearInterval(id)
  }, [step])

  return <h1>{count}</h1>
}