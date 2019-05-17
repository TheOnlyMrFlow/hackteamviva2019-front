<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" persistent max-width="1200px">
      <template v-slot:activator="{ on }">
        <v-btn v-on="on" outline class="my-1" color="rgba(67, 150, 136, 1)">Insert a blood test result</v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Blood test result</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap align-center>

              <v-flex xs9>
                <v-text-field label="WBCs"></v-text-field>
              </v-flex>
              <v-flex xs3>
                <span>billion/L</span>
              </v-flex>

              <v-flex xs9>
                <v-text-field label="Neutrophils"></v-text-field>
              </v-flex>
              <v-flex xs3>
                <span>%</span>
              </v-flex>

              <v-flex xs9>
                <v-text-field label="Lymphocytes"></v-text-field>
              </v-flex>
              <v-flex xs3>
                <span>%</span>
              </v-flex>

              <v-flex xs9>
                <v-text-field label="Monocytes"></v-text-field>
              </v-flex>
              <v-flex xs3>
                <span>%</span>
              </v-flex>

              <v-flex xs9>
                <v-text-field label="Eosinophils"></v-text-field>
              </v-flex>
              <v-flex xs3>
                <span>%</span>
              </v-flex>

              <v-flex xs9>
                <v-text-field label="Basophils"></v-text-field>
              </v-flex>
              <v-flex xs3>
                <span>%</span>
              </v-flex>

              <v-flex xs9>
                <v-text-field label="RBCs"></v-text-field>
              </v-flex>
              <v-flex xs3>
                <span>trillion/L</span>
              </v-flex>

              <v-flex xs9>
                <v-text-field label="HBs"></v-text-field>
              </v-flex>
              <v-flex xs3>
                <span>g/dL</span>
              </v-flex>

              <v-flex xs9>
                <v-text-field label="WBCs"></v-text-field>
              </v-flex>
              <v-flex xs3>
                <span>billion/L</span>
              </v-flex>

              <v-flex xs9>
                <v-text-field label="Hematocrit"></v-text-field>
              </v-flex>
              <v-flex xs3>
                <span>%</span>
              </v-flex>

              <v-flex xs9>
                <v-text-field label="Platelets"></v-text-field>
              </v-flex>
              <v-flex xs3>
                <span>billion/L</span>
              </v-flex>
              
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" flat @click="dialog = false">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
  export default {
    name: 'input-data',
    data: () => ({
      dialog: false
    })
  }
</script>