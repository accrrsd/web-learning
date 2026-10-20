import { useThrottleCallback } from '@react-hook/throttle'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Scrollbar from 'smooth-scrollbar'
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll'
import { changeScroll } from '../slices/slices'

const useScrollInit = (ref, options) => {
  const [scrollElem, setScrollElem] = useState(false)
  Scrollbar.use(OverscrollPlugin)
  useEffect(() => {
    const currentRef = ref.current
    const scrollExm = Scrollbar.init(currentRef, options)
    setScrollElem(scrollExm)
    return () => scrollExm.destroy()
    // eslint-disable-next-line
  }, [ref])
  return scrollElem
}

export const useScroll = (ref, options, name, fps) => {
  const scrollElem = useScrollInit(ref, options)
  useScrollListener(scrollElem, name, fps)
  return scrollElem
}

const useScrollListener = (scrollElem, scrollName, fps) => {
  const dispatch = useDispatch()
  const dispatcher = () =>
    scrollElem && dispatch(changeScroll({ name: scrollName, value: scrollElem.scrollTop }))
  const callback = useThrottleCallback(dispatcher, fps)
  scrollElem && scrollElem.addListener(callback)
}

//? Более наглядный пример работы
// export const useScrollListener = (scrollElem, scrollName, fps) => {
//   const [value, setValue] = useThrottle(0, fps)
//   const dispatch = useDispatch()
//   useEffect(() => {
//     scrollElem && dispatch(changeScroll({ name: scrollName, value: value }))
//     // eslint-disable-next-line
//   }, [value, dispatch])
//   scrollElem && scrollElem.addListener(() => setValue(scrollElem.scrollTop))
// }
