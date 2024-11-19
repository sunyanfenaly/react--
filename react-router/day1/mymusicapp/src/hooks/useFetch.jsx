import {useState, useEffect} from 'react'
import axios from 'axios'


axios.defaults.baseURL = 'http://121.89.213.194:5001'
// 自定义hook
    // 命名以 use 开头的
export const useFetch = ({
    url, 
    immediate, 
    initParams= {}
} ) => {

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const refresh  = async (params) => {
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
            refresh (initParams)
        }
    }, [])

    return {
        data,
        loading,
        refresh
    }
}

export default useFetch