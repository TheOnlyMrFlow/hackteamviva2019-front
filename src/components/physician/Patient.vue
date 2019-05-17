<template>

     <v-card class="pa-3">

        <v-layout>

            <v-flex xs2 justify-center>
                <v-avatar
                size="90px"
                color="grey lighten-4"
                >
                    <v-img
                src="https://cdn.pixabay.com/photo/2017/02/23/13/05/profile-2092113_960_720.png"
                aspect-ratio="1"
                ></v-img>
                </v-avatar>
            </v-flex>

            <v-flex xs4>
                <v-card-title class="py-1" primary-title>
                    <div>
                        <h3 class="headline mb-0">{{firstName}} {{lastName}}</h3>
                        <div> {{ card_text }} </div>
                    </div>
                </v-card-title>
                <v-card-text class="py-1" style="text-align: start">
                    Age: {{age}}<br>
                    Gender: {{gender}} <br>
                    <br>
                    Height: {{height}}cm <br>
                    Weight: {{weight}}kg
                </v-card-text>
            </v-flex>

        </v-layout>


        <v-card-actions>
          <v-btn flat color="orange">Share</v-btn>
          <v-btn flat color="orange">Explore</v-btn>
        </v-card-actions>
      </v-card>


</template>

<script>

export default {
  name: 'patient-profile',
  data () {
    return {
      firstName: 'Jean-Pierre',
      lastName: 'Pernaut',
      age: 45,
      gender: 'female',
      weight: '78',
      height: '182'
    }
  }
}
</script>

<style>

</style>