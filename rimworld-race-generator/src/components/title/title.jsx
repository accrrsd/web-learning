import { motion } from 'framer-motion'
import { useSelector } from 'react-redux/es/exports'
import { changeSpecificKey } from '../../slices/slices'
import { useDispatch } from 'react-redux/es/hooks/useDispatch'
import { useEffect } from 'react'

import shipImg from '../../images/ship.png'
import planetFirst from '../../images/first planet.png'
import planetSecond from '../../images/second planet.png'
import planetThird from '../../images/third planet.png'

import style from './title.module.css'
export const Title = ({ changeNum = 50 }) => {
  const dispatch = useDispatch()
  let changeBool = useSelector((store) => store.scrollReducer.containerScroll.bool) || false
  let mousePos = useSelector((store) => store.mouseReducer.firstPageMouse.pos)

  const speeds = {
    //Больше число - сильнее движении
    ship: -5,
    firstP: 9,
    secondP: 6,
    thirdP: 3,
  }

  const multiple = {
    // Больше число - меньше зависимость
    ship: {
      x: 100,
      y: 200,
    },
    firstP: {
      x: 100,
      y: 200,
    },
    secondP: {
      x: 100,
      y: 200,
    },
    thirdP: {
      x: 100,
      y: 200,
    },
  }

  useEffect(() => {
    dispatch(changeSpecificKey({ name: 'containerScroll', key: 'changeNum', value: changeNum }))
  }, [changeNum, dispatch])

  const titleTextAnimation = {
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        duration: 1,
      },
    },
  }

  const titleImageAnimation = {
    overlay: {
      opacity: 0.4,
      transition: {
        duration: 1,
      },
    },
    noOverlay: {
      opacity: 0,
      transition: {
        duration: 1,
      },
    },
  }

  return (
    <>
      <div className={style.title__image}>
        <motion.img
          className={style.ship}
          src={shipImg}
          animate={{
            x: (window.innerWidth - mousePos.x * speeds.ship) / multiple.ship.x,
            y: (window.innerHeight - mousePos.y * speeds.ship) / multiple.ship.y,
            scale: 1 - mousePos.x / 1000 / 20,
          }}
        />
        <motion.img
          className={style.firstPlanet}
          src={planetFirst}
          animate={{
            x: (window.innerWidth - mousePos.x * speeds.firstP) / multiple.firstP.x,
            y: (window.innerHeight - mousePos.y * speeds.firstP) / multiple.firstP.y,
          }}
        />
        <motion.img
          className={style.secondPlanet}
          src={planetSecond}
          animate={{
            x: (window.innerWidth - mousePos.x * speeds.secondP) / multiple.secondP.x,
            y: (window.innerHeight - mousePos.y * speeds.secondP) / multiple.secondP.y,
          }}
        />
        <motion.img
          className={style.thirdPlanet}
          src={planetThird}
          animate={{
            x: (window.innerWidth - mousePos.x * speeds.thirdP) / multiple.thirdP.x,
            y: (window.innerHeight - mousePos.y * speeds.thirdP) / multiple.thirdP.y,
          }}
        />
        <motion.div
          variants={titleImageAnimation}
          animate={changeBool ? 'noOverlay' : 'overlay'}
          initial="overlay"
          className={style.title__image_overlay}
        ></motion.div>
        <motion.div
          variants={titleTextAnimation}
          animate={changeBool ? 'hidden' : 'visible'}
          className={style.title__content}
        >
          <h1 className={style.title}>Создавать расы еще не было так просто!</h1>
          <small className={style.subtitle}>Скроль вниз ↓</small>
        </motion.div>
      </div>
      <TitleParallax />
    </>
  )
}

const TitleParallax = (ref) => {
  // const getMouse = (e) => console.log(e)
  // const mouseHandler = (e) => throttle(getMouse, 500)
  // useEffect(() => {
  //   document.addEventListener('mousemove', mouseHandler)

  //   return () => document.removeEventListener('mousemove', mouseHandler)
  // }, [])
  return <motion.div></motion.div>
}
