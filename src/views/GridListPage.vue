<template>
  <v-container fluid>
    <!-- GridList PAGE -->
    <v-row>
      <v-col cols="12">
        <v-card class="pa-3">
          col
        </v-card>
      </v-col>
    </v-row>
    <v-spacer />
    <v-row class="mt-5 yellow">
      <v-col
        v-for=" n in 6"
        :key="n"
        cols="6"
      >
        <v-card class="pa-3">
          col(v-for)
        </v-card>
      </v-col>
    </v-row>
    <v-row class="mt-5 yellow">
      <v-col
        v-for=" n in 12"
        :key="n"
        cols="4"
      >
        <v-card class="pa-3">
          col(v-for)
        </v-card>
      </v-col>
    </v-row>
    <v-row class="mt-5 yellow">
      <v-col
        v-for=" n in 6"
        :key="n"
        cols="12"
        sm="6"
        md="3"
      >
        <v-card class="pa-3">
          col(v-for / responsive)
        </v-card>
      </v-col>
    </v-row>
    <v-row class="blue mt-5">
      <v-col cols="auto">
        <v-card class="pa-3">
          col(cols='auto')
        </v-card>
      </v-col>
      <v-col>
        <v-card class="pa-3">
          col
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {

}
</script>

<style>

</style>
