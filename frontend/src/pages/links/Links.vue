<template>
<v-container grid-list-xs>
	<Toolbar></Toolbar>
	<Navigation></Navigation>	
		<div class="v-card theme--light" style="background-image: linear-gradient(to top, rgb(205, 66, 149), rgb(254, 206, 86));">
		<div class="flex pa-4">
		<div class="v-card theme--light">
		<div style = "text-align:center">
		
			<h1 style="font-family:milonga; font-size:300%; color: #5e3fb4;">Resources used to create this website:</h1>
			<font size="5">
			<br><a href="dnd.wizards.com"> Wizards of the Coast - Dungeons & Dragons 5<sup>th</sup> edition</a> 
			<br><a href="https://fonts.google.com/specimen/Milonga"> Google Font Milonga</a>
			<br><a href="https://vuetifyjs.com/en/"> Vuetify Framework</a>
			<br><a href="https://fontawesome.com/v4.7.0/icons/"> FontAwesome Icons</a>
			<br><a href="https://fonts.google.com/"> Google Fonts</a>
			</font>

		<div >
			<font size="1"> 
			<br><br><br><br><br><br>
				<p>All websites and trademarks are property of their respective owners. We are in no way affiliated with Wizards of the Coast&#169, Google&#169, Vuetify&#169, or FontAwesome&#169<br> Website created by First Roll Team 2018.</p>
			</font>	
		</div>
			</div>
</div>
</div>
		</div>
</v-container>
</template>

<script>
import Toolbar from "../universalComponents/toolbar.vue"
import Navigation from "../universalComponents/navigation.vue"

	export default{
		name: 'Links',
		components: {Toolbar,Navigation}
	}

</script>