import Login from './components/Login'
import Navbar from './components/utility/Navbar'

export default [
    //{path: '*', component: Login},
    {path: '/', component: Login},
    {name: 'login', path: '/login', component: Login},
    //{name: 'signup', path: '/signup', component: Signup},

    {path: '/test', component: Navbar}

    //the following require user auth
    //{name: 'program', path: '/program/:id', component: Program, props: true, meta: {requiresAuth: true}}
]