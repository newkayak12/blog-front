<template>
  <div class="list">
    <p>게시글 수 : 100</p>
    <table>
      <thead>
      <th>글번호</th>
      <th>제목</th>
      <th>작성날짜</th>
      <th>수정날짜</th>
      </thead>
      <tbody>
      <tr>
        <td>15</td>
        <td class="title"><a href="">어쩌고저저고 룰라랄라 키키키키히히히히</a></td>
        <td>2022-03-28</td>
        <td>2022-03-28</td>
      </tr>
      <tr>
        <td>14</td>
        <td class="title"><a href="">어쩌고저저고 룰라랄라</a></td>
        <td>2022-03-28</td>
        <td>2022-03-28</td>
      </tr>
      <tr>
        <td>13</td>
        <td class="title"><a href="">어쩌고저저고 룰라랄라</a></td>
        <td>2022-03-28</td>
        <td>2022-03-28</td>
      </tr>
      <tr>
        <td>12</td>
        <td class="title"><a href="">어쩌고저저고 룰라랄라</a></td>
        <td>2022-03-28</td>
        <td>2022-03-28</td>
      </tr>
      <tr>
        <td>11</td>
        <td class="title"><a href="">어쩌고저저고 룰라랄라</a></td>
        <td>2022-03-28</td>
        <td>2022-03-28</td>
      </tr>
      <tr>
        <td>10</td>
        <td class="title"><a href="">어쩌고저저고 룰라랄라</a></td>
        <td>2022-03-28</td>
        <td>2022-03-28</td>
      </tr>
      </tbody>
    </table>
  </div>
<!--  <div class="box text">-->
<!--    <p>-->
<!--      아직 아무 글이 없네요.<br>-->
<!--      첫 글을 작성해보세요!-->
<!--    </p>-->
<!--    <a href="">첫 글 쓰러 가기</a>-->
<!--  </div>-->
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
    this.fetchList();
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
      // this.boardList = response.data.list;
      console.log(response)
    }
  }
}
</script>

<style scoped>

</style>