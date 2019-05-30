import * as React from 'react'

function useCurrentValue(value) {
  const ref = React.useRef(0)

  React.useEffect(() => {
    ref.current = value
  }, [value])

  return ref
}

function Counter() {
  const [count, setCount] = React.useState(0)
  const currentCount = useCurrentValue(count)

  const log = () => {
    setCount(count + 1)
    setTimeout(() => {
      console.log(currentCount.current)
    }, 3000)
  }

  return (
    <div>
      <p>{count}</p>
    </div>
  )
}