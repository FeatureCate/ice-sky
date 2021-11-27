<template>
  <div>
    <h2>profile1</h2>
    <h2>{{$route.query.name}}</h2>
    <h2>{{$route.query.age}}</h2>
  </div>
</template>

<script>
export default {
  name: 'Profile1',
  props: {
    
  }
}
</script>


<style scoped>

</style>
