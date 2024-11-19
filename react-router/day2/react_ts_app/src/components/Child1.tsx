
import { useSelector, useDispatch } from 'react-redux'


const Child1 = () => {
  const dispatch = useDispatch()
  const name = useSelector(state => state.name)
  return (
    <div className='box'>
      <h3>{name}</h3>
      <button onClick={() => {
        dispatch({
          type:'changeName',
          payload: Math.random().toFixed(2)
        })
      }}>改变count ++ </button>
    </div>
  )
}

export default Child1