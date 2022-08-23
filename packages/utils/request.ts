import axios from 'axios'

import type { AxiosInstance, AxiosPromise, AxiosRequestHeaders } from 'axios'
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

  const requestFunction = new Function('config', remote.requestHandler)
  const responseFunction = new Function('response', remote.responseHandler)
  const errorFunction = new Function('error', remote.errorHandler)

  service.interceptors.request.use(
    (config) => {
      return requestFunction(config)
    },
    (error) => {
      return Promise.reject(error)
    }
  )

  service.interceptors.response.use(
    (response) => {
      return responseFunction(response)
    },
    (error) => {
      return errorFunction(error)
    }
  )

  return service({ url: remote.url, method: remote.method, headers, params, data })
}
