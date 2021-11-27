export default {
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