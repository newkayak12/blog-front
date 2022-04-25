<template>
  <div class="box">
    <h1>내정보</h1>
    <form action="">
      <label>닉네임</label>
      <p class="point" style="margin-bottom: 5px;">{{userData.userNickname}}</p>
      <label>아이디</label>
      <p class="point" style="margin-bottom: 5px;">{{userData.userId}}</p>
      <label>비밀번호</label>
      <input type="password" name="" placeholder="비밀번호" v-model="password">
      <label>새 비밀번호</label>
      <input type="password" name="" placeholder="새 비밀번호" v-model="newPassword">
      <p v-if="v$.newPassword.$error">비밀번호는 8 ~ 16자 영문, 숫자, 특수문자를 최소 한가지씩 조합해야 합니다.</p>
      <label>새 비밀번호 확인</label>
      <input type="password" name="" placeholder="새 비밀번호 확인" v-model="newPasswordCheck">
      <div class="btns">
        <input type="button" value="정보수정" @click="fnChangePassword()" :disabled="v$.invalid">
      </div>
    </form>
  </div>
</template>

<script>
import UserSvc from "@/service/UserSvc";
import {useToast} from "vue-toastification";
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'

// 참고한 링크: https://medium.com/js-dojo/learn-form-validation-in-vue-3-in-10-minutes-with-vuelidate-8929c5059e66
export function isPassword(value) {
  const regExp = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/;
  return regExp.test(value);
}

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
  validations() {
    return {
      password: { required },
      newPassword: { required, isPassword },
      newPasswordCheck: { required, isPassword }
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
  methods: {
    async fnChangePassword() {
      this.v$.$touch();
        if (this.newPassword !== this.newPasswordCheck) {
          useToast().info('새 비밀번호와 새 비밀번호 확인이 같아야합니다!');
          return;
        }
      const response = await UserSvc.changePassword({userPassword: this.password, newUserPassword: this.newPassword});
        if(response.data.code === 200) {
          useToast().success(response.data.msg);
        } else {
          useToast().error(response.data.msg);
        }
    },
    checkPassword() {
      return this.newPassword === this.newPasswordCheck;
    },

  }
}
</script>

<style scoped>

</style>