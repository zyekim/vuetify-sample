<template>
  <v-app>
    <default-bar @drawers="drawers = !drawers" />
    <default-drawer v-model="drawers" />

    <!-- router must wrap by v-content tag -->
    <v-main>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import DefaultBar from './Appbar.vue'
import DefaultDrawer from './Drawer.vue'
export default {
  name:'DefaultLayout',
  components:{
    DefaultBar,
    DefaultDrawer
  },
  data () {
    return {
      drawers: null ,
    }
  },
}
</script>

<style>

</style>
