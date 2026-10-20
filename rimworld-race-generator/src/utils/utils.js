export const percentOf = (x, y) => Math.round((x / y) * 100)
export const pxToVh = (px, windowResize) => (100 * px) / windowResize.height || window.innerHeight
export const vhToPx = (vh, windowResize) => (windowResize.height || window.innerHeight * vh) / 100

export const myDebounce = (fn, ms) => {
  let timeout
  return function () {
    const callback = () => fn.apply(this, arguments)
    clearTimeout(timeout)
    timeout = setTimeout(callback, ms)
  }
}

export function myThrottle(func, ms) {
  let isThrottled = false
  let savedArgs
  let savedThis

  function wrapper() {
    if (isThrottled) {
      savedArgs = arguments
      savedThis = this
      return
    }

    func.apply(this, arguments)

    isThrottled = true

    setTimeout(function () {
      isThrottled = false
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs)
        savedArgs = savedThis = null
      }
    }, ms)
  }

  return wrapper
}
