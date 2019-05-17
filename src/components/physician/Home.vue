<template>
  
  <div id="physician-home">
    
    <v-layout row wrap justify-center>
        <v-flex xs10 >
            <patients-list></patients-list>    
        </v-flex>


        <v-flex xs10>
          <router-view class="mt-5"></router-view>
        </v-flex>

    </v-layout>
  </div>
    

</template>

<script>

import PatientsList from './PatientsList'

export default {
  name: 'dashboard',
  components: {
    PatientsList
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js PWA'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>


</style>
