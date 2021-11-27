<template>
  <div id="app">
      <h1>vue router</h1>
      <!-- 
        router-link
        1：相当于a标签
        2：tag可以设置为按钮
        3: replace，无法返回上一项
        4：active-class="active"单一更改活跃状态的class名字
       -->
      <router-link to="/home" class="abq" replace active-class="active">Home</router-link>
      <router-link to="/about" class="abq" tag="button" >About</router-link>

      <!-- 通过params向组件中传入数据 -->
      <router-link :to="'/user/'+userId" class="abq">user</router-link>
      <!-- 通过query向组件中传入数据 -->
      <router-link :to="{path:'/profile',query:{name:'acg',age:7}}" class="abq">profile</router-link>

      <button class="abqs" @click="home1click">home1</button>
      <button class="abqs" @click="about1click">about1</button>

      <button class="abqs" @click="user1click">user1</button>
      <button class="abqs" @click="profile1click">profile1</button>

      <!-- 
        1：防止组件被频繁刷新 
        2：exclude排除某些组件，通过组件定义的name查询，且逗号后不能加空格
        3：include保存某些组件，写法同理exclude
      -->
      <keep-alive exclude="Profile,User">

      <!-- 决定组件的渲染位置 -->
      <router-view></router-view>

      </keep-alive>
    
  </div>
</template>

<script>

export default {
  name: 'App',
  props: {
    
  },
  data() {
    return {
      userId: 'ccc',
      userId1: 'aaa'
    }
  },
  methods: {
    home1click() {
      //replace，无法返回上一项
      //$router获取整个路由
      this.$router.replace('/home1')
    },
    about1click() {
      this.$router.push('/about1')
    },
    user1click() {
      this.$router.push('/user1/'+this.userId1)
    },
    profile1click() {
      this.$router.push({
        path: '/profile1',
        query: {
          name: 'acg1',
          age: 7
        }
      })
    }
  }
}

</script>

<style>
  .abq{
    text-decoration: none;
    font-size: 30px;
    margin-right: 30px;
    color: pink;
    font-weight: bold;
  }
  .abqs{
    text-decoration: none;
    font-size: 30px;
    margin-right: 30px;
    color: rgb(38, 87, 179);
    font-weight: bold;
  }
</style>
