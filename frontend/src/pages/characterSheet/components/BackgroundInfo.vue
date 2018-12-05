<template>
	<v-flex pa-4 style ="background-image: linear-gradient(to right, #cd4295, #fece56);">
	<v-card>
		<h1 style="font-family:milonga; font-size:300%; text-align: center;">Character Name: {{this.name}} </h1>
		<p style="font-size:200%; text-align: center;">Race: {{this.race}}</p>
		<p style="font-size:200%; text-align: center;">Class: {{this.class_type}}</p>
		<p style="font-size:200%; text-align: center;">Background: {{this.background}}</p>
		<p style="font-size:200%; text-align: center;">Level: {{this.level}}</p>
		<p style="font-size:200%; text-align: center;">Alignment: {{this.alignment}}</p>
	</v-card>
</v-flex>
</template>

<script>
	import {mapState} from 'vuex'

	export default{

		computed: {...mapState('character', ['name','level','alignment','race','class_type','background'])},
		data: () => ({
			
		})

	}
</script>