import './app.css'
import { motion, useViewportScroll } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Title } from '../title/title'
import { SideMenu } from '../side-menu/side-menu'

export default function App() {
  const [prevScroll, setPrevScroll] = useState(0)
  const { scrollY } = useViewportScroll()

  const percentOf = (x, y) => Math.round((x / y) * 100)

  const difByValue = (scroll, prevScroll, difValue) => Math.abs(scroll - prevScroll) > difValue

  const fpsDefine = () =>
    difByValue(scrollY.current, prevScroll, 100) && setPrevScroll(scrollY.current)

  useEffect(() => {
    const handleScroll = () => fpsDefine()

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
    // eslint-disable-next-line
  }, [])

  return (
    <div className="app">
      <Title scroll={percentOf(scrollY.current, window.innerHeight)} breakPercent={50} />
      <div className="page">
        <div className="contentWrapper">
          <div className="content">
            {/* <SideMenu items={[{ value: 'hello' }, { value: 'hello2' }]} /> */}
            <SideMenu />
            <p className="test">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae harum,
              exercitationem ratione nobis quae tempora temporibus cum sequi, quis, ex molestiae
              cupiditate repellat nam? Sapiente nostrum dignissimos voluptatem quam odio? Ab, dolore
              culpa. Omnis doloribus pariatur vel reprehenderit nam eveniet voluptatem repudiandae
              ratione maiores a cum sint amet debitis recusandae optio cupiditate laboriosam, sit
              perspiciatis error? Esse quae aperiam hic? Suscipit, error! Modi dolores mollitia nisi
              ad quasi tempora consequatur quia consequuntur. Non, expedita laudantium voluptate
              praesentium laborum dolorum, voluptatum incidunt officiis eum nulla vero alias magni
              repellat obcaecati fugit. Perspiciatis quia ullam quae esse dolorum odio blanditiis,
              consequuntur obcaecati sed provident reiciendis ab culpa expedita quisquam fugit
              quibusdam ea facilis qui totam? Error nam sunt, reprehenderit commodi eum expedita?
              Asperiores, nulla a? Vero culpa vitae quibusdam eligendi. Reprehenderit laudantium
              culpa aperiam accusamus soluta cumque quis maxime accusantium facilis odit. Minus nemo
              accusamus ab earum nesciunt aut provident, totam sit. Id explicabo voluptas itaque
              sunt amet, animi provident quis quaerat enim iure pariatur eligendi consequatur
              temporibus, dignissimos fugit. Eum voluptatum, maxime itaque reiciendis doloremque
              ipsum saepe laudantium recusandae! Nulla, animi? Fugit dignissimos obcaecati eligendi
              recusandae aut omnis, alias in sunt, molestias asperiores facilis repellendus at dicta
              iste praesentium deserunt. Eveniet ratione accusantium rem sequi error molestiae hic
              asperiores odit placeat. Quisquam, ipsam? Voluptatibus, error. Officia, odio minus
              facilis eveniet soluta, dicta illum minima maiores, quis amet doloremque? Quis ea ut
              exercitationem minus voluptatum, explicabo officiis unde eius nostrum mollitia?
              Deleniti? Adipisci possimus praesentium voluptates necessitatibus? Ab ullam
              perspiciatis debitis necessitatibus! Officia, maxime sunt consequatur velit debitis
              facere. Vel, iusto ut. Enim quod sequi non odio fuga maxime iusto, facere ipsam! Ex
              inventore voluptatem consequatur. Officiis repellat corrupti sint nobis eius delectus
              non ipsum. Perferendis magnam molestiae dignissimos nihil eveniet repudiandae amet
              nulla, nemo sequi itaque dolores facilis dolor provident ratione!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
