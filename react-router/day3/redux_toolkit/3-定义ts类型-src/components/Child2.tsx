import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getBannerThunk } from "../store/listSlice"
import type { RootState, AppDispatch } from '../store'



const Child2 = () => {
  const banners = useSelector((state: RootState) => state.list.banners)
  const bannerLoading = useSelector((state: RootState) => state.list.bannerLoading)

  const dispatch = useDispatch()
  useEffect(() =>{
    (dispatch as AppDispatch)(getBannerThunk())
  }, [])





  return (
    <div className="box">
      {
        bannerLoading 
        ? 
          <div className="loading">
            <div className="loading-inner">loading...</div>
          </div> 
        : 
          banners && banners.map(item => {
            return <div key={item.targetId}>
              <img src={item.imageUrl} style={{width: '100%'}} alt={item.typeTitle} />
            </div>
          })
      }
    </div>
  )
}

export default Child2