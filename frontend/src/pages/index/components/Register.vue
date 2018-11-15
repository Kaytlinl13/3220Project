<template>
  <v-form v-model="valid" ref="registerform" lazy-validation>
    <v-card style ="background-image: linear-gradient(to top, #9a35b7, #5e3fb4);">
      <v-card-text>
        <h1 style="color:white; font-size:300%;" class="title">Create User Account</h1>
        <v-text-field
          label="Email Address"
          class="mt-5"
          v-model="registerEmail1"
          :rules="emailRules"
          solo
          required
        ></v-text-field>
        <v-text-field
          label="Re-Enter Email"
          v-model="registerEmail2"
          :rules="emailRules"
          solo
          required
        ></v-text-field>
        <v-text-field
          label="Username"
          v-model="name"
          solo
          required
        ></v-text-field>
        <v-text-field
          label="Password"
          persistent-hint
          v-model="registerPassword"
           :rules="passwordRules"
           :type="e1 ? 'password' : 'text'"
          counter
          solo
          required
        ></v-text-field>
      </v-card-text>
      <v-divider class="mt-1"></v-divider>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="#fece56" to="/CharacterList">Register</v-btn>
      </v-card-actions>
    </v-card>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    e1: true,
    name:'',
    organization:'',
    registerPassword: '',
    passwordRules: [(v) => !!v || 'Password is required'],
    registerEmail1: '',
    registerEmail2: '',
    emailRules: [
      (v) => !!v || 'E-mail is required',
      (v) => /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
    ]
  }),
  methods: {
    register () {
      if (this.$refs.registerform.validate()) {
        console.log('I am registering')// do stuff
  let payload = {
        email: this.registerEmail1,
        password: this.registerPassword,
        name: this.name,
        organization:  this.organization
      }
 this.$store.dispatch('user/addNewUser', payload).then(() => {
        this.$router.push('/NewScenario')
      })
      }
    }
  }
}
</script>

<style>

</style>
