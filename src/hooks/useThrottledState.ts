import { useCallback, useState, Dispatch, SetStateAction } from 'react'
import { throttle } from '../utils'

export function useThrottledState<V = undefined>(
  value: V,
  ms: number = 0
): [V, Dispatch<SetStateAction<V>>] {
  let [state, setState] = useState(value)
  let throttledSetState = useCallback(() => throttle(setState, ms), [])

  return [state, throttledSetState]
}
