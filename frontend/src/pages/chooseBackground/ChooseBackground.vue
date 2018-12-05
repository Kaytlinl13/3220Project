<template>
	<v-container grid-list-xs>
		<Toolbar></Toolbar>
		<Navigation></Navigation>
		<v-flex pt-4>
			<div>
    		<v-stepper value="3">
      		<v-stepper-header>
        			<v-stepper-step color = 'purple' complete step="1">Race</v-stepper-step>
        			<v-divider></v-divider>
        			<v-stepper-step color = 'purple' complete  step="2">Class</v-stepper-step>
       				<v-divider></v-divider>
        			<v-stepper-step color = 'black' step="3">Background</v-stepper-step>
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
						<h1 style="font-family:milonga; font-size:300%; color: #5e3fb4;">Choose a Background</h1>
					</v-flex>
					<v-flex px-4 pb-4>
						<v-card>
							<v-flex ma-2>
								<v-btn v-if="whichBG == 'Acolyte'" style="color:white;" block color="#9a35b7">Acolyte</v-btn>
								<v-btn v-else style="color:white;" block color="#5e3fb4" v-on:click="whichBG='Acolyte'">Acolyte</v-btn>
							</v-flex>
							<v-flex ma-2>
								<v-btn v-if="whichBG == 'Charlatan'" style="color:white;" block color="#9a35b7">Charlatan</v-btn>
								<v-btn v-else style="color:white;" block color="#5e3fb4" v-on:click="whichBG='Charlatan'">Charlatan</v-btn>
							</v-flex>
							<v-flex ma-2>
								<v-btn v-if="whichBG == 'Criminal'" style="color:white;" block color="#9a35b7">Criminal</v-btn>
								<v-btn v-else style="color:white;" block color="#5e3fb4" v-on:click="whichBG='Criminal'">Criminal</v-btn>
							</v-flex>
							<v-flex ma-2>
								<v-btn v-if="whichBG == 'Entertainer'" style="color:white;" block color="#9a35b7">Entertainer</v-btn>
								<v-btn v-else style="color:white;" block color="#5e3fb4" v-on:click="whichBG='Entertainer'">Entertainer</v-btn>
							</v-flex>
							<v-flex ma-2>
								<v-btn v-if="whichBG == 'Folk Hero'" style="color:white;" block color="#9a35b7">Folk Hero</v-btn>
								<v-btn v-else style="color:white;" block color="#5e3fb4" v-on:click="whichBG='Folk Hero'">Folk Hero</v-btn>
							</v-flex>
							<v-flex ma-2>
								<v-btn v-if="whichBG == 'Guild Artisan'" style="color:white;" block color="#9a35b7">Guild Artisan</v-btn>
								<v-btn v-else style="color:white;" block color="#5e3fb4" v-on:click="whichBG='Guild Artisan'">Guild Artisan</v-btn>
							</v-flex>
							<v-flex ma-2>
								<v-btn v-if="whichBG == 'Hermit'" style="color:white;" block color="#9a35b7">Hermit</v-btn>
								<v-btn v-else style="color:white;" block color="#5e3fb4" v-on:click="whichBG='Hermit'">Hermit</v-btn>
							</v-flex>
							<v-flex ma-2>
								<v-btn v-if="whichBG == 'Noble'" style="color:white;" block color="#9a35b7">Noble</v-btn>
								<v-btn v-else style="color:white;" block color="#5e3fb4" v-on:click="whichBG='Noble'">Noble</v-btn>
							</v-flex>
							<v-flex ma-2>
								<v-btn v-if="whichBG == 'Outlander'" style="color:white;" block color="#9a35b7">Outlander</v-btn>
								<v-btn v-else style="color:white;" block color="#5e3fb4" v-on:click="whichBG='Outlander'">Outlander</v-btn>
							</v-flex>
							<v-flex ma-2>
								<v-btn v-if="whichBG == 'Sage'" style="color:white;" block color="#9a35b7">Sage</v-btn>
								<v-btn v-else style="color:white;" block color="#5e3fb4" v-on:click="whichBG='Sage'">Sage</v-btn>
							</v-flex>
							<v-flex ma-2>
								<v-btn v-if="whichBG == 'Sailor'" style="color:white;" block color="#9a35b7">Sailor</v-btn>
								<v-btn v-else style="color:white;" block color="#5e3fb4" v-on:click="whichBG='Sailor'">Sailor</v-btn>
							</v-flex>
							<v-flex ma-2>
								<v-btn v-if="whichBG == 'Soldier'" style="color:white;" block color="#9a35b7">Soldier</v-btn>
								<v-btn v-else style="color:white;" block color="#5e3fb4" v-on:click="whichBG='Soldier'">Soldier</v-btn>
							</v-flex>
							<v-flex ma-2>
								<v-btn v-if="whichBG == 'Urchin'" style="color:white;" block color="#9a35b7">Urchin</v-btn>
								<v-btn v-else style="color:white;" block color="#5e3fb4" v-on:click="whichBG='Urchin'">Urchin</v-btn>
							</v-flex>
						</v-card>
						<v-flex>
							<v-btn block color="#fece56" to='ChooseClass'>Back: Class?</v-btn>
						</v-flex>
					</v-flex>
				</v-card>
			</v-flex>
			<v-flex md6 pt-4 pr-4>
				<v-card style="background-image: linear-gradient(to top, #5e3fb4, #9a35b7);">
					<v-flex pa-4>
						<v-card v-if="whichBG == 'Acolyte'">
							<h1 style="font-family:milonga; font-size:300%; text-align: center;">Acolyte</h1>
							<v-parallax v-bind:src="require('../../assets/images/accolyte.jpg')"></v-parallax>
							<p style="font-size:200%; text-align:left; padding: 40px; text-indent: 25px;">{{aboutAcolyte}}</p>
						</v-card>
						<v-card v-if="whichBG == 'Charlatan'">
							<h1 style="font-family:milonga; font-size:300%; text-align: center;">Charlatan</h1>
							<v-parallax v-bind:src="require('../../assets/images/charlatan.jpg')"></v-parallax>
							<p style="font-size:200%; text-align:left; padding: 40px; text-indent: 25px;">{{aboutCharlatan}}</p>
						</v-card>
						<v-card v-if="whichBG == 'Criminal'">
							<h1 style="font-family:milonga; font-size:300%; text-align: center;">Criminal</h1>
							<v-parallax v-bind:src="require('../../assets/images/criminal.jpg')"></v-parallax>
							<p style="font-size:200%; text-align:left; padding: 40px; text-indent: 25px;">{{aboutCriminal}}</p>
						</v-card>
						<v-card v-if="whichBG == 'Entertainer'">
							<h1 style="font-family:milonga; font-size:300%; text-align: center;">Entertainer</h1>
							<v-parallax v-bind:src="require('../../assets/images/entertainer.jpg')"></v-parallax>
							<p style="font-size:200%; text-align:left; padding: 40px; text-indent: 25px;">{{aboutEntertainer}}</p>
						</v-card>
						<v-card v-if="whichBG == 'Folk Hero'">
							<h1 style="font-family:milonga; font-size:300%; text-align: center;">Folk Hero</h1>
							<v-parallax v-bind:src="require('../../assets/images/folkhero.jpg')"></v-parallax>
							<p style="font-size:200%; text-align:left; padding: 40px; text-indent: 25px;">{{aboutFolkHero}}</p>
						</v-card>
						<v-card v-if="whichBG == 'Guild Artisan'">
							<h1 style="font-family:milonga; font-size:300%; text-align: center;">Guild Artisan</h1>
							<v-parallax v-bind:src="require('../../assets/images/guildartisan.jpg')"></v-parallax>
							<p style="font-size:200%; text-align:left; padding: 40px; text-indent: 25px;">{{aboutGuildArtisan}}</p>
						</v-card>
						<v-card v-if="whichBG == 'Hermit'">
							<h1 style="font-family:milonga; font-size:300%; text-align: center;">Hermit</h1>
							<v-parallax v-bind:src="require('../../assets/images/hermit.jpg')"></v-parallax>
							<p style="font-size:200%; text-align:left; padding: 40px; text-indent: 25px;">{{aboutHermit}}</p>
						</v-card>
						<v-card v-if="whichBG == 'Noble'">
							<h1 style="font-family:milonga; font-size:300%; text-align: center;">Noble</h1>
							<v-parallax v-bind:src="require('../../assets/images/noble.jpg')"></v-parallax>
							<p style="font-size:200%; text-align:left; padding: 40px; text-indent: 25px;">{{aboutNoble}}</p>
						</v-card>
						<v-card v-if="whichBG == 'Outlander'">
							<h1 style="font-family:milonga; font-size:300%; text-align: center;">Outlander</h1>
							<v-parallax v-bind:src="require('../../assets/images/outlander.jpg')"></v-parallax>
							<p style="font-size:200%; text-align:left; padding: 40px; text-indent: 25px;">{{aboutOutlander}}</p>
						</v-card>
						<v-card v-if="whichBG == 'Sage'">
							<h1 style="font-family:milonga; font-size:300%; text-align: center;">Sage</h1>
							<v-parallax v-bind:src="require('../../assets/images/sage.jpg')"></v-parallax>
							<p style="font-size:200%; text-align:left; padding: 40px; text-indent: 25px;">{{aboutSage}}</p>
						</v-card>
						<v-card v-if="whichBG == 'Sailor'">
							<h1 style="font-family:milonga; font-size:300%; text-align: center;">Sailor</h1>
							<v-parallax v-bind:src="require('../../assets/images/sailor.jpg')"></v-parallax>
							<p style="font-size:200%; text-align:left; padding: 40px; text-indent: 25px;">{{aboutSailor}}</p>
						</v-card>
						<v-card v-if="whichBG == 'Soldier'">
							<h1 style="font-family:milonga; font-size:300%; text-align: center;">Soldier</h1>
							<v-parallax v-bind:src="require('../../assets/images/soldier.jpg')"></v-parallax>
							<p style="font-size:200%; text-align:left; padding: 40px; text-indent: 25px;">{{aboutSoldier}}</p>
						</v-card>
						<v-card v-if="whichBG == 'Urchin'">
							<h1 style="font-family:milonga; font-size:300%; text-align: center;">Urchin</h1>
							<v-parallax v-bind:src="require('../../assets/images/urchin.png')"></v-parallax>
							<p style="font-size:200%; text-align:left; padding: 40px; text-indent: 25px;">{{aboutUrchin}}</p>
						</v-card>
						<v-flex>
							<v-btn block color="#fece56" @click="submit" to='/NameCharacter'>Next: Name, Level, and Alignment</v-btn>
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
		name: 'ChooseBackground',
		components: {Toolbar,Navigation},
		data:() => ({
			whichBG: 'Acolyte',
			backgrounds: ['Acolyte','Charlatan','Criminal','Entertainer','Folk Hero', 'Guild Artisan', 'Hermit','Noble','Outlander','Sage','Sage','Soldier','Urchin'],
			aboutAcolyte: "You have spent your life in the service of a temple to a specific god or pantheon of gods.You act as an intermediary between the realm of the holy and the mortal world, performing sacred rites and offering sacrifices in order to conduct worshipers into the presence of the divine.You are not necessarily a cleric; performing sacred rites is not the same thing as channeling divine power.",
			aboutCharlatan: "You have always had a way with people. You know what makes them tick, you can tease out their heart’s desires after a few minutes of conversation, and with a few leading questions you can read them like they were children's books. It’s a useful talent, and one that you’re perfectly willing to use for your advantage. You know what people want and you deliver, or rather, you promise to deliver. Common sense should steer people away from things that sound too good to be true, but common sense seems to be in short supply when you’re around. The bottle of pink coloured liquid will surely cure that unseemly rash, this ointment—nothing more than a bit of fat with a sprinkle of silver dust—can restore youth and vigor, and there’s a bridge in the city that just happens to be for sale. These marvels sound implausible, but you make them sound like the real deal.",
			aboutCriminal: "You are an experienced criminal with a history of breaking the law. You have spent a lot of time among other criminals and still have contacts within the criminal underworld. You’re far closer than most people to the world of murder, theft, and violence that pervades the underbelly of civilization, and you have survived up to this point by flouting the rules and regulations of society.",
			aboutEntertainer: "You thrive in front of an audience. You know how to entrance them, entertain them, and even inspire them. Your poetics can stir the hearts of those who hear you, awakening grief or joy, laughter or anger. Your music raises their spirits or captures their sorrow. Your dance steps captivate, your humour cuts to the quick. Whatever techniques you use, your art is your life.",
			aboutFolkHero: "You come from a humble social rank, but you are destined for so much more. Already the people of your home village regard you as their champion, and your destiny calls you to stand against the tyrants and monsters that threaten the common folk everywhere.",
			aboutGuildArtisan: "You are a member of an artisan’s guild, skilled in a particular field and closely associated with other artisans. You are a well-established part of the mercantile world, freed by talent and wealth from the constraints of a feudal social order. You learned your skills as an apprentice to a master artisan, under the sponsorship of your guild, until you became a master in your own right.",
			aboutHermit: "You lived in seclusion—either in a sheltered community such as a monastery, or entirely alone—for a formative part of your life. In your time apart from the clamor of society, you found quiet, solitude, and perhaps some of the answers you were looking for.",
			aboutNoble: "You understand wealth, power, and privilege. You carry a noble title, and your family owns land, collects taxes, and wields significant political influence. You might be a pampered aristocrat unfamiliar with work or discomfort, a former merchant just elevated to the nobility, or a disinherited scoundrel with a disproportionate sense of entitlement. Or you could be an honest, hard-working landowner who cares deeply about the people who live and work on your land, keenly aware of your responsibility to them.",
			aboutOutlander: "You grew up in the wilds, far from civilization and the comforts of town and technology. You’ve witnessed the migration of herds larger than forests, survived weather more extreme than any city-dweller could comprehend, and enjoyed the solitude of being the only thinking creature for miles in any direction. The wilds are in your blood, whether you were a nomad, an explorer, a recluse, a hunter-gatherer, or even a marauder. Even in places where you don’t know the specific features of the terrain, you know the ways of the wild.",
			aboutSage: "You spent years learning the lore of the multiverse. You scoured manuscripts, studied scrolls, and listened to the greatest experts on the subjects that interest you. Your efforts have made you a master in your fields of study.",
			aboutSailor: "You sailed on a seagoing vessel for years. In that time, you faced down mighty storms, monsters of the deep, and those who wanted to sink your craft to the bottomless depths. Your first love is the distant line of the horizon, but the time has come to try your hand at something new.",
			aboutSoldier: "War has been your life for as long as you care to remember. You trained as a youth, studied the use of weapons and armor, learned basic survival techniques, including how to stay alive on the battlefield. You might have been part of a standing national army or a mercenary company, or perhaps a member of a local militia who rose to prominence during a recent war.",
			aboutUrchin: "You grew up on the streets alone, orphaned, and poor. You had no one to watch over you or to provide for you, so you learned to provide for yourself. You fought fiercely over food and kept a constant watch out for other desperate souls who might steal from you. You slept on rooftops and in alleyways, exposed to the elements, and endured sickness without the advantage of medicine or a place to recuperate. You've survived despite all odds, and did so through cunning, strength, speed, or some combination of each."
		}),
		computed: {...mapState('character', ['background'])},
		methods:{
			submit(){
				this.$store.commit('character/setBackground',this.whichBG)
			}
		}
	}
</script>
