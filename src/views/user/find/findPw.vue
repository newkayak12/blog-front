<template>
  <div class="box">
    <h1>비밀번호 찾기</h1>
    <form action="">
      <label for="">이메일</label>
      <input type="email" name="" id="" placeholder="이메일">
      <div class="btns">
        <input type="button" value="비밀번호 찾기">
      </div>
    </form>
    <div class="links">
      <a @click="fnLinkLogin()">로그인</a>
      <a @click="fnLinkJoin()">회원가입</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "findPw",
  methods: {
    fnLinkLogin() {
      this.$router.push({path: '/login'});
    },
    fnLinkJoin() {
      this.$router.push({path: '/join'});
    },
  }
}
</script>

<style scoped>

</style>