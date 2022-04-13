<template>
  <div class="box">
    <h1>내정보</h1>
    <form action="">
      <label>로그인아이디</label>
      <p class="point" style="margin-bottom: 5px;">{{userData.userId}}</p>
      <label>로그인비밀번호</label>
      <input type="password" name="" placeholder="로그인비밀번호" v-model="password">
      <label>새 로그인비밀번호</label>
      <input type="password" name="" placeholder="새 로그인비밀번호" v-model="newPassword">
      <div class="btns">
        <input type="button" value="정보수정" @click="fnChangePassword()">
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      userData: {},
      password: '',
      newPassword: ''
    }
  },
  beforeCreate() {
    // 메타정보를 생성하기 전
  },
  created() {
    // 메타정보 생성 후
    // DOM에 접근 불가
  },
  beforeMount() {
    // DOM을 그리기 전
    this.userData = JSON.parse(localStorage.getItem('userData'));
  },
  mounted() {
    // DOM을 그린 후
  },
  beforeUpdate() {
    // DOM을 새로 그리기 전
  },
  updated() {
    // DOM을 새로 그린 후
  },
  beforeDestroy() {
    // DOM이 없어지기 전
  },
  destroyed() {
    // DOM이 없어진 후
  },
  methods: {
    async fnChangePassword() {
      // console.log(this.newPassword, this.newPasswordCheck)
      if(this.password === this.newPassword) {
        // const response = await UserSvc.changePassword({userPassword: '??', newUserPassword: '??'});
        console.log('기존비밀번호와 새비밀번호가 같습니다.')
      } else {
        console.log('기존비밀번호와 새비밀번호가 다릅니다.')
      }
    }
  }
}
</script>

<style scoped>

</style>