<template>
  <div class="list" v-if="boardList.length">
    <p>게시글 수 : {{boardTotalCount}}</p>

    <table>
      <thead>
      <th>글번호</th>
      <th>제목</th>
      <th>작성날짜</th>
      <th>수정날짜</th>
      </thead>
      <tbody>
      <tr v-for="item in boardList">
        <td>{{item.boardNo}}</td>
        <td class="title"><a href="">{{item.boardTitle}}</a></td>
        <td>{{$filters.moment(item.boardWrittenDate,"YYYY-MM-DD")}}</td>
        <td>{{item.boardUpdatedDate || "-"}}</td>
      </tr>
      </tbody>
    </table>
  </div>
  <div class="box text" v-else>
    <p>
      아직 아무 글이 없네요.<br>
      첫 글을 작성해보세요!
    </p>
    <a href="">첫 글 쓰러 가기</a>
  </div>
</template>

<script>
import UserSvc from "@/service/UserSvc";


export default {
  name: "index",
  components: {

  },

  data() {
    return {
      boardList: [],
      boardTotalCount: 0
    }
  },
  beforeCreate() {
    // 메타정보를 생성하기 전
  },
  created() {
    // 메타정보 생성 후
    // DOM에 접근 불가
    this.fetchList();
    console.log(this.moment)
  },
  beforeMount() {
    // DOM을 그리기 전
    // this.fetchList();
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
    async fetchList() {
      const response = await UserSvc.fetchList({ page: 0, limit: 10, searchText: ''});
      this.boardList.push(...response.data.list);
      console.log(response.data.totalCount)
      this.boardTotalCount = response.data.totalCount;
    }
  }
}
</script>

<style scoped>

</style>