<template>
	<v-container grid-list-xs>
		<Toolbar></Toolbar>
		<Navigation></Navigation>
		<v-layout row wrap>
			<v-flex md6 pt-4 pr-4>
				<v-card style="background-image: linear-gradient(to top, #cd4295, #fece56);">
					<v-flex pl-4 pt-4>
					<h1 style="font-family:milonga; font-size:300%; color: #5e3fb4;">Choose a Class</h1>
				</v-flex>
					<v-flex px-4 pb-4>
						<v-card>
							<v-flex ma-2>
								<v-btn v-if="whichClass == 0" style="color:white;" block color="#9a35b7">Barbarian</v-btn>
								<v-btn v-else style="color:white;" block color="#5e3fb4" v-on:click="whichClass=0">Barbarian</v-btn>
							</v-flex>
							<v-flex ma-2>
								<v-btn style="color:white;" block color="#5e3fb4">Bard</v-btn>
							</v-flex>
							<v-flex ma-2>
								<v-btn style="color:white;" block color="#5e3fb4">Cleric</v-btn>
							</v-flex>
							<v-flex ma-2>
								<v-btn style="color:white;" block color="#5e3fb4">Druid</v-btn>
							</v-flex>
							<v-flex ma-2>
								<v-btn v-if="whichClass == 5" style="color:white;" block color="#9a35b7">Fighter</v-btn>
								<v-btn v-else style="color:white;" block color="#5e3fb4" v-on:click="whichClass=5">Fighter</v-btn>
							</v-flex>
							<v-flex ma-2>
								<v-btn style="color:white;" block color="#5e3fb4">Monk</v-btn>
							</v-flex>
							<v-flex ma-2>
								<v-btn style="color:white;" block color="#5e3fb4">Paladin</v-btn>
							</v-flex>
							<v-flex ma-2>
								<v-btn style="color:white;" block color="#5e3fb4">Ranger</v-btn>
							</v-flex>
							<v-flex ma-2>
								<v-btn style="color:white;" block color="#5e3fb4">Rogue</v-btn>
							</v-flex>
							<v-flex ma-2>
								<v-btn style="color:white;" block color="#5e3fb4">Sorcerer</v-btn>
							</v-flex>
							<v-flex ma-2>
								<v-btn style="color:white;" block color="#5e3fb4">Warlock</v-btn>
							</v-flex>
							<v-flex ma-2>
								<v-btn style="color:white;" block color="#5e3fb4">Wizard</v-btn>
							</v-flex>
						</v-card>
						<v-flex>
							<v-btn block color="#fece56">Cancel New Character?</v-btn>
						</v-flex>
					</v-flex>
				</v-card>
			</v-flex>
			<v-flex md6 pt-4 pr-4>
				<v-card style="background-image: linear-gradient(to top, #5e3fb4, #9a35b7);">
					<v-flex pa-4>
						<v-card v-if="whichClass == 0">
							<h1 style="font-family:milonga; font-size:300%; text-align: center;">Barbarian</h1>
							<v-img contain aspect-ratio="2" v-bind:src="require('../../assets/images/barbarian.png')"></v-img>
							<p style="font-size:200%; text-align:left; padding: 40px; text-indent: 25px;">{{aboutBarbarian}}</p>
							<v-flex>
								<v-btn block color="#fece56" to='/ChooseRace'>Next: Race</v-btn>
							</v-flex>
						</v-card>
						<v-card v-if="whichClass == 5">
							<h1 style="font-family:milonga; font-size:300%; text-align: center;">Fighter</h1>
							<v-img contain aspect-ratio="2" v-bind:src="require('../../assets/images/fighter.jpg')"></v-img>
							<p style="font-size:200%; text-align:left; padding: 40px; text-indent: 25px;">{{aboutFighter}}</p>
							<v-flex>
								<v-btn block color="#fece56" to='/ChooseRace'>Next: Race</v-btn>
							</v-flex>
						</v-card>
					</v-flex>
				</v-card>
			</v-flex>
		</v-layout>
	

	
	</v-container>
</template>

<script>
import Toolbar from "../universalComponents/toolbar.vue"
import Navigation from "../universalComponents/navigation.vue"

	export default{
		name: 'ChooseClass',
		components: {Toolbar,Navigation},
		data:() => ({
			whichClass: 0,
			aboutBarbarian: "A fierce warrior of primitive background who can enter a battle rage. The relentless combatant, fueled by fury or their totem bonds with animals.The Barbarian is in tune with the natural order.",
			aboutFighter: "A Skilled combatant or strategist who typically relies on their heavy armor and weapons to cut down their enemies. Their training gives them unique melee combat abilities"
		})
	}
</script>