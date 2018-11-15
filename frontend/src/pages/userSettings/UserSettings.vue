<template>
  <div>
    <v-toolbar color="primaryColor" fixed clipped-left height="75" app>
          <v-toolbar-title>RE-PLAN: Evidence-Based Response Planning</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn flat to="/ScenarioList">My Scenarios</v-btn>
          <v-btn flat to="/UserSettings">User Settings</v-btn>
    </v-toolbar>
    <v-container fluid>
      <v-layout row align-center justify-center>
        <v-card>
          <v-card-title primary-title>
            <div>
              <div class="headline">Account Details</div>
              <span class="grey--text" >Change your basic account information</span>
            </div>
          </v-card-title>
          <v-card-text>
            <v-container grid-list-md>
              <v-layout row wrap>
                <v-flex xs12>
                  <p class="grey--text">Email:</p>
                  <div class="d-flex">
                    <p>{{this.userEmail}}</p>
                  </div>
                  <v-divider></v-divider>
                </v-flex>
                <v-flex xs12>
                  <p class="grey--text">Name:</p>
                  <div class="d-flex">
                    <p>{{userName}}</p>
                    <v-btn color="blue darken-1" flat @click.native.stop="editNameDialog = true">Edit</v-btn>
                    <v-dialog v-model="editNameDialog" max-width="500px">
                      <v-card>
                        <v-card-title class="headline">Update Name</v-card-title>
                        <v-card-text>
                          <v-container grid-list-md>
                            <v-layout wrap>
                              <v-flex xs12>
                                <v-text-field label="Name" v-model="newName"></v-text-field>
                              </v-flex>
                            </v-layout>
                          </v-container>
                        </v-card-text>
                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn color="blue darken-1" flat @click.native="editNameDialog = false">Close</v-btn>
                          <v-btn color="blue darken-1" flat @click.native="editNameDialog = false" @click='updateName'>Save</v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>
                  </div>
                  <v-divider></v-divider>
                </v-flex>
                <v-flex xs12>
                  <p class="grey--text">Organization: </p>
                  <div class="d-flex">
                   <p>{{userOrganization}}</p>
                    <v-btn color="blue darken-1" flat @click.native.stop="editOrganizationDialog = true">Edit</v-btn>
                    <v-dialog v-model="editOrganizationDialog" max-width="500px">
                      <v-card>
                        <v-card-title class="headline">Update Organization</v-card-title>
                        <v-card-text>
                          <v-container grid-list-md>
                            <v-layout wrap>
                              <v-flex xs12>
                                <v-text-field label="Organization" v-model="newOrganization"></v-text-field>
                              </v-flex>
                            </v-layout>
                          </v-container>
                        </v-card-text>
                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn color="blue darken-1" flat @click.native="editOrganizationDialog = false">Close</v-btn>
                          <v-btn color="blue darken-1" flat @click.native="editOrganizationDialog = false" @click='updateOrganization'>Save</v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>
                  </div>
                  <v-divider></v-divider>
                </v-flex>
                <v-flex xs12>
                  <p class="grey--text">Password: </p>
                  <div class="d-flex">
                    <p>{{this.password}}</p>
                    <v-btn color="blue darken-1" flat @click.native.stop="editPasswordDialog = true">Edit</v-btn>
                    <v-dialog v-model="editPasswordDialog" max-width="500px">
                      <v-card>
                        <v-card-title class="headline">Update Password</v-card-title>
                        <v-card-text>
                          <v-container grid-list-md>
                            <v-layout wrap>
                              <v-flex xs12>
				      <v-text-field label="Current Password" v-model="currentPassword" :rules= "passwordRules" :append-icon="e1 ? 'visibility' : 'visibility_off' " :append-icon-cb="() => (e1 = !e1)" :type="e1 ? 'password' : 'text'" counter required></v-text-field>
                              </v-flex>
                              <v-flex xs12>
				      <v-text-field label="Password" v-model="newPassword" :rules= "passwordRules" :append-icon="e1 ? 'visibility' : 'visibility_off' " :append-icon-cb="() => (e1 = !e1)" :type="e1 ? 'password' : 'text'" counter required></v-text-field>
                              </v-flex>
                              <v-flex xs12>
				      <v-text-field label="Confirm Password" v-model="newPasswordConfirm" :rules= "passwordRules" :append-icon="e1 ? 'visibility' : 'visibility_off' " :append-icon-cb="() => (e1 = !e1)" :type="e1 ? 'password' : 'text'" counter required></v-text-field>
                              </v-flex>
			      <v-alert :value="mismatchError" type="error">
					 Password do not match.
			       </v-alert>
                            </v-layout>
                          </v-container>
                        </v-card-text>
                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn color="blue darken-1" flat @click.native="editPasswordDialog = false">Close</v-btn>
                          <v-btn color="blue darken-1" flat  @click='updatePassword'>Save</v-btn>
                        </v-card-actions>
                      </v-card>
		      <small>{{this.responseMessage}} </small>
                    </v-dialog>
                  </div>
                  <v-divider></v-divider>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>
        </v-card>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data: () => ({
    editNameDialog: false,
    editEmailDialog: false,
    editOrganizationDialog: false,
    editPasswordDialog: false,
    password: '**********',
    e1: true,
    passwordRules: [(v) => !!v || 'Password is required'],
    newName: '',
    newOrganization: '',
    currentPassword: '',
    mismatchError: false,
    responseMessage: '',
    newPassword: '',
    newPasswordConfirm: ''
  }),
  computed: { ...mapState( 'user' , ['userId', 'userName', 'userEmail', 'userOrganization','passwordUpdateStatus'] ) },
  methods: {
    // since most of the values are actually being kept in the store, we will need to commit mutations to update these values rather than just updating the
    // local variables
    updateName () {
	    this.$store.dispatch('user/updateName', this.newName)
    },
    updateOrganization () {
	    this.$store.dispatch('user/updateOrganization', this.newOrganization)
    },
    updatePassword () {
	    if(this.newPassword != this.newPasswordConfirm){
               this.mismatchError = true
	    }
	    else{
	       let payload = {
		      currentPassword: this.currentPassword,
		      newPassword: this.newPasswordConfirm
	         }
		this.$store.dispatch('user/updatePassword', payload).then(response => {
		if(response.data.result == true){
			this.responseMessage = 'Password Updated Successfully'
        	}
		else if (response.data.result == false){
			this.responseMessage = 'Failed to authenticate user'
		}
                }, error => {
                console.error("No response was received ")
	   })

      }
    }
  }
}
</script>

<style>

</style>
