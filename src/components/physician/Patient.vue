<template>

     <v-card class="pa-3" color="#EEEEEE">

      <v-snackbar v-model="snackbarNotificationSent" top >
        A notification has been sent to the patient
        <v-btn color="primary" flat @click="snackbarNotificationSent = false">
          Close
        </v-btn>
      </v-snackbar>

      <v-card class="alert alert-danger">
        <v-card-title style="color: #FFF; font-weight: bold; ">
          This patient's data is showing a high risk of ...
        </v-card-title>
      </v-card>

      <v-card class="alert alert-warning">
        <v-card-title style="color: #FFF; font-weight: bold; ">
          This patient hasn't uploaded any data for 3 days
        </v-card-title>
      </v-card>

      <v-container fluid>

        <v-layout row>


        </v-layout>

        <v-layout row>

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

            <v-flex xs4>
            </v-flex>

            <v-flex xs4>
              <v-card-actions>
                <v-flex xs12 justify-start> 
                  <v-btn @click="snackbarNotificationSent = true" outline class="my-1" color="#ef4242">Suggest to take an appointment</v-btn>
                  <input-data></input-data>
                </v-flex>
              </v-card-actions>
            </v-flex>

        </v-layout>

        <v-layout row class="my-3">

          <v-flex xs12>
            <v-card  style="min-height: 400px;">
              <v-card-title>
              Container des graphs
              </v-card-title>
            </v-card>
          </v-flex>

        </v-layout>

      </v-container>
        
    </v-card>


</template>

<script>

import InputData from './InputData'

export default {
  name: 'patient-profile',
  components: {
    InputData
  },
  data () {
    return {
      firstName: 'Jean-Pierre',
      lastName: 'Pernaut',
      age: 45,
      gender: 'female',
      weight: '78',
      height: '182',

      snackbarNotificationSent: false
    }
  }
}
</script>

<style>

.alert {
  margin-bottom: 10px;
  border-radius: 20px !important;
  box-shadow: none;
}

.alert-danger {
  background: #FF0000 !important;
}

.alert-warning {
  background: #ff7200 !important;
}

</style>