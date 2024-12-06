import { Button, Result } from 'antd';
import { useNavigate} from 'react-router-dom'


const NotFound: React.FC = () => {
    const navigate = useNavigate()
    console.log("NotFound", navigate)

  return (
      <Result
          status="404"
          title="404"
          subTitle="对不起，你访问的页面不存在."
          extra={<Button type="primary" onClick={() => navigate('/')}>去首页吧！</Button>}
      />
  )
}

export default NotFound