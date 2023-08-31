import { useState, useEffect } from 'react'

const useStore = <T, F>(
  store: (callback: (state: T) => unknown) => unknown,
  callback: (state: T) => F
) => {
  const result = store(callback) as F
  const [data, setData] = useState<any>(() => {
    switch (typeof result) {
      case 'object':
        return Array.isArray(result) ? [] : {}
      case 'string':
        return ''
      case 'number':
        return 0
      default:
        return null
    }
  })

  useEffect(() => {
    setData(result)
  }, [result])

  return data as F
}

export default useStore