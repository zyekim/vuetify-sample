// // import axios from '@/services/axios';
// import VueCookies from 'vue-cookies';


// const kakaoheader = {
//   'Authorization' : '413d659a09679114454ee4264499d937',
//   'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
// }

// const getKakaoToken = async (code) => {
//   console.log('kakaoLogin');
//   try {
//     const data = {
//       grant_type : 'authorization_code',
//       client_id :'a49fd82fa424dd621022dc4e16598a8c', //rest_api
//       redirect_uri :'http://localhost:8080/authentication/sign-up',
//       code:code
//     };
//     const queryString = Object.keys(data)
//         .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(data[k]))
//         .join('&');
//     const result = await axios.post('https://kauth.kakao.com/oauth/token', queryString, { headers: kakaoHeader });
//     console.log('카카오토큰',result);
//     return result
//   } catch (e) {
//     return e
//   }
// }