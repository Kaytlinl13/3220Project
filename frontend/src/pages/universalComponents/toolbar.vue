<template>
	<div>
		<v-toolbar app style ="background-image: linear-gradient(to right, #9a35b7, #5e3fb4);color:white">
      <v-toolbar-title style="font-family:milonga; font-size:300%;">First Roll Character Creator</v-toolbar-title>
      <v-btn fab flat dark disabled >
      	<v-icon large color="#ffffff">fas fa-dice-d20</v-icon>
    	</v-btn>
     	<v-spacer></v-spacer>
      <v-btn fab dark color="#ffffff">
      	<v-icon large color="#9a35b7">fas fa-user-circle</v-icon>
    	</v-btn>
    </v-toolbar>
	</div>
</template>

<script>
	export default{
		name: 'Toolbar'
	}
</script>