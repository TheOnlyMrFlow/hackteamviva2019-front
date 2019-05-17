import Vue from 'vue'
import Router from 'vue-router'
//  import Hello from '@/components/Hello'
import Home from '@/components/patient/Home'
import Dashboard from '@/components/physician/Dashboard'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'Hello',
    //   component: Hello
    // },
    {
      path: '/patient',
      name: 'Patient',
      component: Home
    },
    {
      path: '/physician',
      name: 'Physician',
      component: Dashboard
    }
  ]
})
