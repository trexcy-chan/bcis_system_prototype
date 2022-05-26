import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../views/LoginPage.vue'
import HomePage from '../views/HomePage.vue'
import SignupPage from '../views/SignupPage.vue'
import RequestcertPage from '../views/RequestcertPage.vue'
import TrackcertPage from '../views/TrackcertPage.vue'
import EditProfile from '../views/EditProfile.vue'
import AdminHomePage from '../views/Admin/AdminHomePage.vue'
import AppointmentPage from '../views/Admin/AppointmentPage.vue'
import ResidentPage from '../views/Admin/ResidentPage.vue'
import RevenuePage from '../views/Admin/RevenuePage.vue'
import AdminLogin from  '../views/Admin/AdminLogin.vue'
import ResidentSignUpPage from  '../views/ResidentSignUpPage.vue'
import ForgotPass from  '../views/ForgotPass.vue'
import QueingSample from '../views/Admin/QueingSample.vue'

import { auth } from '../firebase'
const routes = [ 
  {
    path: '/about/:id',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  //residents
  {
    path: '/loginpage',
    name: 'LoginPage',
    component: LoginPage
  },
  {
    path: '/homepage/:id',
    name: 'HomePage',
    component: HomePage,
  },
  {
    path: '/signuppage',
    name: 'SignupPage',
    component: SignupPage
  },
  {
    path: '/residentsignuppage',
    name: 'ResidentSignUpPage',
    component: ResidentSignUpPage
  },
  {
    path: '/requestcertpage/:id',
    name: 'RequestcertPage',
    component: RequestcertPage
  },
  {
    path: '/trackcertpage/:id',
    name: 'TrackcertPage',
    component: TrackcertPage
  },
  {
    path: '/editprofile/:id',
    name: 'EditProfile',
    component: EditProfile
  },
  //admins
  {
    path: '/adminhomepage/:id',
    name: 'AdminHomePage',
    component: AdminHomePage
  },
  {
    path: '/appointmentpage/:id',
    name: 'AppointmentPage',
    component: AppointmentPage
  },
  {
    path: '/resident/:id',
    name: 'ResidentPage',
    component: ResidentPage
  },
  {
    path: '/revenue/:id',
    name: 'RevenuePage',
    component: RevenuePage
  },
  {
    path: '/admin-login',
    name: 'AdminLogin',
    component: AdminLogin
  },
  {
    path: '/forgot-pass',
    name: 'ForgotPass',
    component: ForgotPass
  },
  {
    path: '/queingsample',
    name: 'QueingSample',
    component: QueingSample
  },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


router.beforeEach((to, from, next) => {
  if(to.path === '/login' && auth.currentUser){
    next('/')
    return;
  }

  if (to.matched.some(record => record.meta.requiresAuth) && !auth.currentUser){
    next('/loginpage')
    return;
  }
  next();
})

export default router
