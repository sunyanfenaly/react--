import { Link} from 'react-router-dom'
import { Button } from 'antd'
const Home = () => {
  return (
    <div className='home'>
        <h1>Home Page</h1> 
            <Link to="/examquestion">
                <Button type="primary">Go to Exam Question</Button>
            </Link>
    </div>
  )
}

export default Home