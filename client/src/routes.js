import Login from './views/Login'
import Home from './views/Home'
import Services from './views/Services'
import Supplies from './views/Supplies'
import QuickOrder from './views/QuickOrder'
import Invoices from './views/Invoices'
import Navbar from './components/Navbar'

export default [
    {path: '*', component: Login},
    {path: '/', component: Login, nav: false},
    {path: '/login', component: Login, nav: false},
    //{name: 'signup', path: '/signup', component: Signup},

    //the following require user auth
    {name: 'Home', path: '/home', components: {default: Home, nav: Navbar}, meta: {requiresAuth: true, nav: false}},
    {name: 'Services', path: '/services', components: {default: Services, nav: Navbar}, meta: {requiresAuth: true, nav: true, icon: 'fa-tools'}},
    {name: 'Supplies', path: '/supplies', components: {default: Supplies, nav: Navbar}, meta: {requiresAuth: true, nav: true, icon: 'fa-parachute-box'}},
    {name: 'Quick Order', path: '/quick-order', components: {default: QuickOrder, nav: Navbar}, meta: {requiresAuth: true, nav: true, icon: 'fa-undo-alt'}},
    {name: 'Invoices', path: '/invoices', components: {default: Invoices, nav: Navbar}, meta: {requiresAuth: true, nav: true, icon: 'fa-list'}}
]