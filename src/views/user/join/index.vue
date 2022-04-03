<template>
  <div class="box">
    <h1>회원가입</h1>
    <form action="">
      <label for="">이메일</label>
      <input type="email" name="" id="" placeholder="이메일">
      <label for="">로그인아이디</label>
      <input type="text" name="" id="" placeholder="로그인아이디">
      <label for="">로그인비밀번호</label>
      <input type="password" name="" id="" placeholder="로그인비밀번호">
      <div class="btns">
        <input type="button" value="회원가입">
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
export default {
  name: "index",
  methods:{
    fnLinkFindId() {
      this.$router.push({path: '/findId'});
    },
    fnLinkFindPw() {
      this.$router.push({path: '/findPw'});
    },
  }
}
</script>

<style scoped>

</style>