import Vue from 'vue'
import Vuex from 'vuex'
import {INCREMENT} from './mutations-types.js'

//1：安装
Vue.use(Vuex)

// 2：创建
const store = new Vuex.Store({
  state: {
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
  },
  // 定义方法，不能包含异步操作否在bug检测不到
  mutations: {
    [INCREMENT](state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    },
    increments(state,count) {//第二个参数是传入的参数
      state.counter += count
    },
    decrements(state,payload) {
      //payload此时变成特殊传入的整个对象
      console.log(payload);
      state.counter += payload.count
    },
    update(state) {
      Vue.delete(state.info,'bbb')
    }
  },
  //相当于计算属性
  getters: {
    mvvmsc(state) {
      Vue.set(state.mvvms,'ccc',3)
      return state.mvvms
    },
    dmvvmsc(state) {
      Vue.delete(state.dmvvms,'bbb')
      return state.dmvvms
    },
    powerCounter(state) {
      return state.counter * state.counter 
    },
    small11stu(state) {
      // filter过滤，可以每次从数组中获取一个对象，进行方法判断，最终为true的对象以过滤后的数组输出
      return state.students.filter(s => s.age<=11)
    },
    small11stulen(state,getters) {//可以直接调用getters（只是一个名字，第二个参数必是getters）
      return getters.small11stu.length
    },
    smallstu(state) {
      return function(age) {//这里获取传入的参数
        return state.students.filter(s => s.age<age)
      }
    }
  },
  actions: {
    //context理解成大的store对象
    aUpdate(context,payload) {
      // setTimeout(()=>{
      //   context.commit('update')
      //   console.log(payload);
      // },1000)
      return new Promise((resolve,reject)=>{
          setTimeout(()=>{
            context.commit('update')
            console.log(payload);
            resolve('success')
          },1000)
      })
    }
  },
  modules: {
    a: {
      state: {
        name: 'ice'
      },
      getters: {
        // 模块里的第三个参数为根的state
        fullname(state,getters,rootState) {
          return state.name + rootState.counter
        }
      },
      mutations: {},
      actions: {
        //此时context只能提交a模块里mutations的函数
        aaa(context) {

        }
      }
    }
  }
})

// 3；导出
export default store
