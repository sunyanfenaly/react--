import {useState, useEffect} from 'react'
import axios from 'axios'

// 自定义hook
    // 命名以 use 开头的
export const useFetch = ({
    url, 
    immediate, 
    initParams= {}
} ) => {

    const [data, setData] = useState({})
    const [loading, setLoading] = useState(false)
    const getFetchData = async (params) => {
        try {
            setLoading(true)
            const res = await axios.get(url, { params })
            setData(res.data)

        }catch(error) {
            console.log(error)
        }
        finally {
            setLoading(false)
        }
    }



    useEffect(() =>{
        if(immediate){
            getFetchData(initParams)
        }
    }, [])

    return {
        data,
        loading,
        getFetchData
    }
}

export default useFetch