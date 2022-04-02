<template>
  <div>
    <button @click="test">
      ?
    </button>
  </div>
</template>

<script>
export default {
  name: "index",
  methods:{
    test(){
      alert("hello")
    }
  }
}
</script>

<style scoped>

</style>