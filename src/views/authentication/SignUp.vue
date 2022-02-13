<template>
  <v-container
    fluid
    fill-height
  >
    <v-row
      justify="center"
      align="center"
    >
      <v-col cols="3">
        <v-card>
          <v-card-title>sns 로그인</v-card-title>
          <v-btn
            block
            text
            @click="kakaoLogin"
          >
            <img
              style="width:50px;height:auto"
              src="@/assets/kakao_login_small.png"
              alt="카카오톡 로그인"
            >
          </v-btn>
          <v-btn
            block
            text
            class="mt-3"
          >
            <img
              style="width:50px;height:auto"
              src="@/assets/naver_login_small.png"
              alt="네이버 로그인"
            >
          </v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios'
export default {
  name:'SignIn',
  data:()=>({


  }),
  methods:{
    kakaoLogin(){
      // const params = {
      //   redirectUri:'http://localhost:8080/authentication',
      // }
      // window.Kakao.Auth.authorize(params);
      // console.log();
      window.Kakao.Auth.login({
        scope:'account_email, profile_nickname',
        success : this.GetMe,
      })
    },
    GetMe(authObj){
      window.Kakao.API.request({
        url:'v2/user/me',
        success: res => {
          const kakao_account = res.kakao_account;
          const userInfo = {
            nickname : kakao_account.profile.nickname,
            email:kakao_account.email,
            password:'',
            account_type : 2,
          }

          // axios.post('http://localhost:8080/authentication/sign-up',{
          //   email: userInfo.email,
          //   nickname: userInfo.nickname
          // })
          // .then(res => {
          //   console.log(res);
          //   console.log('데이터베이스에 회원 정보가 있음!');
          // })
          // .catch(err => {
          //   console.log(err);
          //   console.log('데이터베이스에 회원 정보가 없음');
          // })
          console.log(userInfo);
          alert('로그인 성공!');
        },
        fail : error => {
          alert('로그인 실패!');
        }
      })
    }
  }
}
//https://daily-life-of-bsh.tistory.com/206
//https://kdinner.tistory.com/92
//https://github.com/DinnerKang/study_vue/blob/master/todo-list/front/src/views/Auth.vue
</script>

<style>

</style>