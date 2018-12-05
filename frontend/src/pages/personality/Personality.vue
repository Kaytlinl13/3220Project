<template>
	<v-container grid-list-xs>
		<Toolbar></Toolbar>
		<Navigation></Navigation>
		<v-flex pt-4>
		<div>
    		<v-stepper value="5">
      			<v-stepper-header>
        			<v-stepper-step color = 'purple' complete step="1">Race</v-stepper-step>
        			<v-divider></v-divider>
        			<v-stepper-step color = 'purple' complete  step="2">Class</v-stepper-step>
       				<v-divider></v-divider>
        			<v-stepper-step color = 'purple' complete step="3">Background</v-stepper-step>
        			<v-divider></v-divider>
        			<v-stepper-step color = 'purple' complete step="4">Name, Level, and Alignment</v-stepper-step>
        			<v-divider></v-divider>
        			<v-stepper-step color = 'black' step="5">Personality</v-stepper-step>
        			<v-divider></v-divider>
        			<v-stepper-step step="6">Character Sheet</v-stepper-step>
      			</v-stepper-header>
    		</v-stepper>
		</div>
	</v-flex>
		<v-layout row align-center mt-4>
  			<v-flex  pt-4 pr-4>
  				<v-card style="background-image: linear-gradient(to top, #cd4295, #fece56);">
  					<v-flex pa-4>
							<v-card>
								<v-flex pa-4>
  								<p style="font-family:milonga; font-size:300%; color: #5e3fb4;"> Not all steps implemented, next is the final character sheet.</p>
  							</v-flex>
  						</v-card>
  						<v-flex pt-3>
								<v-btn  color="#fece56" to="/CharacterSheet" >Finish: Character Sheet</v-btn>
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

	export default{
		name: 'Personality',
		components: {Toolbar,Navigation}
	}
</script>