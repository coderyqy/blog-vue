import axios from "axios"

export function request (config) {
  // 创建一个实例
  console.log(process.env.VUE_APP_URL)
  const instance = new axios.create({
    baseURL: process.env.VUE_APP_URL,
    timeout: 5000
  })

  // 请求拦截 
  instance.interceptors.request.use(config => {
    console.log(config)
    return config
  }, err => {
    console.log(err)
  })

  // 响应拦截
  instance.interceptors.response.use(res => {
    return res
  }, err => {
    console.log(err)
  })

  return instance(config)
}
