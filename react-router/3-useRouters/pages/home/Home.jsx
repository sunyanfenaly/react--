import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'
const Home = () => {
    return (
        <div className='home'>
            <main>
                <Outlet />
            </main>
            <footer>
                <NavLink to='/child1'>child1</NavLink>
                <NavLink to='/child2'>child2</NavLink>
                <NavLink to='/child3'>child3</NavLink>
            </footer>
        </div>
    )
}

export default Home