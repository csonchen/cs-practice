import * as React from 'react'

export default class Counter2 extends React.Component {
  state = {count: 0}

  log = () => {
    this.setState({
      count: this.state.count + 1
    })
    setTimeout(() => {
      console.log(this.state.count)
    }, 3000)
  }

  render() {
    return (
      <div>
        <p>clicked {this.state.count} times</p>
        <button onClick={this.log}>click me</button>
      </div> 
    )
  }
}