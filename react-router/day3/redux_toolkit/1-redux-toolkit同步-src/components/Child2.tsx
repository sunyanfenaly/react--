import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getBanners } from "../services"
import { setBanners } from '../store/bannerSlice'




const Child2 = () => {
  const banners = useSelector(state => state.banner.banners)
  const dispatch = useDispatch()
  console.log(banners)
  useEffect(() =>{
    getBanners().then(res => {
      console.log(res.data)
      dispatch(setBanners(res.data.banners))
    })
  }, [])





  return (
    <div className="box">
      {
        banners.map(item => {
          return <div key={item.targetId}>
            <img src={item.imageUrl} style={{width: '100%'}} alt={item.typeTitle} />
          </div>
        })
      }
    </div>
  )
}

export default Child2