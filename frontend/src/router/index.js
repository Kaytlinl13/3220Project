import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index/Index'
import CharacterList from '@/pages/characterList/CharacterList'
import AboutUs from '@/pages/aboutUs/AboutUs'
import Links from '@/pages/links/Links'
import ChooseClass from '@/pages/chooseClass/ChooseClass'
import ChooseRace from '@/pages/chooseRace/ChooseRace'
import NameCharacter from '@/pages/nameCharacter/NameCharacter'
import ChooseBackground from '@/pages/chooseBackground/ChooseBackground'
import Personality from '@/pages/personality/Personality'
import CharacterSheet from '@/pages/characterSheet/CharacterSheet'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/CharacterList',
      name: 'CharacterList',
      component: CharacterList
    },
    {
      path: '/AboutUs',
      name: 'AboutUs',
      component: AboutUs
    },
    {
      path: '/Links',
      name: 'Links',
      component: Links
    },
    {
      path: '/ChooseClass',
      name: 'ChooseClass',
      component: ChooseClass
    },
    {
      path: '/ChooseRace',
      name: 'ChooseRace',
      component: ChooseRace
    },
    {
      path: '/NameCharacter',
      name: 'NameCharacter',
      component: NameCharacter
    },
    {
      path: '/ChooseBackground',
      name: 'ChooseBackground',
      component: ChooseBackground
    },
    {
      path: '/Personality',
      name: 'Personality',
      component: Personality
    },
    {
      path: '/CharacterSheet',
      name: 'CharacterSheet',
      component: CharacterSheet
    }
  ]
})
