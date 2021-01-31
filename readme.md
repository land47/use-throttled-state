# Usage

```typescript
import {useThrottledState} from '@unexp/use-throttled-state'

export let App: FC = () => {
  let [counter, setCounter] = useThrottledState(1, 500)

  return (
    <>
      <button onClick={() => setCounter(n => n + 1)}>increment</button>
      Counter: {count}
    </>
  )
}
```
