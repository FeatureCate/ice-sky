import {INCREMENT} from './mutations-types.js'
import Vue from 'vue'

export default  {
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
}