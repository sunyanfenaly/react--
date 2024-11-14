import React, { Component } from 'react'

class Child1 extends Component {
   

  render() {

     const { count, setCount } = this.props;
     console.log(this.props);
    return (
      <div>
        <p>子组件调用的父组件的参数 ： {count}</p>
        <p onClick={() => setCount(1)}>修改后的子组件内容</p>
      </div>
    )
  }
}

export default Child1