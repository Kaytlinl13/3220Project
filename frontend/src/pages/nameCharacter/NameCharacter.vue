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
							<v-text-field 
							label='Name'
							outline>
						</v-text-field>
						<v-select
          		:items="levels"
          		label="Level"
          		outline>
        		</v-select>
        		<v-select
          		:items="alignments"
          		label="Alignment"
          		outline>
        		</v-select>
						</v-card>
					</v-flex>
				</v-card>
			</v-flex>
			<v-flex md6 pt-4 pr-4>
				<v-card style="background-image: linear-gradient(to top, #5e3fb4, #9a35b7);">
					<v-flex pa-4>
						<v-card>
							<h1 style="font-family:milonga; font-size:300%; color: #5e3fb4;">Name Suggestions</h1>
							<p> Under Construction... sorry</p>
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
      alignments: ['Lawful Good', 'Neutral Good', 'Chaotic Good', 'Lawful Neutral', 'True Neutral', 'Chaotic Neutral', 'Lawful Evil', 'Neutral Evil' , 'Chaotic Evil']
    })
	}

</script>