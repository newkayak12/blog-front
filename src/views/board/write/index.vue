<template>
  <div class="editor">
    <div class="editor-head">
      <input type="text" name="" id="" placeholder="제목을 입력하세요." :value="title" @input="typingTitle">

      <button class="btn-main" @click="fnModifyBoard" v-if="Object.keys(boardObj)>0">글 수정</button>
      <button class="btn-main" @click="fnWriteBoard" v-else>글 등록</button>
    </div>
    <div class="remove-resetcss">
      <v-md-editor v-model="text" height="80vh" />
    </div>

  </div>
</template>

<script>
import UserSvc from "@/service/UserSvc";
import { useToast } from "vue-toastification";
import VMdEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';
import Prism from 'prismjs';
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'

VMdEditor.use(vuepressTheme, {
  Prism
})

export default {
  name: "index",
  setup(){
    return {
      v$:useVuelidate()
    }
  },
  data() {
    return {
      boardObj: {},
      title: '',
      text: '',
    }
  },
  validations() {
    return {
      title: { required },
      text: { required }
    }
  },
  components: {
    VMdEditor
  },
  computed: {

  },
  beforeMount() {
    if(this.$route.query.boardNo) {
      this.fetchOne();
    }
  },
  methods: {
    typingTitle(e) {
      this.title = e.target.value;
    },
    async fnWriteBoard() {
      const response = await UserSvc.writeBoard({boardTitle: this.title, boardContent: this.text});
      console.log(response)
      if(response.code === 200) {
        useToast().success(response.msg);
        await this.$router.replace({path: '/boardView', query: { boardNo: response.data.boardNo}});
      } else {
        useToast().error(response.msg);
      }
    },
    async fetchOne() {
      const response = await UserSvc.fetchOne({boardNo: this.$route.query.boardNo});
      this.boardObj = await response.data;
      this.title = this.boardObj.boardTitle;
      this.text = this.boardObj.boardContent;
      // console.log(this.boardObj)
    },
    async fnModifyBoard() {
      const response = await UserSvc.modifyBoard({boardNo:this.$route.query.boardNo, boardTitle: this.title, boardContent: this.text});
      console.log(response)
      if(response.code === 200) {
        useToast().success(response.msg);
        await this.$router.replace({path: '/boardView', query: { boardNo: response.data.boardNo}});
      } else {
        useToast().error(response.msg);
      }
    }
  }
}
</script>

<style scoped>
.editor {
  margin-top: 100px;
}
.editor-head {
  margin-bottom: 1rem;
}
</style>