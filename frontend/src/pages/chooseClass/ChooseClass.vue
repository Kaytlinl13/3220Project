<template>
	<v-container grid-list-xs>
		<Toolbar></Toolbar>
		<Navigation></Navigation>
		<v-flex pt-4>
			<div>
    		<v-stepper value="2">
      			<v-stepper-header>
        			<v-stepper-step color = 'purple' complete step="1">Race</v-stepper-step>
        			<v-divider></v-divider>
        			<v-stepper-step color = 'black' step="2">Class</v-stepper-step>
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
					<h1 style="font-family:milonga; font-size:300%; color: #5e3fb4;">Choose a Class</h1>
				</v-flex>
					<v-flex px-4 pb-4>
						<v-card>
							<v-flex ma-2>
								<v-btn v-if="whichClass == 'Barbarian'" style="color:white;" block color="#9a35b7">Barbarian</v-btn>
								<v-btn v-else style="color:white;" block color="#5e3fb4" v-on:click="whichClass='Barbarian'">Barbarian</v-btn>
							</v-flex>
							<v-flex ma-2>
                                <v-btn v-if="whichClass == 'Bard'" style="color:white;" block color="#9a35b7">Bard</v-btn>
								<v-btn v-else style="color:white;" block color="#5e3fb4" v-on:click="whichClass='Bard'">Bard</v-btn>
							</v-flex>
							<v-flex ma-2>
								<v-btn v-if="whichClass == 'Cleric'" style="color:white;" block color="#9a35b7">Cleric</v-btn>
								<v-btn v-else style="color:white;" block color="#5e3fb4" v-on:click="whichClass='Cleric'">Cleric</v-btn>
							</v-flex>
							<v-flex ma-2>
								<v-btn v-if="whichClass == 'Druid'" style="color:white;" block color="#9a35b7">Druid</v-btn>
								<v-btn v-else style="color:white;" block color="#5e3fb4" v-on:click="whichClass='Druid'">Druid</v-btn>
							</v-flex>
							<v-flex ma-2>
								<v-btn v-if="whichClass == 'Fighter'" style="color:white;" block color="#9a35b7">Fighter</v-btn>
								<v-btn v-else style="color:white;" block color="#5e3fb4" v-on:click="whichClass='Fighter'">Fighter</v-btn>
							</v-flex>
							<v-flex ma-2>
								<v-btn v-if="whichClass == 'Monk'" style="color:white;" block color="#9a35b7">Monk</v-btn>
								<v-btn v-else style="color:white;" block color="#5e3fb4" v-on:click="whichClass='Monk'">Monk</v-btn>
							</v-flex>
							<v-flex ma-2>
								<v-btn v-if="whichClass == 'Paladin'" style="color:white;" block color="#9a35b7">Paladin</v-btn>
								<v-btn v-else style="color:white;" block color="#5e3fb4" v-on:click="whichClass='Paladin'">Paladin</v-btn>
							</v-flex>
							<v-flex ma-2>
								<v-btn v-if="whichClass == 'Ranger'" style="color:white;" block color="#9a35b7">Ranger</v-btn>
								<v-btn v-else style="color:white;" block color="#5e3fb4" v-on:click="whichClass='Ranger'">Ranger</v-btn>
							</v-flex>
							<v-flex ma-2>
								<v-btn v-if="whichClass == 'Rogue'" style="color:white;" block color="#9a35b7">Rogue</v-btn>
								<v-btn v-else style="color:white;" block color="#5e3fb4" v-on:click="whichClass='Rogue'">Rogue</v-btn>
							</v-flex>
							<v-flex ma-2>
								<v-btn v-if="whichClass == 'Sorcerer'" style="color:white;" block color="#9a35b7">Sorcerer</v-btn>
								<v-btn v-else style="color:white;" block color="#5e3fb4" v-on:click="whichClass='Sorcerer'">Sorcerer</v-btn>
							</v-flex>
							<v-flex ma-2>
								<v-btn v-if="whichClass == 'Warlock'" style="color:white;" block color="#9a35b7">Warlock</v-btn>
								<v-btn v-else style="color:white;" block color="#5e3fb4" v-on:click="whichClass='Warlock'">Warlock</v-btn>
							</v-flex>
							<v-flex ma-2>
								<v-btn v-if="whichClass == 'Wizard'" style="color:white;" block color="#9a35b7">Wizard</v-btn>
								<v-btn v-else style="color:white;" block color="#5e3fb4" v-on:click="whichClass='Wizard'">Wizard</v-btn>
							</v-flex>
						</v-card>
						<v-flex>
							<v-btn block color="#fece56" to='ChooseRace'>Back: Race?</v-btn>
						</v-flex>
					</v-flex>
				</v-card>
			</v-flex>
			<v-flex md6 pt-4 pr-4>
				<v-card style="background-image: linear-gradient(to top, #5e3fb4, #9a35b7);">
					<v-flex pa-4>
						<v-card v-if="whichClass == 'Barbarian'">
							<h1 style="font-family:milonga; font-size:300%; text-align: center;">Barbarian</h1>
							<v-img contain aspect-ratio="2" v-bind:src="require('../../assets/images/barbarian.png')"></v-img>
							<p style="font-size:150%; text-align:left; padding: 40px; text-indent: 25px;">{{aboutBarbarian}}</p>
						</v-card>
                        <v-card v-if="whichClass == 'Bard'">
							<h1 style="font-family:milonga; font-size:300%; text-align: center;">Bard</h1>
							<v-img contain aspect-ratio="2" v-bind:src="require('../../assets/images/bard.png')"></v-img>
							<p style="font-size:150%; text-align:left; padding: 40px; text-indent: 25px;">{{aboutBard}}</p>
						</v-card>
                        <v-card v-if="whichClass == 'Cleric'">
							<h1 style="font-family:milonga; font-size:300%; text-align: center;">Cleric</h1>
							<v-img contain aspect-ratio="2" v-bind:src="require('../../assets/images/cleric.jpg')"></v-img>
							<p style="font-size:150%; text-align:left; padding: 40px; text-indent: 25px;">{{aboutCleric}}</p>
						</v-card>
                        <v-card v-if="whichClass == 'Druid'">
							<h1 style="font-family:milonga; font-size:300%; text-align: center;">Druid</h1>
							<v-img contain aspect-ratio="2" v-bind:src="require('../../assets/images/druid.png')"></v-img>
							<p style="font-size:150%; text-align:left; padding: 40px; text-indent: 25px;">{{aboutDruid}}</p>
						</v-card>
						<v-card v-if="whichClass == 'Fighter'">
							<h1 style="font-family:milonga; font-size:300%; text-align: center;">Fighter</h1>
							<v-img contain aspect-ratio="2" v-bind:src="require('../../assets/images/fighter.jpg')"></v-img>
							<p style="font-size:150%; text-align:left; padding: 40px; text-indent: 25px;">{{aboutFighter}}</p>
						</v-card>
                        <v-card v-if="whichClass == 'Monk'">
							<h1 style="font-family:milonga; font-size:300%; text-align: center;">Monk</h1>
							<v-img contain aspect-ratio="2" v-bind:src="require('../../assets/images/monk.png')"></v-img>
							<p style="font-size:150%; text-align:left; padding: 40px; text-indent: 25px;">{{aboutMonk}}</p>
						</v-card>
                        <v-card v-if="whichClass == 'Paladin'">
							<h1 style="font-family:milonga; font-size:300%; text-align: center;">Paladin</h1>
							<v-img contain aspect-ratio="2" v-bind:src="require('../../assets/images/paladin.png')"></v-img>
							<p style="font-size:150%; text-align:left; padding: 40px; text-indent: 25px;">{{aboutPaladin}}</p>
						</v-card>
                        <v-card v-if="whichClass == 'Ranger'">
							<h1 style="font-family:milonga; font-size:300%; text-align: center;">Ranger</h1>
							<v-img contain aspect-ratio="2" v-bind:src="require('../../assets/images/ranger.jpg')"></v-img>
							<p style="font-size:150%; text-align:left; padding: 40px; text-indent: 25px;">{{aboutRanger}}</p>
						</v-card>
                        <v-card v-if="whichClass == 'Rogue'">
							<h1 style="font-family:milonga; font-size:300%; text-align: center;">Rogue</h1>
							<v-img contain aspect-ratio="2" v-bind:src="require('../../assets/images/rogue.png')"></v-img>
						</v-card>
                        <v-card v-if="whichClass == 'Sorcerer'">
							<h1 style="font-family:milonga; font-size:300%; text-align: center;">Sorcerer</h1>
							<v-img contain aspect-ratio="2" v-bind:src="require('../../assets/images/sorcerer.jpg')"></v-img>
							<p style="font-size:150%; text-align:left; padding: 40px; text-indent: 25px;">{{aboutSorcerer}}</p>
						</v-card>
                        <v-card v-if="whichClass == 'Warlock'">
							<h1 style="font-family:milonga; font-size:300%; text-align: center;">Warlock</h1>
							<v-img contain aspect-ratio="2" v-bind:src="require('../../assets/images/warlock.jpg')"></v-img>
							<p style="font-size:150%; text-align:left; padding: 40px; text-indent: 25px;">{{aboutWarlock}}</p>
						</v-card>
                        <v-card v-if="whichClass == 'Wizard'">
							<h1 style="font-family:milonga; font-size:300%; text-align: center;">Wizard</h1>
							<v-img contain aspect-ratio="2" v-bind:src="require('../../assets/images/wizard.png')"></v-img>
							<p style="font-size:150%; text-align:left; padding: 40px; text-indent: 25px;">{{aboutWizard}}</p>
						</v-card>
						<v-flex>
							<v-btn block color="#fece56" @click="submit" to='/ChooseBackground'>Next: Background</v-btn>
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
		name: 'ChooseClass',
		components: {Toolbar,Navigation},
		data:() => ({
			whichClass: 'Barbarian',
			classes: ['Barbarian','Bard','Cleric','Druid','Fighter','Monk','Paladin','Ranger','Rogue','Sorcerer','Warlock','Wizard'],
			aboutBarbarian: "A fierce warrior of primitive background who can enter a battle rage. The relentless combatant, fueled by fury or their totem bonds with animals.The Barbarian is in tune with the natural order.",
            aboutBard:"The greatest strength of bards is their sheer versatility. Many bards prefer to stick to the sidelines in combat, using their magic to inspire their allies and hinder their foes from a distance. But bards are capable of defending themselves in melee if necessary, using their magic to bolster their swords and armor. Their spells lean toward charms and illusions rather than blatantly destructive spells. ",
            aboutCleric:"Clerics combine the helpful magic of healing and inspiring their allies with spells that harm and hinder foes. They can provoke awe and dread, lay curses of plague or poison, and even call down flames from heaven to consume their enemies. For those evildoers who will benefit most from a mace to the head, clerics depend on their combat training to let them wade into melee with the power of the gods on their side.",
            aboutDruid: "Druid spells are oriented toward nature and animals—the power of tooth and claw, of sun and moon, of fire and storm. Druids also gain the ability to take on animal forms, and some druids make a particular study of this practice, even to the point where they prefer animal form to their natural form.",
			aboutFighter: "A Skilled combatant or strategist who typically relies on their heavy armor and weapons to cut down their enemies. Their training gives them unique melee combat abilities.",
            aboutMonk:"Monks make careful study of a magical energy that most monastic traditions call ki. This energy is an element of the magic that suffuses the multiverse—specifically, the element that flows through living bodies. Monks harness this power within themselves to create magical effects and exceed their bodies’ physical capabilities, and some of their special attacks can hinder the flow of ki in their opponents. Using this energy, monks channel uncanny speed and strength into their unarmed strikes. As they gain experience, their martial training and their mastery of ki gives them more power over their bodies and the bodies of their foes.",
            aboutPaladin:"Paladins train for years to learn the skills of combat, mastering a variety of weapons and armor. Even so, their martial skills are secondary to the magical power they wield: power to heal the sick and injured, to smite the wicked and the undead, and to protect the innocent and those who join them in the fight for justice.",
            aboutRanger: "Warriors of the wilderness, rangers specialize in hunting the monsters that threaten the edges of civilization—humanoid raiders, rampaging beasts and monstrosities, terrible giants, and deadly dragons. They learn to track their quarry as a predator does, moving stealthily through the wilds and hiding themselves in brush and rubble. Rangers focus their combat training on techniques that are particularly useful against their specific favored foes.",
            aboutRogue: "Rogues devote as much effort to mastering the use of a variety of skills as they do to perfecting their combat abilities, giving them a broad expertise that few other characters can match. Many rogues focus on stealth and deception, while others refine the skills that help them in a dungeon environment, such as climbing, finding and disarming traps, and opening locks.",
            aboutSorcerer: "Sorcerers have no use for the spellbooks and ancient tomes of magic lore that wizards rely on, nor do they rely on a patron to grant their spells as warlocks do. By learning to harness and channel their own inborn magic, they can discover new and staggering ways to unleash that power.",
            aboutWarlock: "A warlock is defined by a pact with an otherworldly being. Sometimes the relationship between warlock and patron is like that of a cleric and a deity, though the beings that serve as patrons for warlocks are not gods. A warlock might lead a cult dedicated to a demon prince, an archdevil, or an utterly alien entity—beings not typically served by clerics. More often, though, the arrangement is similar to that between a master and an apprentice. The warlock learns and grows in power, at the cost of occasional services performed on the patron’s behalf.",
            aboutWizard: "Wizards live and die by their spells. Everything else is secondary. They learn new spells as they experiment and grow in experience. They can also learn them from other wizards, from ancient tomes or inscriptions, and from ancient creatures (such as the fey) that are steeped in magic."
		}) ,
		computed: {...mapState('character', ['class'])},
		methods:{
			submit(){
				this.$store.commit('character/setClass',this.whichClass)
			}
		}
	}
</script>