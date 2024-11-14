import React, {useRef, useState, useEffect} from 'react'

const App = () => {

  const [ count, setCount ] = useState(0)
  const isFirst = useRef(true)
  const timer = useRef(null)
 const [loading, setLoading] = useState(true);

  const start = () => {
    timer.current = setInterval(() => {
      setCount(n => n + 1)
    }, 1000)
  }

  const stop = () => {
    clearInterval(timer.current)
  }


  // 使用 useRef 和 useEffect 模拟componentDidUpdate
  // useEffect(() => {
  //   console.log('componentDidUpdate')

  //   const fetchData = async () =>{
  //       try {
  //         const res = await fetch('http://121.89.213.194:5001/banner')
  //         const result = await res.json()
  //         console.log(result)
  //       }
  //       catch (err) {
  //         console.log(err)
  //       }
  //       finally {
  //          setLoading(false);
  //       }
  //   }

  //   fetchData()

  // }, [count])

  const handleClick = async () => {
    try {
      const response = await fetch('http://121.89.213.194:5001/banner');
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    finally {
      setLoading(false);
    }
  };

useEffect(() => {
  handleClick();
}, [count])

  if (loading) {
    return <div>Loading...</div>;
  }




  return (
    <div>
      <p>count: {count}</p>
      <button onClick={start}>开始定时器</button>
      <button onClick={stop}>停止定时器</button>
    </div>
  )
}

export default App