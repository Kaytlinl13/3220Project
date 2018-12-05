<template>
	<v-flex pa-4 style ="background-image: linear-gradient(to right, #cd4295, #fece56);">
	<v-card>
		<h1 style="font-family:milonga; font-size:300%; text-align: center;">Backpack</h1>
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