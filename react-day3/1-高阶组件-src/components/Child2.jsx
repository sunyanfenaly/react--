import React, { Component } from 'react'
import WithPos  from '../hoc/WithPos'
class Child2 extends Component {
  render() {
    return (
        <div>
            <h3>Child2</h3>
        
            <p>{JSON.stringify(this.props.pos)}</p>
        </div>
    )
  }
}
export default WithPos(Child2)