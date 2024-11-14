import React from 'react'

 const App = () => {
  const [tit, setTit] = React.useState('')
  const timer = React.useRef(null)

   const changeTit = (e) =>{
      setTit(e.target.value)
      if(timer.current){
           clearTimeout(timer.current)
      }
      timer.current = setTimeout(() => {
          fetch('http://121.89.213.194:5001/banner')
            .then(res => res.json())
              .then(data => {
                console.log(data)
              })

              timer.current = null
      }, 1000)
  }


  return (
    <div>
        <input type="text" value={tit} onChange={changeTit} />

    </div>
  )
}



export default App