<template>
	<v-container grid-list-xs>
		<Toolbar></Toolbar>
		<Navigation></Navigation>
		<v-layout row align-center mt-4>
  			<v-flex  pt-4 pr-4>
  				<v-card style="background-image: linear-gradient(to top, #cd4295, #fece56);">
  					<v-tabs dark centered color="primaryColor">
              			<v-tabs-slider color="#fece56"></v-tabs-slider>
              				<v-tab style="font-size:250%" href="#tab-1">Background</v-tab>
              				<v-tab style="font-size:250%" href="#tab-2">Stats</v-tab>
              				<v-tab style="font-size:250%" href="#tab-3">Spells</v-tab>
              				<v-tab style="font-size:250%" href="#tab-4">Backpack</v-tab>
              			<v-tabs-items>
                			<v-tab-item id="tab-1">  
                 				 <BackgroundInfo> </BackgroundInfo>
                			</v-tab-item>
                			<v-tab-item id="tab-2">
                  				<CharacterStats></CharacterStats>
                			</v-tab-item>
                			<v-tab-item id="tab-3">
                  				<Spellbook></Spellbook>
                			</v-tab-item>
                			<v-tab-item id="tab-4">
                  				<Backpack></Backpack>
                			</v-tab-item>
              			</v-tabs-items>
            		</v-tabs>
  				</v-card>
  			</v-flex>
  		</v-layout>
	</v-container>
</template>

<script>
	import Toolbar from "../universalComponents/toolbar.vue"
	import Navigation from "../universalComponents/navigation.vue"
	import BackgroundInfo from "./components/BackgroundInfo.vue"
	import CharacterStats from "./components/CharacterStats.vue"
	import Spellbook from "./components/Spellbook.vue"
	import Backpack from "./components/Backpack.vue"

	export default{
		name: 'CharacterSheet',
		components: {Toolbar,Navigation,BackgroundInfo,CharacterStats,Spellbook,Backpack}
	}
</script>