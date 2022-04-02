<template>
  <div>
    <div class="header">
      <div class="inner">
        <a class="logo">블로그</a>
        <a class="" >회원가입</a>
        <a href="#" @click.prevent="fnLinkLogin()">로그인</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "headerLayout",
  data() {
    return {

    }
  },
  computed: {

  },
  methods: {
    fnLinkLogin() {
      console.log("??")
      this.$router.push({path: '/login'});
    }
  }
}
</script>

<style scoped>

</style>