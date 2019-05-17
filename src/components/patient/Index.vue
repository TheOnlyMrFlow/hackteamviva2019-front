<template>
  <v-layout>
    <v-flex xs12 sm12>
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
        <v-container fluid fill-height>
          <v-layout xs12 md12 justify-center>
            <v-flex xs12 md6>
              <router-view></router-view>
            </v-flex>
          </v-layout>
        </v-container>
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
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'patient',
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
