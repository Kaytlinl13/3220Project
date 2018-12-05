<template>
	<v-container grid-list-xs>
	<Toolbar></Toolbar>
	<Navigation></Navigation>
		<v-flex pt-4>
			<div>
    		<v-stepper value="4">
      		<v-stepper-header>
        			<v-stepper-step color = 'purple' complete step="1">Race</v-stepper-step>
        			<v-divider></v-divider>
        			<v-stepper-step color = 'purple' complete  step="2">Class</v-stepper-step>
       				<v-divider></v-divider>
        			<v-stepper-step color = 'purple' complete step="3">Background</v-stepper-step>
        			<v-divider></v-divider>
        			<v-stepper-step color = 'black' step="4">Name, Level, and Alignment</v-stepper-step>
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
						<h1 style="font-family:milonga; font-size:300%; color: #5e3fb4;">Character Name, Level, and Alignment</h1>
					</v-flex>
					<v-flex pa-4>
						<v-card>
							<v-flex px-4 pt-4>
							<v-text-field 
							label='Name'
							v-model="character_name"
							outline>
							</v-text-field>
							<v-select
          					:items="levels"
          					label="Level"
          					v-model="selected_level"
          					outline>
        					</v-select>
        					<v-select
          					:items="alignments"
          					label="Alignment"
          					v-model="selected_alignment"
          					outline>
        					</v-select>
        					</v-flex>
						</v-card>
						<v-flex pt-3>
							<v-btn block color="#fece56" to='ChooseClass'>Back: Class?</v-btn>
						</v-flex>
					</v-flex>
				</v-card>
			</v-flex>
			<v-flex md6 pt-4 pr-4>
				<v-card style="background-image: linear-gradient(to top, #5e3fb4, #9a35b7);">
					<v-flex pa-4>
						<h1 style="font-family:milonga; font-size:300%; color: #fece56;">Name Suggestions</h1>
						<v-card>
							<v-flex px-4 pb-4>
								<div v-if="this.race == 'Dragonborn'">
									<h2 style="font-size:250%; color: #9a35b7;">Dragonborn Names </h2>
									<p style="font-size:150%;"> {{dragonborn_names}}</p>
									<a target="_blank" href="https://www.fantasynamegenerators.com/dnd-dragonborn-names.php"> Dragonborn Name Generator</a>
								</div>
								<div v-else-if="this.race == 'Half-Elf'">
									<h2 style="font-size:250%; color: #9a35b7;">Half Elf Names </h2>
									<p style="font-size:150%;"> {{halfelf_names}}</p>
									<a target="_blank" href="https://www.fantasynamegenerators.com/dnd-half-elf-names.php"> Half-Elf Name Generator</a>
								</div>
								<div v-else-if="this.race == 'Dwarf'">
									<h2 style="font-size:250%; color: #9a35b7;">Dwarf Names </h2>
									<p style="font-size:150%;"> {{dwarf_names}}</p>
									<a target="_blank" href="https://www.fantasynamegenerators.com/dnd-dwarf-names.php"> Dwarf Name Generator</a>
								</div>
								<div v-else-if="this.race == 'Elf'">
									<h2 style="font-size:250%; color: #9a35b7;">Elf Names </h2>
									<p style="font-size:150%;"> {{elf_names}}</p>
									<a target="_blank" href="https://www.fantasynamegenerators.com/dnd-elf-names.php"> Elf Name Generator</a>
								</div>
								<div v-else-if="this.race == 'Halfling'">
									<h2 style="font-size:250%; color: #9a35b7;">Halfling Names </h2>
									<p style="font-size:150%;"> {{halfling_names}}</p>
									<a target="_blank" href="https://www.fantasynamegenerators.com/dnd-halfling-names.php"> Halfling Name Generator</a>
								</div>
								<div v-else-if="this.race == 'Half-Orc'">
									<h2 style="font-size:250%; color: #9a35b7;">Half Orc Names </h2>
									<p style="font-size:150%;"> {{halforc_names}}</p>
									<a target="_blank" href="https://www.fantasynamegenerators.com/dnd-half-orc-names.php"> Half-Orc Name Generator</a>
								</div>
								<div v-else-if="this.race == 'Human'">
									<h2 style="font-size:250%; color: #9a35b7;">Human Names </h2>
									<p style="font-size:150%;"> {{human_names}}</p>
									<a target="_blank" href="https://www.fantasynamegenerators.com/dnd-human-names.php"> Human Name Generator</a>
								</div>
								<div v-else-if="this.race == 'Gnome'">
									<h2 style="font-size:250%; color: #9a35b7;">Gnome Names </h2>
									<p style="font-size:150%;"> {{gnome_names}}</p>
									<a target="_blank" href="https://www.fantasynamegenerators.com/dnd-gnome-names.php"> Gnome Name Generator</a>
								</div>
								<div v-else-if="this.race == 'Tiefling'">
									<h2 style="font-size:250%; color: #9a35b7;">Tielfing Names </h2>
									<p style="font-size:150%;"> {{Tielfing_names}}</p>
									<a target="_blank" href="https://www.fantasynamegenerators.com/dnd-tiefling-names.php"> Tiefling Name Generator</a>
								</div>
								<div v-else>
									<p style="font-size:150%;"> oops, wierd error</p>
								</div>
							</v-flex>
						</v-card>
						<h1 style="font-family:milonga; font-size:300%; color: #fece56;">Alignment</h1>
						<v-card>
							<v-flex px-4>
								<div v-if="selected_alignment == 'Lawful Good'">
									<h2 style="font-size:250%; color: #9a35b7;" >Lawful Good </h2>
									<p style="font-size:150%">{{LG}}</p>
								</div>
								<div v-else-if="selected_alignment == 'Neutral Good'">
									<h2 style="font-size:250%; color: #9a35b7;">Neutral Good </h2>
									<p style="font-size:150%" >{{NG}}</p>
								</div>
								<div v-else-if="selected_alignment == 'Chaotic Good'">
									<h2 style="font-size:250%; color: #9a35b7;">Chaotic Good </h2>
									<p style="font-size:150%" >{{CG}}</p>
								</div>
								<div v-else-if="selected_alignment == 'Lawful Neutral'">
									<h2 style="font-size:250%; color: #9a35b7;">Lawful Neutral</h2>
									<p style="font-size:150%" >{{LN}}</p>
								</div>
								<div v-else-if="selected_alignment == 'True Neutral'">
									<h2 style="font-size:250%; color: #9a35b7;">True Neutral</h2>
									<p style="font-size:150%" >{{TN}}</p>
								</div>
								<div v-else-if="selected_alignment == 'Chaotic Neutral'">
									<h2 style="font-size:250%; color: #9a35b7;">Chaotic Neutral </h2>
									<p style="font-size:150%" >{{CN}}</p>
								</div>
								<div v-else-if="selected_alignment == 'Lawful Evil'">
									<h2 style="font-size:250%; color: #9a35b7;">Lawful Evil</h2>
									<p style="font-size:150%" >{{LE}}</p>
								</div>
								<div v-else-if="selected_alignment == 'Neutral Evil'">
									<h2 style="font-size:250%; color: #9a35b7;">Neutral Evil</h2>
									<p style="font-size:150%" >{{NE}}</p>
								</div>
								<div v-else-if="selected_alignment == 'Chaotic Evil'">
									<h2 style="font-size:250%; color: #9a35b7;">Chaotic Evil </h2>
									<p style="font-size:150%" >{{CE}}</p>
								</div>
								<div v-else>
									<h2 style="font-size:250%; color: #9a35b7;">Choose an Alignment</h2>
									<p style="font-size:150%" >A creature's general moral and personal attitudes are represented by its alignment: lawful good, neutral good, chaotic good, lawful neutral, neutral, chaotic neutral, lawful evil, neutral evil, or chaotic evil.<br>Alignment is a tool for developing your character's identity. It is not a straitjacket for restricting your character. Each alignment represents a broad range of personality types or personal philosophies, so two characters of the same alignment can still be quite different from each other. In addition, few people are completely consistent.</p>
								</div>
							</v-flex>
						</v-card>
						<v-flex pt-3>
							<v-btn block color="#fece56" @click="submit" to="/Personality" >Next: Personality</v-btn>
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
		name: 'NameCharacter',
		components: {Toolbar,Navigation},
		data: () => ({
    	levels: ['1', '2', '3', '4', '5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20'],
      alignments: ['Lawful Good', 'Neutral Good', 'Chaotic Good', 'Lawful Neutral', 'True Neutral', 'Chaotic Neutral', 'Lawful Evil', 'Neutral Evil' , 'Chaotic Evil'],
      selected_alignment: null,
      selected_level: 1,
      character_name: null,
      dragonborn_names: "Yapora Kuumphakullel (F), Orina Driltuc (F), Joshann Kraxuk (F), Shaskan Tenkelardan (M), Caerseth Cenkoth (M), Baljurn Cocciacmiar (M)",
      dwarf_names: "Bylleras (F), Jenndora (F), Gemma (F), Amnom (M), Barnar (M), Bunthrun (M)",
      elf_names: "Chaera (F), Ularieth (F), Neriphine (F), Ianmyar (M), Naemyar (M), Balwarin (M)",
      gnome_names: "Folci (F), Rosihana (F), Selsany (F), Orufan (M), Wilpip (M), Farlen (M)",
      halfelf_names: "Imanora (F), Ellarel (F), Alseris (F), Torion (M), Corsariph (M), Vanrith (M)",
      halfling_names: "Shaeda (F), Sylfira (F), Welula(F), Anric (M), Cormin (M), Finnan (M)",
      halforc_names: "Shog (F), Zoninir (F), Gararel (F), Zaom (M), Mukogall (M), Ukrud (M)",
      human_names: "Jazzmyn (F), Cordelia (F), Ellaine (F), Ellaine (M), Bronwen (M), Florian (M)",
      tiefling_names: "Eawala (F), Ashes (F), Creyis (F), Void (M), Kosvir (M), Damdos (M)", 


    	LG: "A lawful good character acts as a good person is expected or required to act. He combines a commitment to oppose evil with the discipline to fight relentlessly. He tells the truth, keeps his word, helps those in need, and speaks out against injustice. A lawful good character hates to see the guilty go unpunished.",
    	NG: "A neutral good character does the best that a good person can do. He is devoted to helping others. He works with kings and magistrates but does not feel beholden to them.",
    	CG: "A chaotic good character acts as his conscience directs him with little regard for what others expect of him. He makes his own way, but he's kind and benevolent. He believes in goodness and right but has little use for laws and regulations. He hates it when people try to intimidate others and tell them what to do. He follows his own moral compass, which, although good, may not agree with that of society.",
    	LN: "A lawful neutral character acts as law, tradition, or a personal code directs her. Order and organization are paramount to her. She may believe in personal order and live by a code or standard, or she may believe in order for all and favor a strong, organized government.",
    	TN: "A neutral character does what seems to be a good idea. She doesn't feel strongly one way or the other when it comes to good vs. evil or law vs. chaos. Most neutral characters exhibit a lack of conviction or bias rather than a commitment to neutrality. Such a character thinks of good as better than evil-after all, she would rather have good neighbors and rulers than evil ones. Still, she's not personally committed to upholding good in any abstract or universal way.",
    	CN: "A chaotic neutral character follows his whims. He is an individualist first and last. He values his own liberty but doesn't strive to protect others' freedom. He avoids authority, resents restrictions, and challenges traditions. A chaotic neutral character does not intentionally disrupt organizations as part of a campaign of anarchy. To do so, he would have to be motivated either by good (and a desire to liberate others) or evil (and a desire to make those different from himself suffer). A chaotic neutral character may be unpredictable, but his behavior is not totally random. He is not as likely to jump off a bridge as to cross it.",
    	LE: "A lawful evil villain methodically takes what he wants within the limits of his code of conduct without regard for whom it hurts. He cares about tradition, loyalty, and order but not about freedom, dignity, or life. He plays by the rules but without mercy or compassion. He is comfortable in a hierarchy and would like to rule, but is willing to serve. He condemns others not according to their actions but according to race, religion, homeland, or social rank. He is loath to break laws or promises.",
    	NE: "A neutral evil villain does whatever she can get away with. She is out for herself, pure and simple. She sheds no tears for those she kills, whether for profit, sport, or convenience. She has no love of order and holds no illusion that following laws, traditions, or codes would make her any better or more noble. On the other hand, she doesn't have the restless nature or love of conflict that a chaotic evil villain has.",
    	CE: "A chaotic evil character does whatever his greed, hatred, and lust for destruction drive him to do. He is hot-tempered, vicious, arbitrarily violent, and unpredictable. If he is simply out for whatever he can get, he is ruthless and brutal. If he is committed to the spread of evil and chaos, he is even worse. Thankfully, his plans are haphazard, and any groups he joins or forms are poorly organized. Typically, chaotic evil people can be made to work together only by force, and their leader lasts only as long as he can thwart attempts to topple or assassinate him."

    }),
		
		computed: {...mapState('character', ['name','level','alignment','race'])},
		methods:{
			submit(){
				this.$store.commit('character/setName',this.character_name);
				this.$store.commit('character/setLevel',this.selected_level);
				this.$store.commit('character/setAlignment',this.selected_alignment);
			}
			
		}
	}

</script>