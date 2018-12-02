<template>
<v-container grid-list-xs>
	<Toolbar></Toolbar>
	<Navigation></Navigation>
		<div style = "text-align:center">
			
		</div>
		<div class="v-card theme--light" style="background-image: linear-gradient(to top, rgb(205, 66, 149), rgb(254, 206, 86));">
		<div class="flex pa-4">
		<div class="v-card theme--light">
			<p style="font-size: 200%; text-align: left; padding: 40px; text-indent: 25px;"

		<div style = "text-align:center; ">
<h1 style="font-family:milonga; font-size:300%; color: #5e3fb4;">About Us</h1>
		<font size="5">
		<p> 
		Hi there, We're Kaitlyn Lafleur, Felipe Palacios, Justin Smith, and Nicholas Partridge 
		<br> and we're the First Roll Development Team! 
		<br>We are a group of people, players, and dungeon masters who enjoy D&D first and foremost.
		<br> But, when we found out the difficulties that new players have when trying to get started in D&D,
		<br> we decided to do something about it. <br>We wanted this website to be the the first resource that new players
		<br> turn to when they are lost in the sheer depth of information and choices that Dungeons & Dragons offers.
		<br> Our aim was to provide an easy to use and visually appealing website that allows new players to 
		<br> not only create their first character, but to understand the choices they made. 
		
		</p>
		</font>
		</div></div>
	</div>
</div>
</v-container>
</template>

<script>
import Toolbar from "../universalComponents/toolbar.vue"
import Navigation from "../universalComponents/navigation.vue"

	export default{
		name: 'AboutUs',
		components: {Toolbar,Navigation}
	}

</script>