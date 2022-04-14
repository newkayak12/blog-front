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
      <p v-if="v$.newPassword.$error">WRONG!!!!!!!!!!!!! </p>
      <label>새 로그인비밀번호 확인</label>
      <input type="password" name="" placeholder="새 로그인비밀번호 확인" v-model="newPasswordCheck">
      <p v-if="v$.newPasswordCheck.$error">WRONG!!!!!!!!!!!!! </p>
      <div class="btns">
        <input type="button" value="정보수정" @click="fnChangePassword()">
      </div>
    </form>
  </div>
</template>

<script>
import UserSvc from "@/service/UserSvc";
import {useToast} from "vue-toastification";
import { useVuelidate } from '@vuelidate/core'


export default {
  name: "index",
  setup(){
    return {
      v$:useVuelidate()
    }
  },
  data() {
    return {
      userData: {},
      password: '',
      newPassword: '',
      newPasswordCheck: '',
    }
  },
  validations: {
    newPassword: {
      test(val){
        // 검사식
        const regExp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
        if(!regExp.test(val)){
          return false
        }
        return true
      }
    },
    newPasswordCheck: {
      test(val){ // val은 newPasswordCheck 값
        if(val===this.newPassword){
          return true
        }
        return false
      }
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
      this.v$.$touch() // vuelidation 실행시킴 (처음 한번만 하면 됌)
      if(this.v$.newPassword.$error||this.newPasswordCheck.$error) return false // validation의 error가 true이면 여기서 stop

      if(this.password === this.newPassword) {
        useToast().info('새 비밀번호는 기존 비밀번호와 같을 수 없습니다.');
      } else {
        if(this.newPassword === this.newPasswordCheck) {
          // const response = await UserSvc.changePassword({userPassword: '??', newUserPassword: '??'});
          useToast().success('새비밀번호와 새비밀번호확인이 같다!');
        }
      }
    }
  }
}
</script>

<style scoped>

</style>