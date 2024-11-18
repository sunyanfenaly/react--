import { useEffect, useState} from 'react'
import { useNavigate  } from 'react-router-dom'
import axios from 'axios'


const Child1 = () => {
  const [list, setList] = useState([])
  const navigate = useNavigate()


  useEffect(() => {
    axios.get('https://zyxcl.xyz/music/api/toplist')
      .then(res => {
         setList(res.data.list)
      })
  }, [])

  

  return (
    <div className='list'>
        {
          list.map(item =>{
              return (
                <div key={item.id} className='item' onClick={() =>{
                  // navigate('/detail?id=' + item.id + '&name=' + item.name)
                  navigate(`/detail/${item.id}/${item.name}`)
                }}>
                  <img src={item.coverImgUrl} width={70} alt={item.name} />
                  <div className='info'>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              )
          })
        }
    </div>
  )
}

export default Child1