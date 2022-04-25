<template>
  <div class="box">
    <h1>닉네임 변경</h1>
    <form action="">
      <label>닉네임</label>
      <input type="text" name="" placeholder="닉네임" v-model="userNickname">
      <div v-if="v$.userNickname.$error" style="color: red; margin-bottom: 15px;">닉네임이 올바르지 않습니다.</div>
      <div class="btns">
        <input type="button" value="닉네임 변경" @click="fnChangeNickname" :disabled="v$.invalid">
      </div>
    </form>
  </div>
</template>

<script>
import {useVuelidate} from "@vuelidate/core";
import {useToast} from "vue-toastification";
import user from "@/store/User";

export default {
  name: "index",
  beforeMount() {
    const userData = this.$store.getters['user/getUserData']
    console.log(userData)
    this.userNickname =  userData.userNickname
    console.log(this.$store.getters)
  },
  setup(){
    return {
      v$:useVuelidate()
    }
  },
  data(){
    return {
      userNickname:''
    }
  },
  validations(){
    return{
      userNickname:{
        test(val){
          if(val<=0 || val>20){
            return false
          }
          return true
        }
      }
    }
  },
  methods:{
    fnChangeNickname(){
      this.v$.touch()
      if(this.v$.invalid){
        return false
      }

      useToast().success("닉네임 변경 성공")
    }
  }
}
</script>

<style scoped>

</style>