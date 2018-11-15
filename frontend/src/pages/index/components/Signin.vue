<template>
  <v-form v-model="valid" ref="loginform" lazy-validation>
    <v-card style ="background-image: linear-gradient(to top, #9a35b7, #5e3fb4);">
      <v-card-text>
        <h1 style="color:white; font-size:300%;" class="title">Log in to your account</h1>
        <v-text-field
          label="Email Address"
          class="mt-5"
          v-model="loginEmail"
          :rules="emailRules"
          solo
          required
        ></v-text-field>
        <v-text-field
          name="input-10-1"
          label="Password"
          hint="At least 8 characters"
          min="8"
	  v-on:keyup.enter="submit"
          v-model="loginPassword"
	  :append-icon="e1 ? 'visibility_off' : 'visibility'"
          :rules="passwordRules"
          :type="e1 ? 'password' : 'text'"

          solo
          required
          @click:append="e1 = !e1"
        ></v-text-field>
	<v-alert :value="error" type="error">
         Incorrect e-mail or password.
       </v-alert>
      </v-card-text>
      <v-divider class="mt-1"></v-divider>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="#fece56" to="/CharacterList">Log In</v-btn>
      </v-card-actions>
    </v-card>
  </v-form>
</template>

<script>
import { mapState } from 'vuex';
export default {
  data: () => ({
    valid: false,
    e1: true,
    loginPassword: '',
    loginEmail: '',
    error: false,
    passwordRules: [(v) => !!v || 'Password is required'],
    emailRules: [
      (v) => !!v || 'E-mail is required',
      (v) => /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
    ]
  }),
  computed: mapState('user', ['userEmail']),
  watch: {
    userEmail : function (value) {
      if (this.userEmail) {
        this.$router.push('/ScenarioList')
      } else {
	this.error = true
        console.log('invalid')
      }
    }
  },
  methods: {
    submit () {
      if (this.$refs.loginform.validate()) {
            let payload = {
        email: this.loginEmail,
        password: this.loginPassword
      }
      this.$store.dispatch('user/authenticateUser', payload)
      }
    }
  }
}
</script>

<style>

</style>
