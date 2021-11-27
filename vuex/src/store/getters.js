import Vue from 'vue'

export default {
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
}