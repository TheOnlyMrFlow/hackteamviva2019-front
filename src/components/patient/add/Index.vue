<template>
  <v-card-text>
    <v-expansion-panel expand focusable md6>
      <v-expansion-panel-content>
        <div slot="header">Diabete</div>
        <v-card>
          <diabete-form></diabete-form>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-card-text>
</template>

<script>
import DiabeteForm from './components/DiabeteForm'

export default {
  name: 'add',
  components: {DiabeteForm},
  data () {
    return {
    }
  }
}
</script>