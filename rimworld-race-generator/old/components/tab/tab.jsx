import './tab.css'
export const Tab = ({ onClick, text, active }) => {
  return (
    <button onClick={onClick} className="tab">
      <span className={`tabName ${active ? 'active' : ''}`}>{text}</span>
    </button>
  )
}
