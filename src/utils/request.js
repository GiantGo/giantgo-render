import axios from 'axios'

// create an axios instance
const service = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL, // api的base_url
  timeout: 30000 // request timeout
})

service.interceptors.request.use(
  function (config) {
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  function (response) {
    // Do something with response data
    return response
  },
  function (error) {
    return Promise.reject(error)
  }
)

export default service

export function series(providers) {
  const ret = Promise.resolve(null)
  const results = []

  return providers
    .reduce(function (result, provider, index) {
      return result.then(function () {
        return provider().then(function (val) {
          results[index] = val
        })
      })
    }, ret)
    .then(function () {
      return results
    })
}
