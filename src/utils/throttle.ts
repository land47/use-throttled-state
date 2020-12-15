export function throttle<T, Arg, Args extends Arg[], ReturnValue>(
  this: T,
  func: (...args: Args) => ReturnValue,
  ms: number
) {
  let isThrottled = false
  let savedArgs: Args | null = null
  let savedThis: T | null = null

  return function wrapper(this: T, ...args: Args) {
    if (isThrottled) {
      savedArgs = args
      return (savedThis = this)
    }

    func.apply(this, args)
    isThrottled = true

    setTimeout(() => {
      isThrottled = false

      if (savedArgs !== null && savedThis !== null) {
        wrapper.apply(savedThis, savedArgs)
        savedArgs = savedThis = null
      }
    }, ms)
  }
}
