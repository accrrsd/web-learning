import './header.css'
const muffalo =
  'https://rimworldwiki.com/images/thumb/a/a0/Animal_Muffalo_side.png/250px-Animal_Muffalo_side.png'
const pawn = 'https://rimworldwiki.com/images/1/17/Colonists_preview.png'

export const Header = () => {
  return (
    <div className="wrapper">
      <ul className="links">
        <li className="linkWrapper">
          <a className="link" href="/#">
            <span className="linkName">Pawn</span>
            <img className="linkImage pawnImage" src={pawn} alt="" />
          </a>
        </li>
        <li className="linkWrapper">
          <a className="link" href="/#">
            <span className="linkName">Animal</span>
            <img className="linkImage animalImage" src={muffalo} alt="" />
          </a>
        </li>
      </ul>
    </div>
  )
}
