<template>
  <div class="box">
    <h1>로그인</h1>
    <form action="">
      <label>로그인아이디</label>
      <input type="text" placeholder="로그인아이디" v-model="id">
      <div v-if="v$.id.$error" style="color: red; margin-bottom: 15px;">아이디를 입력하세요</div>
      <label>로그인비밀번호</label>
      <input :type="isShowPassword" placeholder="로그인비밀번호" v-model="password">
<!--      <button @click.prevent="fnShowPassword">show</button>-->
      <div v-if="v$.password.$error" style="color: red; margin-bottom: 15px;">비밀번호를 입력하세요</div>
      <div class="btns">
        <input type="button" value="로그인" @click="fnLogin" @keyup.enter="fnLogin">
        <button @click="fnJoin">회원가입</button>
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
import {required} from "@vuelidate/validators";
import {useVuelidate} from "@vuelidate/core";

export default {
  name: "index",
  setup(){
    return {
      v$:useVuelidate()
    }
  },
  data() {
    return {
      isShowPassword:'password',
      id: '',
      password: '',
    }
  },
  methods:{
    fnShowPassword(){
      if(this.isShowPassword==='password') {
        return this.isShowPassword='text'
      }
      return this.isShowPassword='password'
    },
    fnJoin(){
      this.$router.push({path:'/join'})
    },
    async fnLogin(){
      this.v$.$touch();
      if(this.v$.$invalid){
        return false
      }

      const response = await UserSvc.signIn({userId:this.id, userPassword:this.password});
      console.log(response)
      if(response.data.code === 200) {
         await useToast().success(response.data.msg);
         await this.$router.push({path: '/boardList'});
        return
      }
      return useToast().error(response.data.msg)
    },

    fnLinkFindId() {
      this.$router.push({path: '/findId'})
    },

    fnLinkFindPw() {
      this.$router.push({path: '/findPw'})
    },

  },
  validations() {
    return {
      id:{
        required
      },
      password:{
        required
      }
    }

  }
}
</script>

<style scoped>

</style>