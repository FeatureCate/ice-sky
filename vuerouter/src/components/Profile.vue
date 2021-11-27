<template>
  <div>
    <h2>profile</h2>
    <h2>{{$route.query.name}}</h2>
    <h2>{{$route.query.age}}</h2>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  props: {
    
  },
  created() {
    console.log('创建');
  },
  destroyed() {
    console.log('销毁');
  },
}
</script>


<style scoped>

</style>
