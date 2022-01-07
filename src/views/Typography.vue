<template>
  <v-container>
    <v-card>
      <v-card-title>Typography</v-card-title>
      <v-container>
        <v-card-text
          class="pa-3"
          outlined
        >
          <h1>Heading 1</h1>
          <p class="text-h1">
            Heading 1
          </p>
          <h2>Heading 2</h2>
          <p class="text-h2">
            Heading 2
          </p>
          <p class="mt-15">
            .text-{breakpoint}-{value}
          </p>
          <p class="text-h3 text-sm-subtitle-1">
            Heading 3
          </p>
          <p class="text-h1">
            display-4
          </p>
        </v-card-text>
      </v-container>
    </v-card>
    <v-card class="mt-10">
      <v-card-title>Colors</v-card-title>
      <v-container>
        <v-card-text
          class="pa-3"
          outlined
        >
          <v-card class="pa-3 text-h2 primary lighten-1">
            컨텐츠
          </v-card>
          <v-card class="pa-3 text-h2 secondary lighten-5">
            컨텐츠
          </v-card>
          <v-card class="pa-3 text-h2 error darken-4">
            컨텐츠
          </v-card>
          <v-card class="pa-3 text-h2 error--text">
            컨텐츠
          </v-card>
        </v-card-text>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
export default {

}
</script>

<style>

</style>
