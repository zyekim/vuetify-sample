module.exports = {
  extends: [
    'plugin:vue/recommended',

  ],
  plugins:[
    'vuetify'
  ],
  rules:{
    'vuetify/no-deprecated-classes':'error',
    'vuetify/no-legacy-grid':'error' // 이전버전의 뷰티파이 룰로 (v-flex,v-layout 이 v-col,v-row 로 태그 자동 변환됨) for 협업시 태그 통일을 위해서
  }
}
