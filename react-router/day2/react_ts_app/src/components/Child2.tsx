import { Component } from 'react'
import { useSelector, useDispatch,connect } from 'react-redux'


class Child2 extends Component {
  
  render() {
    console.log(this.props)
    return (
      <div className='box'>
        <h2>Child2</h2>
        <p>Count: {this.props.count}</p>
        <button onClick={() => this.props.dispatch({ type:'reduce'})}>改变count --</button>
      </div>
    )
  }
}


const mapStateToProps = state => {
  console.log(state)
  return {
    count: state.count
  }
}
export default connect(mapStateToProps)(Child2)