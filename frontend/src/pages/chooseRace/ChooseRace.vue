<template>
	<v-container grid-list-xs>
		<Toolbar></Toolbar>
		<Navigation></Navigation>
		<v-layout row wrap>
			<v-flex md6 pt-4 pr-4>
				<v-card style="background-image: linear-gradient(to top, #cd4295, #fece56);">
					<v-flex pl-4 pt-4>
						<h1 style="font-family:milonga; font-size:300%; color: #5e3fb4;">Choose a Race</h1>
					</v-flex>
					<v-flex px-4 pb-4>
						<v-card>
							<v-flex ma-2>
								<v-btn v-if="whichRace == 0" style="color:white;" block color="#9a35b7">Dragonborn</v-btn>
								<v-btn v-else style="color:white;" block color="#5e3fb4" v-on:click="whichRace=0">Dragonborn</v-btn>
							</v-flex>
							<v-flex ma-2>
								<v-btn style="color:white;" block color="#5e3fb4">Dwarf</v-btn>
							</v-flex>
							<v-flex ma-2>
								<v-btn style="color:white;" block color="#5e3fb4">Elf</v-btn>
							</v-flex>
							<v-flex ma-2>
								<v-btn style="color:white;" block color="#5e3fb4">Gnome</v-btn>
							</v-flex>
							<v-flex ma-2>
								<v-btn v-if="whichRace == 5" style="color:white;" block color="#9a35b7">Half-Elf</v-btn>
								<v-btn v-else style="color:white;" block color="#5e3fb4" v-on:click="whichRace=5">Half-Elf</v-btn>
							</v-flex>
							<v-flex ma-2>
								<v-btn style="color:white;" block color="#5e3fb4">Halfling</v-btn>
							</v-flex>
							<v-flex ma-2>
								<v-btn style="color:white;" block color="#5e3fb4">Half-Orc</v-btn>
							</v-flex>
							<v-flex ma-2>
								<v-btn style="color:white;" block color="#5e3fb4">Human</v-btn>
							</v-flex>
							<v-flex ma-2>
								<v-btn style="color:white;" block color="#5e3fb4">Tiefling</v-btn>
							</v-flex>
						</v-card>
						<v-flex>
							<v-btn block color="#fece56">Back: Race</v-btn>
						</v-flex>
					</v-flex>
				</v-card>
			</v-flex>
			<v-flex md6 pt-4 pr-4>
				<v-card style="background-image: linear-gradient(to top, #5e3fb4, #9a35b7);">
					<v-flex pa-4>
						<v-card v-if="whichRace == 0">
							<h1 style="font-family:milonga; font-size:300%; text-align: center;">Dragonborn</h1>
							<v-img contain aspect-ratio="2" v-bind:src="require('../../assets/images/dragonborn.jpg')"></v-img>
							<p style="font-size:200%; text-align:left; padding: 40px; text-indent: 25px;">{{aboutDragonborn}}</p>
							<v-flex>
								<v-btn block color="#fece56" to='/NameCharacter'>Next: Name, Level, and Alignment</v-btn>
							</v-flex>
						</v-card>
						<v-card v-if="whichRace == 5">
							<h1 style="font-family:milonga; font-size:300%; text-align: center;">Half-Elf</h1>
							<v-img contain aspect-ratio="2" v-bind:src="require('../../assets/images/halfelf.png')"></v-img>
							<p style="font-size:200%; text-align:left; padding: 40px; text-indent: 25px;">{{aboutHalfElf}}</p>
							<v-flex>
								<v-btn block color="#fece56" to='NameCharacter'>Next: Name, Level, and Alignment</v-btn>
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
		name: 'ChooseRace',
		components: {Toolbar,Navigation},
		data:() => ({
			whichRace: 0,
			aboutDragonborn: "Dragonborn look very much like dragons standing tall in humanoid form, though they lack wings or tails. A strong and charismatic race, they do tend to face discrimination by the more common races.",
			aboutHalfElf: "Half-Elves combine what some say are the best qualities of their elf and human parents. Half-elves live longer than their human counterparts, but have the natural charisma of humans."
		})
	}
</script>