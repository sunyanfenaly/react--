import { useState, useEffect } from 'react'
import Loading from './Loading'
import axios from 'axios'

import {useFetch } from '../hooks/useFetch'

const Child1 = () => {
    const { getFetchData, loading, data } = useFetch({
        url: 'https://zyxcl.xyz/music/api/banner',
        immediate: true   // 立即请求数据
    })
    
    return (
        
        <div className='banner-container'>
            { loading && <Loading />} 
            <button onClick={getFetchData}>获取banner信息</button>
            <ul className='banner'>
                {
                    data.banners?.map((item, index) =>{
                        return (
                            <li key={index}>
                                <img src={item.imageUrl} width={300} alt="" />
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Child1