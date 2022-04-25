<template>
    <div class="header">
      <div class="inner">

        <a class="logo" @click="$router.push('/')">{{nick}}블로그</a>
        <template v-if="!auth()">
<!--        <template v-if="!auth2">-->
          <a @click.prevent="fnLinkJoin()">회원가입</a>
          <a @click.prevent="fnLinkLogin()">로그인</a>
        </template>
        <template v-else>
          <a class="" @click="fnLogout">로그아웃</a>
          <a class="hoverBox" @mouseenter="fnHover" @mouseleave="fnLeave">
            내 정보
            <ul  v-if="mypage" class="hoverMenu">
              <li @click="fnLinkMyPage">비밀번호 변경</li>
              <li @click="fnChangeNickname">닉네임 변경</li>
            </ul>
          </a>

          <a class="" @click="fnLinkBoardList">글목록</a>
          <a class="" @click="fnLinkWriteBoard">새글쓰기</a>
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
      // 캐싱
      // auth2: this.$store.getters['user/getAuthorization'],
      mypage:false
    }
  },
  computed: {
    // 캐싱 o
    // auth(){
    //   return this.$store.getters['user/getAuthorization']
    // }
    nick(){
      const userData = JSON.parse(localStorage.getItem("userData"))
      return userData? userData.userNickname+"'s ":""
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
    fnChangeNickname(){
      this.$router.push({path: '/changeNickname'})
    },
    async fnLogout() {
      const response = await UserSvc.signOut();
      await this.$router.push({path:'/'})
      // await this.$router.go()
      useToast().success("로그아웃되었습니다.");
    },
    auth() {
      return this.$store.getters['user/getAuthorization']
    },
    fnLinkWriteBoard() {
      this.$router.push({path: '/boardWrite'});
    },
    fnLinkBoardList() {
      this.$router.push({path: '/boardList'});
    },
    fnHover(){
      this.mypage=true
    },
    fnLeave(){
      this.mypage=false
    }

  }
}
</script>

<style scoped>
.hoverBox{
  position: relative;
}
.hoverMenu{
  position: absolute;
  width: 120px;
  padding: 5px;
  background-color: #ebedf0;
  z-index: 1;
}
.hoverMenu li{
  margin: 0.4rem 0;
}
.hoverMenu li:hover{
  cursor: pointer;
}
</style>