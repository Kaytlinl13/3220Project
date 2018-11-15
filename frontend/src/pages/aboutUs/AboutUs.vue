<template>
<v-container grid-list-xs>
	<Toolbar></Toolbar>
	<Navigation></Navigation>
	<p> it's a trap, we don't have anything here!</p>
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