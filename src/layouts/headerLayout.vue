<template>
    <div class="header">
      <div class="inner">
        <a class="logo">블로그</a>
        <template v-if="!auth">
          <a @click.prevent="fnLinkJoin()">회원가입</a>
          <a @click.prevent="fnLinkLogin()">로그인</a>
        </template>
        <template v-else>
          <a class="" @click="fnLogout">로그아웃</a>
          <a class="" @click="fnLinkMyPage">내정보</a>
          <a class="">내블로그</a>
          <a class="">새글쓰기</a>
        </template>
      </div>
    </div>
</template>

<script>
import UserSvc from "@/service/UserSvc";
import {useToast} from 'vue-toastification'

export default {
  name: "headerLayout",
  data() {
    return {

    }
  },
  computed: {
    auth(){
      return this.$store.getters['user/getAuthorization']
    }
  },
  methods: {
    fnLinkLogin() {
      this.$router.push({path: '/login'});
    },
    fnLinkJoin() {
      this.$router.push({path: '/join'});
    },
    fnLinkMyPage() {
      this.$router.push({path: '/myPage'});
    },
    async fnLogout() {
      const response = await UserSvc.signOut();
      await this.$router.push({path:'/'})
      useToast().success("로그아웃되었습니다.");
    }
  }
}
</script>

<style scoped>

</style>