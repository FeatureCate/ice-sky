export default {
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
}