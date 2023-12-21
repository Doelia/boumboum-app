import { useRef } from 'react'

export default function useObserver() {
  const ref = useRef({
    subscriptions: [],
    subscribe: (callback) => {
      ref.current.subscriptions.push(callback)
      return callback
    },
    unsubscribe: (callback) => {
      ref.current.subscriptions = ref.current.subscriptions.filter((cb) => cb !== callback)
    },
    publish: (isYes) => {
      ref.current.subscriptions.forEach((cb) => cb(isYes))
    },
  })
  return ref
}
