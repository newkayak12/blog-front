<link rel="stylesheet" href="../../../assets/css/style.scss">
<template>
  <div class="view">
    <div class="board-head">
      <h1>{{ boardObj.boardTitle }}</h1>
      <div>
        <span class="written-date">{{$filters.moment(boardObj.boardWrittenDate,"YYYY년 MM월 DD일")}}</span>
        <span @click="fnLinkBoardUpdate">수정</span>
        <span @click="fnDeleteBoard">삭제</span>
      </div>
    </div>
<!--    <div class="board-content">{{ boardObj.boardContent }}</div>-->
    <Markdown :source="boardObj.boardContent" class="board-content remove-resetcss" />
  </div>

<!--  <div class="list">-->
<!--    <p>게시글 수 : {{boardTotalCount}}</p>-->
<!--    <table>-->
<!--      <thead>-->
<!--      <th>글번호</th>-->
<!--      <th>제목</th>-->
<!--      <th>작성날짜</th>-->
<!--      <th>수정날짜</th>-->
<!--      </thead>-->
<!--      <tbody>-->
<!--      <tr v-for="item in boardList">-->
<!--        <td>{{item.boardNo}}</td>-->
<!--        <td class="title" @click="changeBoardContent(item.boardNo)"><a>{{item.boardTitle}}</a></td>-->
<!--        <td>{{$filters.moment(item.boardWrittenDate,"YYYY-MM-DD")}}</td>-->
<!--        <td>{{item.boardUpdatedDate || "-"}}</td>-->
<!--      </tr>-->
<!--      </tbody>-->
<!--    </table>-->
<!--  </div>-->
</template>

<script>
// https://im-designloper.tistory.com/19
import UserSvc from '@/service/UserSvc';
import _ from 'lodash'
import {useToast} from "vue-toastification";
import 'highlight.js/styles/monokai.css';
import Markdown from 'vue3-markdown-it';

export default {
  name: "index",
  components: {
    Markdown
  },
  beforeMount() {
    this.fetchOne()
    this.fetchList()
  },
  data() {
    return {
      boardObj: {},
      boardList: [],
      boardTotalCount: 0,
    }
  },
  methods: {
    async fetchList() {
      const response = await UserSvc.fetchList({ page: 0, limit: 10, searchText: ''});
      this.boardList.push(...response.data.list);
      this.boardTotalCount = response.data.totalCount;
    },
    changeBoardContent(boardNo) {
      this.$router.push({path: '/boardView', query: { boardNo: boardNo}});
      this.fetchOne();
    },
    async fetchOne() {
      const response = await UserSvc.fetchOne({boardNo: this.$route.query.boardNo});
        // this.boardObj = await _.cloneDeep(response.data);
        this.boardObj = await response.data;
    },
    async fnDeleteBoard() {
      const response = await UserSvc.deleteBoard({boardNo: this.$route.query.boardNo});
      if(response.code === 200) {
        await useToast().success(response.msg);
        await this.$router.replace({path: '/boardList'});
        return
      }
    },
    fnLinkBoardUpdate() {
      this.$router.push({path: '/boardWrite', query: {boardNo: this.$route.query.boardNo}});
    }
  }
}
</script>

<style scoped>

</style>