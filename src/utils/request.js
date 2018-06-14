/**
 * Created by wangchunwei on 2018/06/12
 */
/* global window:true document:true */
import axios from 'axios'

const ajax = axios.create({
  baseURL: 'http://140.143.227.194:8001/weixin/',
  timeout: 5000
})

// 添加请求拦截器
ajax.interceptors.request.use(
  (config) => {
    console.log(config)
    return config
  },
  (error) => {
    return error
  }
)

// 添加响应拦截器
ajax.interceptors.response.use(
  (response) => {
    // errno 接口验证状态码
    if (response.data && response.data.status === 200) {
      return Promise.resolve(response.data)
    }
    return Promise.reject(response.data)
  },
  (error) => {
    return Promise.reject(new Error({ msg: error.message }))
  }
)
export default ajax
