<template>
	<div class="text-xs-center">
    <v-btn large round color="#fece56" to="/">Home<v-icon right dark>fas fa-home</v-icon></v-btn>
    <v-btn large round color="#fece56" to="/CharacterList">My Characters<v-icon right dark>fas fa-pencil-alt</v-icon></v-btn>
    <v-btn large round color="#fece56" to="/Links">Sources<v-icon right dark>fas fa-external-link-alt</v-icon></v-btn>
    <v-btn large round color="#fece56" to="/AboutUs">About Us<v-icon right dark>fas fa-dungeon</v-icon></v-btn>
  </div>
</template>

<script>
	export default{
		name: 'Navigation'
	}
</script>