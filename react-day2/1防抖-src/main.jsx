// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.scss'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )



import React from 'react' // 创建虚拟dom、组件...
import { createRoot } from 'react-dom/client' // 渲染dom

import App from './App'

const root = createRoot(document.getElementById('root'))

root.render(<App />)
