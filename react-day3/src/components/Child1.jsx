import React, { Component } from 'react'
import WithPos  from '../hoc/WithPos'

console.log(WithPos)
class Child1 extends Component {
   
    render() {
        return (
        <div>
            
            {JSON.stringify(this.props.pos)}
        </div>
        )
    }
}



export default WithPos(Child1)
