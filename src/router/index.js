import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import GridSystem from '../views/GridSystem.vue'
import GridList from '../views/GridListPage.vue'
import Breakpoints from '../views/Breakpoints.vue'
import typographyNcolors from '../views/Typography.vue'
import Button from '../views/Buttons.vue'
import Forms from '../views/Forms.vue'
import SignIn from '../views/authentication/SignIn'
import SignUp from '../views/authentication/SignUp'
import ProductList from '../views/page/ProductList'
import DefaultLayout from '@/layout/default/Index'
import PageLayout from '@/layout/page/Index'
import AuthenticationLayout from '@/layout/authentication/Index'


Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    component:DefaultLayout,
    children:[
      {
        path: '/',
        name: 'Dashboard',
        component: Dashboard
      },
      {
        path: '/grid-system',
        name: 'GridSystem',
        component: GridSystem
      },
      {
        path: '/grid-list',
        name: 'GridList',
        component: GridList
      },
      {
        path: '/breakpoints',
        name: 'Breakpoints',
        component: Breakpoints
      },
      {
        path: '/typography-color',
        name: 'typographyNcolors',
        component: typographyNcolors
      },
      {
        path: '/buttons',
        name: 'Buttons',
        component: Button
      },
      {
        path: '/forms',
        name: 'Forms',
        component: Forms
      },
    ]
  },
  {
    path:'/authentication',
    component:AuthenticationLayout,
    children:[
      {
        path: 'sign-in',
        name: 'SignIn',
        component: SignIn
      },
      {
        path: 'sign-up',
        name: 'SignUp',
        component: SignUp
      },
    ]
  },
  {
    path:'/page',
    component:PageLayout,
    children:[
      {
        path: 'product-list',
        name: 'ProductList',
        component: ProductList
      },
    ]
  },
]

const router = new VueRouter({
  mode:'history',
  routes
})

export default router
