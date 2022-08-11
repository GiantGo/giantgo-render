import axios from 'axios'

// create an axios instance
export function createRequest(remote) {
  const headers = {}
  const params = {}
  const data = {}

  remote.headers.forEach(({ key, value }) => {
    if (key && value) {
      headers[key] = value
    }
  })

  remote.params.forEach(({ key, value }) => {
    if (key && value) {
      params[key] = value
    }
  })

  remote.data.forEach(({ key, value }) => {
    if (key && value) {
      data[key] = value
    }
  })

  const service = axios.create({
    timeout: 30000
  })

  const requestFunction = new Function('config', remote.requestHandler)
  const responseFunction = new Function('response', remote.responseHandler)
  const errorFunction = new Function('error', remote.errorHandler)

  service.interceptors.request.use(
    function (config) {
      return requestFunction(config)
    },
    function (error) {
      return Promise.reject(error)
    }
  )

  service.interceptors.response.use(
    function (response) {
      return responseFunction(response)
    },
    function (error) {
      return errorFunction(error)
    }
  )

  return service({ url: remote.url, method: remote.method, headers, params, data })
}
