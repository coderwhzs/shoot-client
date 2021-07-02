/*
 * @Description: 集成axios请求
 * @Author: ZL
 * @Date: 2021-07-01 14:38:05
 * @LastEditors: ZL
 * @LastEditTime: 2021-07-02 15:40:40
 */

import axios from 'axios'

const baseURL = ''

const service = axios.create({
  url: baseURL,
  timeout: 20000
})

service.interceptors.request.use(
  (config) => {
    const token = 1
    if (token) {
      config.headers.Authorization = token
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  (response) => {
    const { data } = response
    return data
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default service
