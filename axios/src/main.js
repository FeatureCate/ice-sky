import Vue from 'vue'
import App from './App.vue'

import axios from 'axios'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

// 1：基本使用
axios({
  baseURL: 'https://api.apiopen.top',
  url: '/getJoke',
  method: 'get',//默认情况get请求，如果是post则持有data对象
  timeout: 5000,//超时时间
  params: {//会将参数自动拼接到url上，是get请求持有的对象
    count: 2,
    type: 'video',
    page: 1
  }
}).then(res => {
  console.log(res);
})

// 2：axios的并发请求
axios.all([axios({
  url: 'https://api.apiopen.top/getJoke',
  method: 'get',
  params: {
    count: 2,
    type: 'video',
    page: 1
  }
}),axios({
  url: 'https://api.apiopen.top/getSingleJoke',
  method: 'get',
  params: {
    sid: 28654780
  }})])
.then(results => {
  console.log(results);
})
//特别的调用（自动展开）
// .then(axios.spread((res1,res2) => {
//   console.log(res1);
//   console.log(res2);
// }))

// 3：设置全局配置
axios.defaults.baseURL = 'https://api.apiopen.top';
axios.defaults.timeout = 5000;
axios({
  url: '/getJoke',
  method: 'get',
  params: {
    count: 2,
    type: 'video',
    page: 1
  }
}).then(res => {
  console.log('全局配置');
  console.log(res);
})

// 4：创建对应的axios实例
const instancel = axios.create({
  baseURL: 'https://api.apiopen.top',
  timeout: 5000
 })

 instancel({
   url: '/getJoke',
   params: {
    count: 2,
    type: 'video',
    page: 1
  }
 }).then(res => {
   console.log('axios实例');
   console.log(res);
 })

//  5：调用自定义的request请求
import {request1,request2,request3,request4,request5} from './network/request.js'

request1({
  url: '/getJoke',
  params: {
    count: 2,
    type: 'video',
    page: 1
  }
},res => {
  console.log(res);
},err => {
  console.log(err);
})

request2({
  base: {
    url: '/getJoke',
    params: {
      count: 2,
      type: 'video',
      page: 1
    }
  },
  success: function(res) {
    console.log('request2 success');
    console.log(res);
  },
  failure: function(err) {
    console.log('request2 error');
    console.log(err);
  }
})

request3({
  url: '/getJoke',
  params: {
    count: 2,
    type: 'video',
    page: 1
  }
}).then(res => {
  console.log('request3 success');
  console.log(res);
}).catch(err => {
  console.log('request3 error');
  console.log(err);
})

request4({
  url: '/getJoke',
  params: {
    count: 2,
    type: 'video',
    page: 1
  }
}).then(res => {
  console.log('request4 success');
  console.log(res);
}).catch(err => {
  console.log('request4 error'); 
  console.log(err);
})

request5({
  url: '/getJoke',
  params: {
    count: 2,
    type: 'video',
    page: 1
  }
}).then(res => {
  console.log('request5 success');
  console.log(res);
}).catch(err => {
  console.log('request5 error'); 
  console.log(err);
})