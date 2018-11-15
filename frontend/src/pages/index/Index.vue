<!--
*********************************************************************************
File Description: Home.vue is the view that the user will first see upon opening
the website. The component contains both the login component and register
component. 
*********************************************************************************
-->
<template>
  <div>
    <v-toolbar app style ="background-image: linear-gradient(to right, #9a35b7, #5e3fb4);color:white">
        <v-toolbar-title style="font-family:milonga; font-size:300%;">First Roll Character Creator</v-toolbar-title>
        <v-btn fab flat dark disabled >
          <v-icon large color="#ffffff">fas fa-dice-d20</v-icon>
        </v-btn>
        <v-spacer></v-spacer>
      <v-btn pa-2 to='/links' >Sources</v-btn>
      <v-btn pa-2 to='/aboutUs'>About Us</v-btn>
    </v-toolbar>
      
    <v-container grid-list-md text-xs-center fluid>
      <v-layout row wrap>
        <v-flex md6>
          <v-card style ="background-image: linear-gradient(to top, #cd4295, #fece56);">
            <v-flex pa-4>
              <v-card>
                <p style="font-size:200%; text-align:left; padding: 40px; text-indent: 25px;">{{about}}</p>
              </v-card>
            </v-flex>
          </v-card>
        </v-flex>
        <v-flex md6>
          <v-card>
            <v-tabs dark centered color="primaryColor">
              <v-tabs-slider color="#fece56"></v-tabs-slider>
              <v-tab style="font-size:250%" href="#tab-1">Log In</v-tab>
              <v-tab style="font-size:250%" href="#tab-2">Register</v-tab>
              <v-tabs-items>
                <v-tab-item id="tab-1"> 
                  <!--start of log in form--> 
                  <sign-in></sign-in> 
                </v-tab-item>
                <v-tab-item id="tab-2">
                  <register></register>
                </v-tab-item>
              </v-tabs-items>
            </v-tabs>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container> 
    <v-card>
            <v-parallax v-bind:src="require('../../assets/images/landscape.jpg')" height="500"></v-parallax>
      </v-card>
  </div>
</template>

<script>
import SignIn from './components/Signin.vue'
import Register from './components/Register.vue'


export default {
  components: { SignIn, Register },
  data: () => ({
    about:'Welcome, this is a character creation web application for the Wizards of the Coast D&D 5e Character Handbook. The application is meant to both simplify the character creation process for new users and add fun visual elements to make the process more engaging. At a later date, new features will include logins, saved characters, setting options, and print character sheets.'
  })
  
}
</script>

<style>

</style>
