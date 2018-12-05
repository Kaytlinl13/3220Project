import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'
import {user} from './modules/user.js'
import {character} from './modules/character.js'

Vue.use(Vuex)

const vuexLocalStorage = new VuexPersist({
	key: 'CharacterCreator',
	storage: window.sessionStorage
})

export default new Vuex.Store({
  plugins: [vuexLocalStorage.plugin],
  modules: {
	  user,
	  character
  }
})
