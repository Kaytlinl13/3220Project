<template>
<v-container grid-list-xs>
	<Toolbar></Toolbar>
	<Navigation></Navigation>
	<v-flex pt-4>
		<div style = "text-align:center">
			
		</div>
		<div class="v-card theme--light" style="background-image: linear-gradient(to top, rgb(205, 66, 149), rgb(254, 206, 86));">
		<div class="flex pa-4"><h1 style="font-family:milonga; font-size:300%; color: #5e3fb4; ">About Us</h1>
		<div class="v-card theme--light">
			

		

		<font size="5">
		<p> <br>
		&ensp;&ensp;&ensp;&ensp;Hi there, We're Kaytlin Lafleur, Felipe Palacios, Justin Smith, and Nicholas Partridge 
		<br> &ensp;and we're the First Roll Development Team! 
		<br>&ensp;&ensp;&ensp;&ensp;We are a group of people, players, and dungeon masters who enjoy D&D first and foremost.
		<br> &ensp;But, when we found out the difficulties that new players have when trying to get started in D&D,
		<br> &ensp;we decided to do something about it. <br>&ensp;&ensp;&ensp;&ensp;We wanted this website to be the the first resource that new players
		<br> &ensp;turn to when they are lost in the sheer depth of information and choices that <br>&ensp;Dungeons & Dragons offers.
		<br>&ensp;&ensp;&ensp;&ensp; Our aim was to provide an easy to use and visually appealing website that allows new players to 
		<br> &ensp;not only create their first character, but to understand the choices they made. 
		<br><br>
		</p>
		</font>
		</div></div>
	</div>
</div>
</v-flex>
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