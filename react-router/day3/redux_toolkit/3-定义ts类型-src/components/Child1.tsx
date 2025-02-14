import { useSelector, useDispatch } from "react-redux"
import { add, reduce, reset } from "../store/countSlice"
import { addArr, delArr } from '../store/listSlice'
import type { RootState, AppDispatch } from '../store'


const Child1 = () => {
  const list = useSelector((state: RootState) => state.list.list)
  const count = useSelector((state: RootState) => state.counter.count)
  const dispatch: AppDispatch = useDispatch()
  return (
    <div className="box">
        <h1>Child1</h1>
      <button onClick={() => dispatch(addArr(Number(Math.random().toFixed(2))))}>添加列表元素</button>
        {
          list.map((item, ind) =>{
            return <p key={ind} style={{height:'40px'}}>{item} <button onClick={() =>{
              dispatch(delArr(ind))
            }}>删除</button></p>
          })
        }
        <hr/>
        <p>Count: {count}</p>
        <button onClick={() => dispatch(add())}>改变count+</button>
        <button onClick={() => dispatch(reduce())}>改变count--</button>
        <button onClick={() => dispatch(reset(2))}>重置count</button>
    </div>
  )
}

export default Child1