import React from "react"

interface IApiCall {
  path: string,
}

export const useSurrenderApi = (apiCall: IApiCall) => {
  const [success, setSuccess] = React.useState<any>()
  const [error, setError] = React.useState<any>()
  const [isLoading, setLoading] = React.useState(false)

  const doRequest = React.useCallback((params?: any) => {
    setLoading(true)
    setError(undefined)
    setSuccess(undefined)

    // const url = new URL('http://surrender-production.sa-east-1.elasticbeanstalk.com' + apiCall.path)
    const url = new URL(apiCall.path, 'http://192.168.0.166:8080')
    if (params) {
      Object.keys(params).forEach(key => {url.searchParams.append(key, params[key])})
    }

    console.log(url.href as string)
    fetch(url.href)
    .then(async (response) => { 
      setSuccess(await response.json()) })
    .catch(setError).finally(() => {
      setLoading(false)
    })
  }, [apiCall])

  const doReset = React.useCallback(() => {
    setSuccess(undefined)
    setError(undefined)
    setLoading(false)
  }, [])

  return [success, error, isLoading, doRequest, doReset]
}

