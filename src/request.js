import axios from 'axios'

const request = axios.create({
  baseURL: 'http://127.0.0.1:3005'
})

// 添加拦截
// 为所有的请求都带上token
request.interceptors.request.use(config => {
  const token = window.localStorage.getItem('pig_jwt_token')
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`
  }
  return config
}, error => {

})

// 拦截响应 遇到token不合法时跳会登录页面
request.interceptors.response.use(res => {
  if (res.data.token) {
    window.localStorage.setItem('pig_jwt_token', res.data.token)
  }
  return res.data
}, error => {
  const errRes = error.response
  if (errRes?.status === 401) {
    window.localStorage.removeItem('pig_jwt_token')
    console.log('Auth error')
    window.alert('请重新登录！')
    // 跳转回来
    window.location.href= '/'
  }
  // return error;
  return Promise.reject(error.message)
})

export default request