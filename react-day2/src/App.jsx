import { Component } from'react';
import './App.scss'

class App extends Component{
  state = {
    count: 0,
    title: '标题'
  }

// 合成事件: 
  // 1. React 自己实现了一套事件注册、分发的机制，统一了不同浏览器之间事件系统的差异。
  // 2. React 元素上声明的事件最终绑定到了 document 这个 DOM 节点上，（react18之后是 root节点）
  // 而不是 React 组件对应的 DOM 节点。只有document这个节点上面才绑定了DOM原生事件，其他节点没有绑定事件。
  // 这样简化了DOM原生事件，减少了内存开销。
    clickBox = (e) => {
      // e: react包装之后的合成事件对象
      console.log('点击元素', e)
      // e.nativeEvent: 获取原始事件对象
      console.log('原始事件对象', e.nativeEvent)
    }

    add () {
      console.log(this)
    } 
  render() {
    
    return (
      <div className='app'>
            <h2>{this.state.title}</h2>
            <p>count: {this.state.count}</p>
            <button onClick={this.add.bind(this)}>+</button>
            {/* 合成事件 */}
            <div onClick={this.clickBox} className="box"></div>
      </div>
    )
  }

}

export default App;