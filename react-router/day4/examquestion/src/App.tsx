import style from './App.module.scss'
import { useRoutes} from 'react-router-dom'
import Home from './pages/home/Home'
import ExamQuestion from './pages/examquestion/ExamQuestion'
import ExamResult from './pages/404/NotFound'

function App() {
  
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/examquestion', element: <ExamQuestion /> },
    { path: '*', element: <ExamResult /> },
  ])  

  return (
    <div className={style.App}>
      {routes}
    </div>
  )
}

export default App
