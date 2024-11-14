import React, { useContext} from 'react'
import appCtx, { Consumer } from '../context/appCtx'
const Child3 = () => {
    const val = useContext(appCtx);
    console.log(val)
  return (

        <main>
            <h2>Child3</h2>
            <h3>{val.tit}</h3>
        </main>
    // <Consumer>
    //    {
    //      ((value) => {
    //         return (
    //             <main>
    //                 <h2>Child3</h2>
    //                 <h3>{value.tit}</h3>
    //             </main>
    //         )
    //     })
    //    }
    // </Consumer>
  )
}

export default Child3