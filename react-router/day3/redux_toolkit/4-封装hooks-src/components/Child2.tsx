import { useEffect } from "react"
import { getBannerThunk } from "../store/listSlice"
import { useAppDispatch, useAppSelector } from "../hooks/store"

const Child2 = () => {
  const banners = useAppSelector(state => state.list.banners)
  const bannerLoading = useAppSelector(state => state.list.bannerLoading)

  const dispatch = useAppDispatch()
  useEffect(() =>{
    dispatch(getBannerThunk())
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