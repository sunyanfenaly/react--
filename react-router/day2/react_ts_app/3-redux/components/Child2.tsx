import React, { Component } from 'react'
import store from '../store'


class Child2 extends Component {
  state = {
    count: store.getState().count 
  }

  componentDidMount() {
      this.unsub = store.subscribe(() =>{
        this.setState({
          count: store.getState().count
        })
      })
  }
  componentWillUnmount() {
    this.unsub()
  }
  render() {
    console.log(this.state)
    return (
      <div className='box'>
        <h2>Child2</h2>
        <p>Count: {this.state.count}</p>
        <button onClick={() => store.dispatch({ type:'reduce'})}>改变count --</button>
      </div>
    )
  }
}



export default Child2