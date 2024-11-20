import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getBannerThunk } from "./store/listSlice"
import Child1 from './components/Child1'
import Child2 from './components/Child2'


const App = () => {

  const bannerLoading = useSelector(state => state.list.bannerLoading)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getBannerThunk())
  }, [])

  return (
    <div className='app'>
      <Child2 />
    </div>
  )
}

export default App