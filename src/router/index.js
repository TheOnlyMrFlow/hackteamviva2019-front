import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'

// Physician
import Dashboard from '@/components/physician/Dashboard'

// Patient
import Patient from '@/components/patient/Index'
import PatientHome from '@/components/patient/home/Index'
import PatientAdd from '@/components/patient/add/Index'

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
      component: Patient,
      children: [
        {
          path: '',
          component: PatientHome
        },
        {
          path: 'add',
          component: PatientAdd
        }
      ]
    },
    {
      path: '/physician',
      name: 'Physician',
      component: Dashboard
    }
  ]
})
