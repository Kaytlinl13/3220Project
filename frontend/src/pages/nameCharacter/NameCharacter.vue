<template>
	<v-container grid-list-xs>
	<Toolbar></Toolbar>
	<Navigation></Navigation>
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
							outline>
							</v-text-field>
							</v-flex>
							<v-flex px-4>
							<v-select
          					:items="levels"
          					label="Level"
          					outline>
        					</v-select>
        					</v-flex>
        					<v-flex px-4>
        					<v-select
          					:items="alignments"
          					label="Alignment"
          					v-model="selected_alignment"
          					outline>
        					</v-select>
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
						<v-card>
							<h1 style="font-family:milonga; font-size:300%; color: #5e3fb4; text-indent: 40px; padding-top: 20px">Name Suggestions</h1>
							<h2 style="font-size:150%; color: #9a35b7; text-indent: 40px; ">Half Elf Names</h2>
							<p style="font-size:200%; text-align:left; padding: 5px 40px 5px; ">{{HalfElfNames}}</p>
							<a target="_blank" href="https://www.bestnamegenerator.com/half-elf-name-generator" style="padding: 5px 40px 5px">Half-Elf Name Generator Site</a>
						</v-card>
						<v-card>
							<h1 style="font-family:milonga; font-size:300%; color: #5e3fb4; padding-left: 40px; padding-top: 10px">Alignments</h1>
							<p v-if="selected_alignment=='Lawful Good'" style="font-size:200%; text-align:left; padding: 40px; text-indent: 25px;">{{LG}}</p>
							<p v-else-if="selected_alignment=='Neutral Good'" style="font-size:200%; text-align:left; padding: 40px; text-indent: 25px;">{{NG}}</p>
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
		name: 'NameCharacter',
		components: {Toolbar,Navigation},
		data: () => ({
      		levels: ['1', '2', '3', '4', '5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20'],
      		alignments: ['Lawful Good', 'Neutral Good', 'Chaotic Good', 'Lawful Neutral', 'True Neutral', 'Chaotic Neutral', 'Lawful Evil', 'Neutral Evil' , 'Chaotic Evil'],
      		HalfElfNames: "Hobrae Iarlee (F), Prilon Beigolor (F), Edfine Kelran (F), Sephraera Ulaharice (F), Mirliana Valven (F), Henwin Araris (M), Emtar Ralomoira (M), Stenhorn Shara (M), Ballamar Cailana (M), Godlas Yesfir (M)",
      		LG: "A lawful good character acts as a good person is expected or required to act. He combines a commitment to oppose evil with the discipline to fight relentlessly. He tells the truth, keeps his word, helps those in need, and speaks out against injustice. A lawful good character hates to see the guilty go unpunished.",
      		NG: "A neutral good character does the best that a good person can do. He is devoted to helping others. He works with kings and magistrates but does not feel beholden to them.",
      		selected_alignment: null
    })
	}

</script>