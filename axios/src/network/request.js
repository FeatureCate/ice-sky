import axios from "axios";

export function request1(config,success,failure) {
    //创建实例
    const instancel = axios.create({
    baseURL: 'https://api.apiopen.top',
        timeout: 5000
    })
    // 发送请求
    instancel(config)
    .then(res => {
        console.log('request success');
        success(res)
    }).catch(err => {
        console.log('request error');
        failure(err)
    })
}

export function request2(config) {
    const instancel2 = axios.create({
        baseURL: 'https://api.apiopen.top',
        timeout: 5000
    })

    instancel2(config.base)
    .then(res => {
        config.success(res)
    }).catch(err => {
        config.failure(err)
    })
}

export function request3(config) {
    return new Promise((resolve,reject) => {
        const instancel3 = axios.create({
            baseURL: 'https://api.apiopen.top',
            timeout: 5000
        })

        instancel3(config)
        .then(res => {
            resolve(res)
        })
        .catch(err => {
            reject(err)
        })

    })
}

export function request4(config) {
    const instancel4 = axios.create({
        baseURL: 'https://api.apiopen.top',
        timeout: 5000
    })

    //因为这个axios会调用promise函数
    return  instancel4(config)
}

// axios拦截器
export function request5(config) {
    const instancel5 = axios.create({
        baseURL: 'https://api.apiopen.top',
        timeout: 5000
    })

    //全局拦截
    //axios.interceptors

    //拦截请求
    //例如:网站的加载中动画(可以在请求时显示,响应时隐藏);登录时查看验证token;
    instancel5.interceptors.request.use(
        config => {
            //必须返回,否则失败
            return config
        },
        err => {
            console.log(err);
        }
    )
    //拦截响应
    instancel5.interceptors.response.use(
        res =>{
            //必须返回,否则返回成功但是值为undefined
            return res.data
        },
        err => {
            console.log(err);
        }
    )

    return  instancel5(config)
}