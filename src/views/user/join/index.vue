<template>
  <div class="box">
    <h1>회원가입</h1>
    <form action="">
      <label>닉네임</label>
      <input type="text" placeholder="닉네임" v-model="nickname">
      <label>로그인아이디</label>
      <input type="text" placeholder="로그인아이디" v-model="id">
      <label>로그인비밀번호</label>
      <input type="password" placeholder="로그인비밀번호" v-model="password">
      <div class="btns">
        <input type="button" value="회원가입" @click="fnJoin">
        <button>로그인</button>
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

export default {
  name: "index",
  data() {
    return {
      nickname: '',
      id: '',
      password: ''
    }
  },
  methods:{
    fnLinkFindId() {
      this.$router.push({path: '/findId'});
    },
    fnLinkFindPw() {
      this.$router.push({path: '/findPw'});
    },
    async fnJoin() {
      const response = await UserSvc.signUp({userId: this.id, userPassword: this.password, userNickname: this.nickname});
      if(response.data.code === 200) {
        useToast().success(response.data.msg);
        return;
      }
      useToast().error(response.data.msg);
    }
  }
}
</script>

<style scoped>

</style>