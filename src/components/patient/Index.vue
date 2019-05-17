<template>
  <v-layout row>
    <v-flex xs12 sm12>
      <v-card>
        <v-toolbar color="blue" dark>
          <v-toolbar-title>{{ user.firstname }} {{ user.lastname }}</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon>search</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>check_circle</v-icon>
          </v-btn>
        </v-toolbar>
        <router-view></router-view>
        <router-link to="/patient/add">
          <v-btn
            fixed
            right
            bottom
            color="pink"
            fab
            dark
          >
            <v-icon>
              add
            </v-icon>
          </v-btn>
        </router-link>
      </v-card>
    </v-flex>
  </v-layout>
    
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      user: {
        firstname: 'John',
        lastname: 'Doe'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
