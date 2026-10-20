import { useRef } from 'react'
import { SideMenu } from '../side-menu/side-menu'
import { MainContent } from './main-content/main-content'

import style from './content.module.css'
import { useVhCalculator } from '../../hooks/useVhCalculator'
import { useScroll } from '../../hooks/useScroll'
export const Content = () => {
  const pageWrapperRef = useRef()
  const containerRefDev = useRef()
  const containerOffset = useVhCalculator(containerRefDev, 75)
  useScroll(
    pageWrapperRef,
    {
      damping: 0.07,
      plugins: { overscroll: { damping: 0.2, maxOverscroll: 200 } },
    },
    'containerScroll',
    5
  )

  return (
    <div className={style.page} ref={pageWrapperRef}>
      <div className={style.contentLimiter}>
        <div
          className={style.contentWrapper}
          style={{ marginBottom: `${containerOffset}vh` }}
          ref={containerRefDev}
        >
          <div className={style.content}>
            <SideMenu
              items={[
                { value: 'Main' },
                { value: 'General' },
                { value: 'Draw' },
                { value: 'Stats' },
                { value: 'Life' },
                { value: 'Other' },
              ]}
            />
            <MainContent />
          </div>
        </div>
      </div>
    </div>
  )
}
