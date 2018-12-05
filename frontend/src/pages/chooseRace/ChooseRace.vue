<template>
	<v-container grid-list-xs>
		<Toolbar></Toolbar>
		<Navigation></Navigation>
		<v-flex pt-4>
			<div>
    		<v-stepper >
      			<v-stepper-header>
        			<v-stepper-step color = 'black' step="1">Race</v-stepper-step>
        			<v-divider></v-divider>
        			<v-stepper-step step="2">Class</v-stepper-step>
       				<v-divider></v-divider>
        			<v-stepper-step step="3">Background</v-stepper-step>
        			<v-divider></v-divider>
        			<v-stepper-step step="4">Name, Level, and Alignment</v-stepper-step>
        			<v-divider></v-divider>
        			<v-stepper-step step="5">Personality</v-stepper-step>
        			<v-divider></v-divider>
        			<v-stepper-step step="6">Character Sheet</v-stepper-step>
      			</v-stepper-header>
    		</v-stepper>
			</div>
		</v-flex>
		<v-layout row wrap>
			<v-flex md6 pt-4 pr-4>
				<v-card style="background-image: linear-gradient(to top, #cd4295, #fece56);">
					<v-flex pl-4 pt-4>
						<h1 style="font-family:milonga; font-size:300%; color: #5e3fb4;">Choose a Race</h1>
					</v-flex>
					<v-flex px-4 pb-4>
						<v-card>
							<v-flex ma-2>
								<v-btn v-if="whichRace == 'Dragonborn'" style="color:white;" block color="#9a35b7">Dragonborn</v-btn>
								<v-btn v-else style="color:white;" block color="#5e3fb4" v-on:click="whichRace='Dragonborn'">Dragonborn</v-btn>
							</v-flex>
							<v-flex ma-2>
								<v-btn v-if="whichRace == 'Dwarf'" style="color:white;" block color="#9a35b7">Dwarf</v-btn>
								<v-btn v-else style="color:white;" block color="#5e3fb4" v-on:click="whichRace='Dwarf'">Dwarf</v-btn>
							</v-flex>
							<v-flex ma-2>
								<v-btn v-if="whichRace == 'Elf'" style="color:white;" block color="#9a35b7">Elf</v-btn>
								<v-btn v-else style="color:white;" block color="#5e3fb4" v-on:click="whichRace='Elf'">Elf</v-btn>
							</v-flex>
							<v-flex ma-2>
								<v-btn v-if="whichRace == 'Gnome'" style="color:white;" block color="#9a35b7">Gnome</v-btn>
								<v-btn v-else style="color:white;" block color="#5e3fb4" v-on:click="whichRace='Gnome'">Gnome</v-btn>
							</v-flex>
							<v-flex ma-2>
								<v-btn v-if="whichRace == 'Half-Elf'" style="color:white;" block color="#9a35b7">Half-Elf</v-btn>
								<v-btn v-else style="color:white;" block color="#5e3fb4" v-on:click="whichRace='Half-Elf'">Half-Elf</v-btn>
							</v-flex>
							<v-flex ma-2>
								<v-btn v-if="whichRace == 'Halfling'" style="color:white;" block color="#9a35b7">Halfling</v-btn>
								<v-btn v-else style="color:white;" block color="#5e3fb4" v-on:click="whichRace='Halfling'">Halfling</v-btn>
							</v-flex>
							<v-flex ma-2>
								<v-btn v-if="whichRace == 'Half-Orc'" style="color:white;" block color="#9a35b7">Half-Orc</v-btn>
								<v-btn v-else style="color:white;" block color="#5e3fb4" v-on:click="whichRace='Half-Orc'">Half-Orc</v-btn>
							</v-flex>
							<v-flex ma-2>
								<v-btn v-if="whichRace == 'Human'" style="color:white;" block color="#9a35b7">Human</v-btn>
								<v-btn v-else style="color:white;" block color="#5e3fb4" v-on:click="whichRace='Human'">Human</v-btn>
							</v-flex ma-2>
							<v-flex ma-2>
							<v-btn v-if="whichRace == 'Tiefling'" style="color:white;" block color="#9a35b7">Tiefling</v-btn>
							<v-btn v-else style="color:white;" block color="#5e3fb4" v-on:click="whichRace='Tiefling'">Tiefling</v-btn>
							</v-flex>
						</v-card>
						<v-flex>
							<v-btn block color="#fece56" to='CharacterList'>Cancel New Character?</v-btn>
						</v-flex>
					</v-flex>
				</v-card>
			</v-flex>
			<v-flex md6 pt-4 pr-4>
				<v-card style="background-image: linear-gradient(to top, #5e3fb4, #9a35b7);">
					<v-flex pa-4>
						<v-card v-if="whichRace == 'Dragonborn'">
							<h1 style="font-family:milonga; font-size:300%; text-align: center;">Dragonborn</h1>
							<v-img contain aspect-ratio="2" v-bind:src="require('../../assets/images/dragonborn.jpg')"></v-img>
							<p style="font-size:200%; text-align:left; padding: 40px; text-indent: 25px;">{{aboutDragonborn}}</p>
						</v-card>
						<v-card v-if="whichRace == 'Dwarf'">
							<h1 style="font-family:milonga; font-size:300%; text-align: center;">Dwarf</h1>
							<v-img contain aspect-ratio="2" v-bind:src="require('../../assets/images/dwarf.jpg')"></v-img>
							<p style="font-size:200%; text-align:left; padding: 40px; text-indent: 25px;">{{aboutDwarf}}</p>
						</v-card>
						<v-card v-if="whichRace == 'Elf'">
							<h1 style="font-family:milonga; font-size:300%; text-align: center;">Elf</h1>
							<v-img contain aspect-ratio="2" v-bind:src="require('../../assets/images/elf.png')"></v-img>
							<p style="font-size:200%; text-align:left; padding: 40px; text-indent: 25px;">{{aboutElf}}</p>
						</v-card>
						<v-card v-if="whichRace == 'Gnome'">
							<h1 style="font-family:milonga; font-size:300%; text-align: center;">Gnome</h1>
							<v-img contain aspect-ratio="2" v-bind:src="require('../../assets/images/gnome.png')"></v-img>
							<p style="font-size:200%; text-align:left; padding: 40px; text-indent: 25px;">{{aboutGnome}}</p>
						</v-card>
						<v-card v-if="whichRace == 'Half-Elf'">
							<h1 style="font-family:milonga; font-size:300%; text-align: center;">Half-Elf</h1>
							<v-img contain aspect-ratio="2" v-bind:src="require('../../assets/images/halfelf.png')"></v-img>
							<p style="font-size:200%; text-align:left; padding: 40px; text-indent: 25px;">{{aboutHalfElf}}</p>
						</v-card>
						<v-card v-if="whichRace == 'Halfling'">
							<h1 style="font-family:milonga; font-size:300%; text-align: center;">Halfling</h1>
							<v-img contain aspect-ratio="2" v-bind:src="require('../../assets/images/halfling.jpg')"></v-img>
							<p style="font-size:200%; text-align:left; padding: 40px; text-indent: 25px;">{{aboutHalfling}}</p>
						</v-card>
						<v-card v-if="whichRace == 'Half-Orc'">
							<h1 style="font-family:milonga; font-size:300%; text-align: center;">Half-Orc</h1>
							<v-img contain aspect-ratio="2" v-bind:src="require('../../assets/images/halforc.png')"></v-img>
							<p style="font-size:200%; text-align:left; padding: 40px; text-indent: 25px;">{{aboutHalfOrc}}</p>
						</v-card>
						<v-card v-if="whichRace == 'Human'">
							<h1 style="font-family:milonga; font-size:300%; text-align: center;">Human</h1>
							<v-img contain aspect-ratio="2" v-bind:src="require('../../assets/images/human.png')"></v-img>
							<p style="font-size:200%; text-align:left; padding: 40px; text-indent: 25px;">{{aboutHuman}}</p>
						</v-card>
						<v-card v-if="whichRace == 'Tiefling'">
							<h1 style="font-family:milonga; font-size:300%; text-align: center;">Tiefling</h1>
							<v-img contain aspect-ratio="2" v-bind:src="require('../../assets/images/tiefling.png')"></v-img>
							<p style="font-size:200%; text-align:left; padding: 40px; text-indent: 25px;">{{aboutTiefling}}</p>
						</v-card>
						<v-flex>
							<v-btn block color="#fece56" @click="submit" to='ChooseClass'>Next: Class</v-btn>
						</v-flex>
					</v-flex>
				</v-card>
			</v-flex>
		</v-layout>

	</v-container>
</template>

<script>
import Toolbar from "../universalComponents/toolbar.vue"
import Navigation from "../universalComponents/navigation.vue"
import {mapState} from 'vuex'

	export default{
		name: 'ChooseRace',
		components: {Toolbar,Navigation},
		data:() => ({
			whichRace: 'Dragonborn',
			races: ['Dragonborn','Dwarf','Elf','Gnome','Half-Elf','Halfling','Half-Orc','Human','Tiefling'],
			aboutDragonborn: "Dragonborn look very much like dragons standing tall in humanoid form, though they lack wings or tails. A strong and charismatic race, they do tend to face discrimination by the more common races.",
			aboutDwarf: "Dwarves are solid and enduring like the mountains they love, weathering the passage of centuries with stoic endurance and little change.",
			aboutElf: "Elves are a magical people of otherworldly grace, living in the world but not entirely part of it.",
			aboutGnome: "Gnomes take delight in life, enjoying every moment of invention, exploration, investigation, creation, and play.",
			aboutHalfElf: "Half-Elves combine what some say are the best qualities of their elf and human parents. Half-elves live longer than their human counterparts, but have the natural charisma of humans.",
			aboutHalfling: "The comforts of home are the goals of most halflings’ lives: a place to settle in peace and quiet, far from marauding monsters and clashing armies.",
			aboutHalfOrc: "Half-orcs are not evil by nature, but evil does lurk within them, whether they embrace it or rebel against it.",
			aboutHuman: "Whatever drives them, humans are the innovators, the achievers, and the pioneers of the worlds.",
			aboutTiefling: "Their appearance and their nature are not their fault but the result of an ancient sin, for which they and their children and their children’s children will always be held accountable."
		}),
		computed: {...mapState('character', ['race'])},
		methods:{
			submit(){
				this.$store.commit('character/setRace',this.whichRace)
			}
		}
	}
</script>
