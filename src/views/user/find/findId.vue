<template>
  <div class="box">
    <h1>아이디 찾기</h1>
    <form action="">
      <label for="">이메일</label>
      <input type="email" name="" id="" placeholder="이메일">
      <div class="btns">
        <input type="button" value="아이디 찾기">
      </div>
    </form>
    <div class="links">
      <a @click="fnLinkLogin()">로그인</a>
      <a @click="fnLinkFindPw()">비밀번호 찾기</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "findId",
  methods: {
    fnLinkLogin() {
      this.$router.push({path: '/login'});
    },
    fnLinkFindPw() {
      this.$router.push({path: '/findPw'});
    },
  }
}
</script>

<style scoped>

</style>