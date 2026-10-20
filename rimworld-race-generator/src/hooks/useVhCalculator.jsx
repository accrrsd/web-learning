import { pxToVh } from '../utils/utils'
import { useState, useEffect } from 'react'
import useWindowSize from './useWindowSize'
export const useVhCalculator = (elementRef, neededHeightPercentVH, containerHeightVH = 100) => {
  const windowResize = useWindowSize()
  // Вычисляем нижний отступ по процентной высоте контейнера в VH
  const [Result, setResult] = useState()
  useEffect(() => {
    const elementHeight = pxToVh(elementRef.current.getBoundingClientRect().height, windowResize)
    setResult(neededHeightPercentVH - elementHeight)
  }, [elementRef, neededHeightPercentVH, containerHeightVH, windowResize])
  return Result
}
