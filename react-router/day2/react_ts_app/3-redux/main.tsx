
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.tsx'

// StrictMode 严格模式
createRoot(document.getElementById('root')!).render(  <App /> )
// document.getElementById('root')!  非空断言!