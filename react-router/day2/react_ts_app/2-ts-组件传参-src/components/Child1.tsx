import React, { Component } from 'react'

interface Props {
  count: number,
  setCount: (count: number) => void
}
interface State {
  flag: boolean,
  number: number
}



class Child1 extends Component<Props, State> {

  state = {
    flag: true,
    number: 10
  }
  

  render() {
    console.log(this.props)
    return (
      <div>
        <h1>Child1</h1>
        <p>Count: {this.props.count}</p>
        <button onClick={() => this.props.setCount(this.props.count + 1)}>改变count，触发props更新</button>
      </div>
    )
  }
}

export default Child1
