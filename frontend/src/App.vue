<template>
  <v-app>
    <main>
      <v-content>
        <router-view></router-view> 
      </v-content>
    </main>
    <v-footer app></v-footer>
  </v-app> 
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
</style>
