import { memo, useState } from 'react'
import { motion } from 'framer-motion'
import style from './side-menu.module.css'

const mainColor = 'rgba(190,190,190)'
const activeColor = 'rgba(250,0,250)'
const changeTabDuration = 0.5
// const backgroundColor = '#171b36'
// const transparentColor = 'rgba(0,0,0,0)'

/**
 *
 * @param {*} items Передаем сюда массив информации в виде объектов для дочерних элементов
 */
export const SideMenu = memo(({ items }) => {
  const [active, setActive] = useState(0)
  return (
    <div className={style.menuWrapper}>
      {items.map((item, index) => (
        <MenuItem
          value={item.value}
          onClick={() => setActive(index)}
          isSelected={active === index}
          key={item.value}
          border={index === 0 ? 'first' : index === items.length - 1 ? 'last' : 'mid'}
        />
      ))}
    </div>
  )
})

export const MenuItem = memo(
  ({ value, isSelected, onClick, border }) => {
    return (
      <motion.div
        className={style.item}
        initial={{ color: mainColor }}
        animate={{ color: isSelected ? activeColor : mainColor }}
        transition={{ duration: changeTabDuration }}
        onClick={onClick}
      >
        {isSelected && <ActiveBack border={border} />}
        {value}
      </motion.div>
    )
  },
  (prevProps, nextProps) => prevProps.isSelected === nextProps.isSelected
)

const ActiveBack = ({ border }) => (
  <motion.div
    className={style.active}
    animate={border}
    transition={{ duration: changeTabDuration }}
    layoutId="activeItem"
    variants={{
      first: {
        borderTopLeftRadius: 0,
        borderTopRightRadius: 20,
        borderLeft: 0,
      },
      mid: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
      },
      last: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 0,
        borderRight: 0,
      },
    }}
  />
)
