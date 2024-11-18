import React from 'react'
import { Navigate } from 'react-router-dom'

import Home from '../pages/home/Home'
import Child2 from '../pages/home/components/Child2'

import Login from '../pages/login/Login'
import NotFound from '../pages/404/404'

// 一步加载
const Child1 = React.lazy(() => import(/* webpackChunkName: "child3" */'../pages/home/components/Child1'))
const Child3 = React.lazy(() => import(/* webpackChunkName: "child3" */'../pages/home/components/Child3'))
const Detail = React.lazy(() => import(/* webpackChunkName: "detail" */'../pages/detail/Detail'))

import Auth from './Auth'


const routesConfig = [
    {
        path: '/',
        element: <Home />,
        children: [
            {
                path:'/',
                element:    <Navigate to="/child1" />
            },
            {
                path:'/child1',
                element:    <Child1 />
            },{
                path:'/child2',
                element:    <Child2 />
            },{
                path:'/child3',
                element:    <Auth> 
                                <Child3 />
                            </Auth>
            }
        ]
    },{
        path:'/login',
        element: <Login />
    }, {
        path: 'detail/:id/:name',
        element:  <Auth> 
                    <Detail />
                </Auth>
    },
    {
        path: '*',
        element: <NotFound />
    }
]

export default routesConfig