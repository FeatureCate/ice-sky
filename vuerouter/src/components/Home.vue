<template>
  <div>
    <h2>home</h2>
    <!-- 嵌套路由to里面是完整的路径 -->
    <router-link to="/home/message" class="abq">message</router-link>
    <router-link to="/home/news" class="abq">news</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    
  },
  data() {
    return{
      path: '/home/news'
    }
  }
  ,
  created() {
    console.log('创建');
  },
  destroyed() {
    console.log('销毁');
  },
  //activated，deactivated只有该组件被keep-alive包裹时才能使用
  activated() {
    console.log('组件活跃');
    this.$router.push(this.path);
  },
  deactivated() {
    console.log('组件不活跃');
  },
  beforeRouteLeave(to,from,next){//组件路由守卫的，离开后钩子
    this.path = this.$route.path
    next()
  }
}
</script>


<style scoped>
  .abq{
    text-decoration: none;
    font-size: 30px;
    margin-right: 30px;
    color: pink;
    font-weight: bold;
  }
</style>
