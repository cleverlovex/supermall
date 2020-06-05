import axios from 'axios'

export function request(config) {
    //  1.创建axios实例
    const instance = axios.create({
      baseURL: 'http://152.136.185.210:8000/api/n3',
      timeout: 10000
    })

    //2.axios拦截器
  instance.interceptors.request.use(config => {
    // console.log(config);
    //拦截下来可以添加一些自己想要的操作
    return config;
  }, error => {
    console.log(err);
  })

    //2.2响应拦截
  instance.interceptors.response.use(res => {
    // console.log(res);
    return res.data
  }, err => {
    console.log(err);
  })

    //3.发送请求
    return instance(config)
}
