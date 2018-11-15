import axios from 'axios'
export const user = {
  namespaced: true,
  state: {
    userName: '',
    userEmail: '',
    userId: '',
    userOrganization: '',
  },
  actions: {
    authenticateUser({commit}, payload){
      axios.post('http://127.0.0.1:5000/getUser', {
      params: {
        email: payload.email,
        password: payload.password
       }
      }).then(response  => {
     	  commit('setUserName', response.data.name);
     	  commit('setUserEmail', response.data.email);
     	  commit('setUserId', response.data.id);
     	  commit('setUserOrganization', response.data.organization);
     }, (err)  => {
     	console.log(err)
     })
    },
    addNewUser({commit}, payload){
      axios.post('http://127.0.0.1:5000/addUser', {
        params: {
          email: payload.email,
      	  name: payload.name,
     	  password: payload.password,
     	  organization: payload.organization
     	}
      }).then(response  => {
     	  commit('setUserName', response.data.name);
     	  commit('setUserEmail', response.data.email);
     	  commit('setUserId', response.data.id);
     	  commit('setUserOrganization', response.data.organization);
      }, (err)  => {
     	console.log(err)
      })
      },
     updateName({commit,state}, newName){
      axios.post('http://127.0.0.1:5000/updateName', {
	   params: {
             id: state.userId,
	     name: newName
          }
	  }).then(response => {
               commit('setUserName', newName)
		 }, (err) => {
                   console.log(err)
	 })
      } ,
     updateOrganization({commit,state}, newOrganization){
      axios.post('http://127.0.0.1:5000/updateOrganization', {
	   params: {
             id: state.userId,
	     newOrganization: newOrganization
          }
	  }).then(response => {
               commit('setUserOrganization', newOrganization)
		 }, (err) => {
                   console.log(err)
	 })
       },
     updatePassword({commit,state}, payload){
	     return new Promise((resolve, reject) =>{
                axios.post('http://127.0.0.1:5000/updatePassword', {
	             params: {
		     id: state.userId,
		     newPassword: payload.newPassword,
		     currentPassword: payload.currentPassword
		  }
	  }).then(response => {
		  resolve(response);
		 }, error  => {
			 reject(error)
	             })
	      })
       }
  },
  mutations: {
    setUserEmail(state, email){
      state.userEmail  = email
    },
    setUserName(state, name){
      state.userName  = name

    },
    setUserId(state, id){
      state.userId  = id
      },
    setUserOrganization(state, organization){
       state.userOrganization = organization
      }
  },

 getters: {
   getUserEmail( state ){
     return state.userEmail;
   },

   getUserName( state ){
     return state.userName;
   },
   getUserId( state ){
     return state.userId;
   },
   getUserOrganization( state ){
     return state.userOrganization;
   }
 }
}
