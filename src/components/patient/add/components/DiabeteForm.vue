<template>
  <v-layout
    justify-center
  >
    <v-flex xs11 md11>      
      <v-form
        ref="form"
        v-model="valid"
        lazy-validation
      >
        <v-text-field
          name="ldl"
          :rules="ldlRules"
          label="LDL (mmol/l)"
        ></v-text-field>
        <v-text-field
          name="hdl"
          :rules="hdlRules"
          label="HDL (mmol/l)"
        ></v-text-field>
        <v-text-field
          name="triglicerides"
          :rules="triglicerideslRules"
          label="Triglicerides (mmol/l)"
        ></v-text-field>
        <v-flex text-xs-center>
          <v-btn
            :disabled="!valid"
            color="green"
            dark
            @click="validate"
          >
            Validate
          </v-btn>
        </v-flex>
      </v-form>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'diabete-form',
  data () {
    return {
      valid: true,
      ldl: '',
      ldlRules: [
        v => (typeof parseFloat(v) === 'number' || v.length === 0) || 'LDL must be a number'
      ],
      hdl: '',
      hdlRules: [
        v => (typeof parseFloat(v) === 'number' || v.length === 0) || 'HDL must be a number'
      ],
      triglicerides: '',
      trigliceridesRules: [
        v => (typeof parseFloat(v) === 'number' || v.length === 0) || 'HDL must be a number'
      ]
    }
  },
  methods: {
    validate () {
      if (this.$refs.form.validate()) {
        this.snackbar = true
      }
    }
  }
}
</script>
