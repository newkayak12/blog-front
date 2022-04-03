<template>
    <div class="header">
      <div class="inner">
        <a class="logo">블로그</a>
        <a @click.prevent="fnLinkJoin()">회원가입</a>
        <a @click.prevent="fnLinkLogin()">로그인</a>
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