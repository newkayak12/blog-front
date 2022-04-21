<template>
  <div>
    <div class="list" v-if="boardList.length">
      <div class="jandi-wrapper">
      <div class="jandi" >
<!--        <template v-for="(item, index) in jandiList" :key="index" >-->
<!--          <div class="group" v-if="index%7 === 0">-->
<!--            <div class="jandi-block" v-for="i in 7" :class="{on:(item>0)}">-->
<!--              {{index}}-->
<!--            </div>-->
<!--          </div>-->
<!--          <div v-for="(item, index) in jandiList" :key="index" class="jandi-block" :class="{on:(item>0)}"></div>-->
<!--        </template>-->
<!--        <div class="jandi-block" v-for="(item, index) in jandiList" :key="index" :class="{on:(item>0)}"></div>-->

        <div v-for="(item,idx) in jandiList" :key="idx" class="group">
            <div v-for="(piece,inneridx) in item" :key="inneridx" class="jandi-block" :class="fnJandiColorManager(piece)"></div>
        </div>
      </div>
      </div>
      <p>게시글 수 : {{boardTotalCount}}</p>
      <table>
        <thead>
        <th>글번호</th>
        <th>제목</th>
        <th>작성날짜</th>
        <th>수정날짜</th>
        </thead>
        <tbody>
        <tr v-for="(item,i) in boardList" @click="fnLinkBoardView(item.boardNo)">
          <td>{{boardTotalCount-i}}</td>
          <td class="title">{{item.boardTitle}}</td>
          <td>{{$filters.moment(item.boardWrittenDate,"YYYY-MM-DD")}}</td>
          <td>{{$filters.moment(item.boardUpdateDate,"YYYY-MM-DD") || "-"}}</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div class="box text" v-else>
      <p>
        아직 아무 글이 없네요.<br>
        첫 글을 작성해보세요!
      </p>
      <a href="" @click="fnLinkWriteBoard">첫 글 쓰러 가기</a>
    </div>
<!-- <InfiniteLoading identifier=page firstLoad=false @infinite="test()"/>-->
    <div style="text-align: center; padding-top: 2rem;">
      <InfiniteLoading :identifier=index :first-load=false @infinite="test"/>
    </div>
  </div>
</template>

<script>
import UserSvc from "@/service/UserSvc";
import InfiniteLoading from "v3-infinite-loading";
import wait from 'waait';

export default {
  name: "index",
  components: {
    InfiniteLoading
  },
  // 1. 다음페이지가 있을때만 로딩필요
  // 2. lodash.throttle 써서 한번에 하나만 로딩되게
  // 3. 아래와 같이 직접 userSvc를 불러도 좋지만, fetchList를 조금만 바꾸면 같은 기능을 하게할 수 잇다.
  data() {
    return {
      boardList: [],
      jandiList: [],
      page: 0,
      index: 0,
      hasNext: false,
      boardTotalCount: 0,
      jandiWeeks: 0,
    }
  },
  beforeCreate() {
    // 메타정보를 생성하기 전
  },
  created() {
    // 메타정보 생성 후
    // DOM에 접근 불가
    this.fetchJandiList();
    this.fetchList(this.page);
    // console.log(this.moment)
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
    fnLinkWriteBoard() {
      this.$router.push({path: '/boardWrite'});
    },
    async fetchList(startPage) {
      const response = await UserSvc.fetchList({ page: startPage, limit: 10, searchText: ''});
      this.boardList.push(...response.data.list);
      this.boardTotalCount = response.data.totalCount;
      this.hasNext = response.data.hasNext;
    },
    async fetchJandiList() {
      const response = await UserSvc.fetchJandiList({ gap: 364 });
      let array = []
      const arrays= []
     response.data.forEach((v,i)=>{
       if((i%7===0 && i!==0)){
          arrays.push([...array])
          array = []
       }
        array.push(v)
       if(i===364){
         arrays.push(array)
       }
     })

      console.log(arrays)
      // this.jandiList.push(...response.data);
      this.jandiList = arrays
      this.jandiWeeks = Math.trunc(this.jandiList.length / 7);
    },
    fnLinkBoardView(boardNo) {
      this.$router.push({path: '/boardView', query: { boardNo: boardNo}});
    },
    async test($state){
      await wait(1000);
      if(this.hasNext) {
        this.page++;
        await this.fetchList(this.page);
        this.index++;
      } else {
        $state.complete()
      }
    },
    fnJandiColorManager(number = 0){
      //lv1 : 1
      //lv2 : 2
      //lv3 : 5
      //lv4 : 10
        if(number <2 && number>=1){
          return "on level1"
        }
        if(number <5 && number >=2){
          return "on level2"
        }
        if(number <10 && number >=5){
          return "on level3"
        }
        if(number >= 10){
          return "on level4"
        }

    }



  }
}
</script>

<style scoped>

</style>