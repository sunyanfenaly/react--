// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.scss'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )


import React, {Suspense} from 'react' // 创建虚拟dom、组件...
import { createRoot } from 'react-dom/client' // 渲染dom
import {BrowserRouter} from 'react-router-dom' // 路由
import App from './App'
import './App.scss'

const root = createRoot(document.getElementById('root'))

root.render(
    // fallback : Suspense是 react内部的异步组件 加载过程中展示，展示的内容为 fallback的内容
    <Suspense fallback={<div style={{color: 'red', fontSize: '40px'}}>Loading...</div>}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Suspense>
)
