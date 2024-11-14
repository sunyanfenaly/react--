import React, { Component } from 'react'

class Child2 extends Component {
    
    state = {
        count: 0
    }
    add = (n) =>{
        this.setState({
            count: this.state.count + n
        })
    }
    render() {
        console.log(this)
        return (
        <div>
            <h2>Child2</h2>
            <p>{this.state.count}</p>
            <button onClick={() => this.add(1)}>+</button>
        </div>
        )
    }
}


export default Child2
