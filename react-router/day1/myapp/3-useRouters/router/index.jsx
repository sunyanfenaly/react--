import { Navigate } from 'react-router-dom'

import Home from '../pages/home/Home'
import Child1 from '../pages/home/components/Child1'
import Child2 from '../pages/home/components/Child2'
import Child3 from '../pages/home/components/Child3'

import Login from '../pages/login/Login'
import NotFound from '../pages/404/404'
import Detail  from '../pages/detail/Detail'



const routesConfig = [
    {
        path: '/',
        element: <Home />,
        children: [
            {
                path:'/',
                element: <Navigate to="/child1" />
            },
            {
                path:'/child1',
                element: <Child1 />
            },{
                path:'/child2',
                element: <Child2 />
            },{
                path:'/child3',
                element: <Child3 />
            }
        ]
    },{
        path:'/login',
        element: <Login />
    }, {
        path: 'detail',
        element: <Detail />
    },
    {
        path: '*',
        element: <NotFound />
    }
]

export default routesConfig