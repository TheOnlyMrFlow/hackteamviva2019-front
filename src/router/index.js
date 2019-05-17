import Vue from 'vue'
import Router from 'vue-router'
//  import Hello from '@/components/Hello'
import PatientHome from '@/components/patient/Home'
import PhysicianHome from '@/components/physician/Home'
import Patient from '@/components/physician/Patient'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/patient',
      name: 'Patient',
      component: PatientHome
    },
    {
      path: '/physician',
      name: 'Physician',
      component: PhysicianHome,
      children: [
        {
          path: 'patients/:id',
          name: 'Physician-patients',
          component: Patient
        }
      ]
    }
  ]
})
