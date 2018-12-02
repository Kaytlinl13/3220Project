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
								<v-btn v-if="whichRace == 1" style="color:white;" block color="#9a35b7">Dwarf</v-btn>
								<v-btn v-else style="color:white;" block color="#5e3fb4" v-on:click="whichRace=1">Dwarf</v-btn>
							</v-flex>
							<v-flex ma-2>
								<v-btn v-if="whichRace == 2" style="color:white;" block color="#9a35b7">Elf</v-btn>
								<v-btn v-else style="color:white;" block color="#5e3fb4" v-on:click="whichRace=2">Elf</v-btn>
							</v-flex>
							<v-flex ma-2>
								<v-btn v-if="whichRace == 3" style="color:white;" block color="#9a35b7">Gnome</v-btn>
								<v-btn v-else style="color:white;" block color="#5e3fb4" v-on:click="whichRace=3">Gnome</v-btn>
							</v-flex>
							<v-flex ma-2>
								<v-btn v-if="whichRace == 4" style="color:white;" block color="#9a35b7">Half-Elf</v-btn>
								<v-btn v-else style="color:white;" block color="#5e3fb4" v-on:click="whichRace=4">Half-Elf</v-btn>
							</v-flex>
							<v-flex ma-2>
								<v-btn v-if="whichRace == 5" style="color:white;" block color="#9a35b7">Halfling</v-btn>
								<v-btn v-else style="color:white;" block color="#5e3fb4" v-on:click="whichRace=5">Halfling</v-btn>
							</v-flex>
							<v-flex ma-2>
								<v-btn v-if="whichRace == 6" style="color:white;" block color="#9a35b7">Half-Orc</v-btn>
								<v-btn v-else style="color:white;" block color="#5e3fb4" v-on:click="whichRace=6">Half-Orc</v-btn>
							</v-flex>
							<v-flex ma-2>
								<v-btn v-if="whichRace == 7" style="color:white;" block color="#9a35b7">Human</v-btn>
								<v-btn v-else style="color:white;" block color="#5e3fb4" v-on:click="whichRace=7">Human</v-btn>
							</v-flex ma-2>
							<v-flex ma-2>
							<v-btn v-if="whichRace == 8" style="color:white;" block color="#9a35b7">Tiefling</v-btn>
							<v-btn v-else style="color:white;" block color="#5e3fb4" v-on:click="whichRace=8">Tiefling</v-btn>
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
						<v-card v-if="whichRace == 1">
							<h1 style="font-family:milonga; font-size:300%; text-align: center;">Dwarf</h1>
							<v-img contain aspect-ratio="2" v-bind:src="require('../../assets/images/dwarf.jpg')"></v-img>
							<p style="font-size:200%; text-align:left; padding: 40px; text-indent: 25px;">{{aboutDwarf}}</p>
							<v-flex>
								<v-btn block color="#fece56" to='/NameCharacter'>Next: Name, Level, and Alignment</v-btn>
							</v-flex>
						</v-card>
						<v-card v-if="whichRace == 2">
							<h1 style="font-family:milonga; font-size:300%; text-align: center;">Elf</h1>
							<v-img contain aspect-ratio="2" v-bind:src="require('../../assets/images/elf.png')"></v-img>
							<p style="font-size:200%; text-align:left; padding: 40px; text-indent: 25px;">{{aboutElf}}</p>
							<v-flex>
								<v-btn block color="#fece56" to='/NameCharacter'>Next: Name, Level, and Alignment</v-btn>
							</v-flex>
						</v-card>
						<v-card v-if="whichRace == 3">
							<h1 style="font-family:milonga; font-size:300%; text-align: center;">Gnome</h1>
							<v-img contain aspect-ratio="2" v-bind:src="require('../../assets/images/gnome.png')"></v-img>
							<p style="font-size:200%; text-align:left; padding: 40px; text-indent: 25px;">{{aboutGnome}}</p>
							<v-flex>
								<v-btn block color="#fece56" to='/NameCharacter'>Next: Name, Level, and Alignment</v-btn>
							</v-flex>
						</v-card>
						<v-card v-if="whichRace == 4">
							<h1 style="font-family:milonga; font-size:300%; text-align: center;">Half-Elf</h1>
							<v-img contain aspect-ratio="2" v-bind:src="require('../../assets/images/halfelf.png')"></v-img>
							<p style="font-size:200%; text-align:left; padding: 40px; text-indent: 25px;">{{aboutHalfElf}}</p>
							<v-flex>
								<v-btn block color="#fece56" to='NameCharacter'>Next: Name, Level, and Alignment</v-btn>
							</v-flex>
						</v-card>
						<v-card v-if="whichRace == 5">
							<h1 style="font-family:milonga; font-size:300%; text-align: center;">Halfling</h1>
							<v-img contain aspect-ratio="2" v-bind:src="require('../../assets/images/halfling.jpg')"></v-img>
							<p style="font-size:200%; text-align:left; padding: 40px; text-indent: 25px;">{{aboutHalfling}}</p>
							<v-flex>
								<v-btn block color="#fece56" to='/NameCharacter'>Next: Name, Level, and Alignment</v-btn>
							</v-flex>
						</v-card>
						<v-card v-if="whichRace == 6">
							<h1 style="font-family:milonga; font-size:300%; text-align: center;">Half-Orc</h1>
							<v-img contain aspect-ratio="2" v-bind:src="require('../../assets/images/halforc.png')"></v-img>
							<p style="font-size:200%; text-align:left; padding: 40px; text-indent: 25px;">{{aboutHalfOrc}}</p>
							<v-flex>
								<v-btn block color="#fece56" to='/NameCharacter'>Next: Name, Level, and Alignment</v-btn>
							</v-flex>
						</v-card>
						<v-card v-if="whichRace == 7">
							<h1 style="font-family:milonga; font-size:300%; text-align: center;">Human</h1>
							<v-img contain aspect-ratio="2" v-bind:src="require('../../assets/images/human.png')"></v-img>
							<p style="font-size:200%; text-align:left; padding: 40px; text-indent: 25px;">{{aboutHuman}}</p>
							<v-flex>
								<v-btn block color="#fece56" to='/NameCharacter'>Next: Name, Level, and Alignment</v-btn>
							</v-flex>
						</v-card>
						<v-card v-if="whichRace == 8">
							<h1 style="font-family:milonga; font-size:300%; text-align: center;">Tiefling</h1>
							<v-img contain aspect-ratio="2" v-bind:src="require('../../assets/images/tiefling.png')"></v-img>
							<p style="font-size:200%; text-align:left; padding: 40px; text-indent: 25px;">{{aboutTiefling}}</p>
							<v-flex>
								<v-btn block color="#fece56" to='/NameCharacter'>Next: Name, Level, and Alignment</v-btn>
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
			aboutDwarf: "Dwarves are solid and enduring like the mountains they love, weathering the passage of centuries with stoic endurance and little change.",
			aboutElf: "Elves are a magical people of otherworldly grace, living in the world but not entirely part of it.",
			aboutGnome: "Gnomes take delight in life, enjoying every moment of invention, exploration, investigation, creation, and play.",
			aboutHalfElf: "Half-Elves combine what some say are the best qualities of their elf and human parents. Half-elves live longer than their human counterparts, but have the natural charisma of humans.",
			aboutHalfling: "The comforts of home are the goals of most halflings’ lives: a place to settle in peace and quiet, far from marauding monsters and clashing armies.",
			aboutHalfOrc: "Half-orcs are not evil by nature, but evil does lurk within them, whether they embrace it or rebel against it.",
			aboutHuman: "Whatever drives them, humans are the innovators, the achievers, and the pioneers of the worlds.",
			aboutTiefling: "Their appearance and their nature are not their fault but the result of an ancient sin, for which they and their children and their children’s children will always be held accountable."
		})
	}
</script>
