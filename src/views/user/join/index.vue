<template>
  <div class="box">
    <h1>회원가입</h1>
    <form action="">
      <label>닉네임</label>
      <input type="text" placeholder="닉네임" v-model="nickname" @blur="fnCheckNickname">
      <div v-if="v$.nickname.$error" style="color: red; margin-bottom: 15px;">닉네임은 필수 입력값이며 최대 45자까지 허용됩니다.</div>

      <label>아이디(이메일)</label>
      <input type="text" placeholder="아이디(이메일)" v-model="id">
      <div v-if="v$.id.$error" style="color: red; margin-bottom: 15px;">아이디는 필수 입력값이며 최대 40자까지 허용됩니다.</div>

      <label>비밀번호</label>
      <input type="password" placeholder="비밀번호" v-model="password">
<!--      <div v-if="v$.password.$error" style="color: red; margin-bottom: 15px;">비밀번호는 필수 입력값이며 최소 8자부터  최대 200자까지 허용됩니다. 문자 1개 포함, 숫자 1개 포함, 특수문자를 1개 이상 포함해야합니다.</div>-->
      <div v-if="v$.password.$error" style="color: red; margin-bottom: 15px;">{{passwordErrorMsg}}</div>

      <div class="btns">
        <input type="button" value="회원가입" @click="fnJoin">
        <button @click="fnLogin">로그인</button>
      </div>
    </form>
    <div class="links">
      <a @click="fnLinkFindId()">아이디 찾기</a>
      <a @click="fnLinkFindPw()">비밀번호 찾기</a>
    </div>
  </div>
</template>

<script>
import UserSvc from "@/service/UserSvc";
import {useToast} from 'vue-toastification'
import { useVuelidate } from '@vuelidate/core'
import { required, email, maxLength, minLength } from '@vuelidate/validators'
import {isPassword} from "@/views/user/myPage";
import {getCurrentInstance} from "vue";

export default {
  name: "index",

  setup(){
    return {
      v$:useVuelidate(),

    }
  },
  data() {
    return {

      passwordErrorMsg:'',
      nickname: '',
      id: '',
      password: ''
    }
  },
  validations() {
    return {
      nickname: {
        required,
        maxLength: maxLength(45)
      },
      id: {
        required,
        email,
        maxLength: maxLength(40)
      },
      password: {

        // required,
        // isPassword
        test(val){
          const number =  /[0-9]+/
          const lowerAlphabet =  /[a-z]+/
          const upperAlphabet =  /[A-Z]+/
          const spLetter = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]+/

          console.log("sp", !spLetter.test(val))

          if(val.length === 0 ){
            this.passwordErrorMsg = '비밀번호는 필수 입력 값입니다.'
            return false
          }
          if(val.includes(" ")){
            this.passwordErrorMsg = '비밀번호는 공백이 포함될 수 없습니다.'
            return false;
          }
          if(!number.test(val)){
            console.log( '숫자없음')
            this.passwordErrorMsg = '비밀번호는 최소 한 글자의 숫자를 포함해야합니다.'
            return false
          }
          if(!lowerAlphabet.test(val)){
            this.passwordErrorMsg = '비밀번호는 최소 한 글자의 알파벳 소문자를 포함해야합니다.'
            return false
          }
          if(!upperAlphabet.test(val)){
            this.passwordErrorMsg = '비밀번호는 최소 한 글자의 알파벳 대문자를 포함해야합니다.'
            return false
          }
          if(!spLetter.test(val)){
            this.passwordErrorMsg = '비밀번호는 최소 한 글자의 특수문자를 포합해야합니다.'
            return false
          }
          if(val.length<8 || val.length>16){
            this.passwordErrorMsg = '비밀번호는 최소 8자부터 최대 16자까지 허용됩니다.'
            return false
          }

          return true
        }
      }
    }
  },
  methods:{
    fnLogin(){
      this.$router.push({path:"/login"})
    },
    fnCheckNickname() {

    },
    fnLinkFindId() {
      this.$router.push({path: '/findId'});
    },
    fnLinkFindPw() {
      this.$router.push({path: '/findPw'});
    },
    async fnJoin() {
      this.v$.$touch();

      // const response = await UserSvc.signUp({userId: this.id, userPassword: this.password, userNickname: this.nickname});
      // if(response.data.code === 200) {
      //   useToast().success(response.data.msg);
      //   return;
      // }
      // useToast().error(response.data.msg);
    }
  }
}
</script>

<style scoped>

</style>