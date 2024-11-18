import React from 'react'
import { useLocation, useParams, useSearchParams } from 'react-router-dom'
const Detail = () => {
  const [searchParams] = useSearchParams()  // 获取静态路由的 查询参数
  const params = useParams()                // 获取动态路由参数
  const location = useLocation()            // 获取当前路由信息
  
  
  // console.log(searchParams.get('id'), '获取静态路由的参数')       // 获取静态路由参数
  // console.log(location, '获取当前路由的信息')
  // console.log(params, '获取动态路由参数')
  return (
    <div>Detail</div>
  )
}

export default Detail