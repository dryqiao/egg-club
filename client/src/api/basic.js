import axios from 'axios'
axios.defaults.timeout = 5000
axios.defaults.baseURL = 'http://localhost:7001/api'
// axios.defaults.withCredentials = true
axios.interceptors.request.use(config => {
  if (config.method === 'post') {
        // config.data = qs.stringify(config.data)
  }
  if (config.method === 'get') {
        // config.params = qs.stringify(config.params)
  }
  return config
}, error => {
  console.log('参数错误')
  return Promise.reject(error)
})

axios.interceptors.response.use(res => {
  return res
}, error => {
  console.log('网络异常')
  return Promise.reject(error)
})

// post请求方法
export function postData (url, params = undefined) {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
            .then(res => {
              resolve(res.data)
            }, err => {
              reject(err)
            })
            .catch(error => {
              reject(error)
            })
  })
}

// get请求方法
export function getData (url, params = undefined) {
  return new Promise((resolve, reject) => {
    axios.get(url, {params: params})
            .then(res => {
              resolve(res.data)
            }, err => {
              reject(err)
            })
            .catch(error => {
              reject(error)
            })
  })
}
// put请求方法
export function putData (url, params = undefined) {
  return new Promise((resolve, reject) => {
    axios.put(url, params)
            .then(res => {
              resolve(res.data)
            }, err => {
              reject(err)
            })
            .catch(error => {
              reject(error)
            })
  })
}
// delete请求方法
export function deleteData (url, params = undefined) {
  return new Promise((resolve, reject) => {
    axios.delete(url, params)
            .then(res => {
              resolve(res.data)
            }, err => {
              reject(err)
            })
            .catch(error => {
              reject(error)
            })
  })
}
