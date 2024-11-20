import { useSelector, useDispatch } from "react-redux"
import { add, reduce, reset } from "../store/countSlice"
import { addArr, delArr } from '../store/listSlice'

const Child1 = () => {
  const list = useSelector(state => state.list.list)
  const count = useSelector(state => state.counter.count)
  const dispatch = useDispatch()
  return (
    <div className="box">
        <h1>Child1</h1>
        <button onClick={() => dispatch(addArr('new item'))}>添加列表元素</button>
        {
          list.map((item, ind) =>{
            return <p key={ind} style={{height:'40px'}}>{item} <button onClick={() =>{
              dispatch(delArr(ind))
            }}>删除</button></p>
          })
        }
        <hr/>
        <p>Count: {count}</p>
        <button onClick={() => dispatch(add(1))}>改变count+</button>
        <button onClick={() => dispatch(reduce(-1))}>改变count--</button>
        <button onClick={() => dispatch(reset(2))}>重置count</button>
    </div>
  )
}

export default Child1