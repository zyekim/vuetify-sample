<template>
  <!-- Must have the app property -->
  <v-app-bar
    dark
    color="primary"
    app
  >
    <v-app-bar-nav-icon
      class="hidden-lg-and-up"
      @click.stop="$emit('drawers')"
    />
    <v-spacer />
    <v-toolbar-title> {{ $route.name }} </v-toolbar-title>
  </v-app-bar>
</template>

<script>
export default {
  name:'DefaultBar',


}
</script>

<style>

</style>
