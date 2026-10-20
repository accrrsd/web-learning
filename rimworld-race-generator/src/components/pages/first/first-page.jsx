import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { changeMousePos } from '../../../slices/slices'
import useMouse from '@react-hook/mouse-position'
import style from './first-page.module.css'

export const FirstPage = ({ children }) => {
  const ref = useRef(null)
  const dispatch = useDispatch()

  const mouse = useMouse(ref, { fps: 15 })
  useEffect(() => {
    dispatch(changeMousePos({ name: 'firstPageMouse', x: mouse.x, y: mouse.y }))
  }, [mouse, dispatch])

  return (
    <motion.div ref={ref} className={style.page}>
      {children}
    </motion.div>
  )
}

// export const FirstPage = ({ children }) => {
//   const [mousePos, setMousePos] = useState()
//   const dispatch = useDispatch()

//   // ! Все упирается в троттл
//   const updatePos = () =>
//     dispatch(changeMousePos({ name: 'firstPageMouse', mousePos:mousePos }))
//   const handlerMouseMove = (e) => {
//     setMousePos({ x: e.pageX, y: e.pageY })
//     throttle(updatePos, 200)
//   }
//   return (
//     <motion.div onMouseMove={handlerMouseMove} className={style.page}>
//       {children}
//     </motion.div>
//   )
// }
