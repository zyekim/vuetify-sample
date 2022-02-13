<template>
  <router-view />
</template>

<script>
import './scss/overrides.scss'
  export default {
    data () {
      return {

      }
    },
    methods:{
      kakaoLogin(){
        const param = {
          redirectUri : 'http://localhost:8080/'
        }
        window.Kaokao.auth.authorize(param)
      }
    }
  }
</script>

<style lang="scss">
// @import './scss/overrides.scss'
</style>
