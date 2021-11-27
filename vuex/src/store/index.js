import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'
import a from './moudles/a.js'

//1：安装
Vue.use(Vuex)

const state = {
  // 管理的数据（状态）
  counter: 1000,
  students: [{age:10},{age:9},{age:7},{age:13},{age:16},{age:11}],
  mvvms: {
    aaa: 1,
    bbb: 2,
  },
  dmvvms: {
    aaa: 1,
    bbb: 2,
  },
  info: {
    aaa: 7,
    bbb: 8,
    ccc: 9
  }
}

// 2：创建
const store = new Vuex.Store({
  state,
  mutations,// 定义方法，不能包含异步操作否在bug检测不到
  getters,//相当于计算属性
  actions,
  modules: {
    a
  }
})

// 3；导出
export default store
