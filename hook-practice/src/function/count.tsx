import * as React from 'react'

export function Counter() {
  const [count, setCount] = React.useState(0)
  const currentCount = React.useRef(count)
  
  React.useEffect(() => {
    currentCount.current = count
    console.log('effect:', currentCount.current)
  })

  const log = () => {
    setCount(count + 1)
    console.log("直接输出：", count)
    setTimeout(() => {
      console.log(currentCount.current);
    }, 3000)
  }

  return (
    <div>
      <p>clicked {count} times</p>
      <button onClick={log}>Click me</button>
    </div>
  )
}