import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getBannerThunk } from "../store/listSlice"




const Child2 = () => {
  const banners = useSelector(state => state.list.banners)
  const bannerLoading 
  = useSelector(state => state.list.bannerLoading)

  const dispatch = useDispatch()
  console.log(banners)
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