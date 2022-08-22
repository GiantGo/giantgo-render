import axios from 'axios'

import type { AxiosInstance, AxiosRequestHeaders, AxiosPromise } from 'axios'
import type { Remote } from '@giantgo-render/tokens'

// create an axios instance
export function createRequest(remote: Remote): AxiosPromise<unknown> {
  const headers: AxiosRequestHeaders = {}
  const params: Record<string, any> = {}
  const data: Record<string, any> = {}

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

  const service: AxiosInstance = axios.create({
    timeout: 30000
  })

  const requestFunction: Function = new Function('config', remote.requestHandler)
  const responseFunction: Function = new Function('response', remote.responseHandler)
  const errorFunction: Function = new Function('error', remote.errorHandler)

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
