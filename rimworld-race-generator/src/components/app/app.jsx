import style from './app.module.css'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Title } from '../title/title'
import { Content } from '../content/content'
import { FirstPage } from '../pages/first/first-page'

export default function App() {
  return (
    <div className={style.app}>
      <FirstPage>
        <Title changeNum={60} />
        <Content />
      </FirstPage>
    </div>
  )
}
