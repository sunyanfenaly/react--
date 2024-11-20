
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.tsx'
import  Store from './store'
import { Provider } from'react-redux'

// StrictMode 严格模式
createRoot(document.getElementById('root')!).render(  
    <Provider store={Store}>
        <App />
    </Provider>
 )
// document.getElementById('root')!  非空断言!