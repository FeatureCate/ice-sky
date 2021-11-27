<template>
  <div>
    <h2>user</h2>
    <h3>{{userid}}</h3>
    <h3>{{$route.params.userId}}</h3>
  </div>
</template>

<script>
export default {
  name: 'User',
  props: {},
  computed: {
      userid() {
          //$route获取处于活跃状态的路由
          return this.$route.params.userId
      }
  }
}
</script>


<style scoped>

</style>
