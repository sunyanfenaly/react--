import React from 'react'
import Home from '../pages/home/Home'
import Search from '../pages/search/Search'
import Player from '../pages/player/Player'
import Login from '../pages/login/Login'
import NotFound from '../pages/404/404'

// 一步加载

const Detail = React.lazy(() => import(/* webpackChunkName: "detail" */'../pages/detail/Detail'))

import Auth from './Auth'


const routesConfig = [
    {
        path: '/',
        element: <Home />
    }, {
        path:'/login',
        element: <Login />
    }, {
        path:'/search',
        element: <Search />
    }, {
        path: '/player',
        element: <Player />
    }, {
        path: '/detail',
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