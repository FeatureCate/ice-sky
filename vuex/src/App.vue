<template>
  <div id="app">
    <h1>app</h1>
    <!-- 调用定义的数据（状态） -->
    <h1>{{$store.state.counter}}</h1>
    <h1>vuex</h1>
    <test />
    <button @click="addition">+</button>
    <button @click="subraction">-</button>
    <button @click="additions(3)">3+</button>
    <button @click="subractions(3)">3-</button>

    <!-- 调用getters属性中的函数 -->
    <h2>{{$store.getters.powerCounter}}</h2>
    <h2>{{$store.getters.small11stu}}</h2>
    <h2>{{$store.getters.small11stulen}}</h2>
    <h2>{{$store.getters.smallstu(11)}}</h2>

    <!-- 将数据添加进响应式 -->
    <h2>{{$store.getters.mvvmsc}}</h2>
    <!-- 将数据从响应式中移除 -->
    <h2>{{$store.getters.dmvvmsc}}</h2>

    <!-- vuex的异步操作 -->
    <button @click="updates">异步</button>
    <h2>{{$store.state.info}}</h2>

    <!-- vuex的module -->
    <h2>{{$store.state.a.name}}</h2>
    <!-- 其他调用方式同上 -->
    <h2>{{$store.getters.fullname}}</h2>

  </div>
</template>

<script>
import test from './components/test.vue'
import {INCREMENT} from './store/mutations-types.js'

export default {
  name: 'App',
  components: {
    test
  },
  methods: {
    addition() {
      //提交参数调用方法
      this.$store.commit(INCREMENT)
    },
    subraction() {
      this.$store.commit('decrement')
    },
    additions(count) {
      //传入参数（payload：负载）
      //普通提交风格
      this.$store.commit('increments',count)
    },
    subractions(count) {
      // 特殊提交风格
      this.$store.commit({
        type: 'decrements',
        count
      })
    },
    updates() {
      // this.$store.dispatch('aUpdate',{
      //   message: '我是携带的信息',
      //   success: () => {
      //     console.log('success');
      //   }
      // })
      this.$store.dispatch('aUpdate','我是携带的信息')
      .then(res => {
        console.log(res);
      })
    }
  }
}
</script>

<style lang="less">

</style>
