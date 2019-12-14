import Login from './views/Login'
import Home from './views/Home'

export default [
    //{path: '*', component: Login},
    {path: '/', component: Login, nav: false},
    {path: '/login', component: Login, nav: false},
    {name: 'Home', path: '/home', component: Home, nav: false},
    //{name: 'signup', path: '/signup', component: Signup},

    //the following require user auth
    {name: 'Services', path: '/services', component: Home, meta: {requiresAuth: true}, nav: true, icon: 'fa-tools'},
    {name: 'Supplies', path: '/supplies', component: Home, meta: {requiresAuth: true}, nav: true, icon: 'fa-parachute-box'},
    {name: 'Quick Order', path: '/quick-order', component: Home, meta: {requiresAuth: true}, nav: true, icon: 'fa-undo-alt'},
    {name: 'Invoices', path: '/invoices', component: Home, meta: {requiresAuth: true}, nav: true, icon: 'fa-list'}
]