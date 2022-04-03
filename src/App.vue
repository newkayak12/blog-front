<template>
  <div>
      <header-component />
      <content-component />
  </div>
</template>

<script>
import headerComponent from '@/layouts/headerLayout';
import contentComponent from '@/layouts/contentLayout';

export default {
  components: {
    headerComponent,
    contentComponent,
  }
}
</script>

<style scoped>
</style>
