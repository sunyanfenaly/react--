import { Component } from'react';
import './App.scss'

class App extends Component{
  state = {
    arr: []
  }

  addArr = () =>{
 // 1. setState 会把穿入的对象和原本的state进行合并
    // 2. setState 是异步更新的
    // 3. 当连续调用多次 setState react 会进行合并更新，只渲染一次
    // 4. setState 可以穿入一个函数，函数的参数就是最新的state
    // 5. setState的第二个参数可以传入一个函数，等待组件更新后执行


    
    // this.setState({
    //   arr: [...this.state.arr, '123']
    // }, () =>{
    //   组件更新后的回调，可以获取到最新的数据和dom
    //   console.log(this.state.arr)
    // })
    this.setState(pervState =>{
      console.log(pervState.arr)
      return {
           arr: [...pervState.arr, '123']
      }
    })
  }
  render() {
    
    return (
      <div className='app'>
        <button onClick={this.addArr}>按钮</button>
        <ul>
          {this.state.arr.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      </div>
    )
  }

}

export default App;