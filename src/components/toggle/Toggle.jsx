import './toggle.css'

export default function Toggle({isToggled, onToggle}) {
  return (
    <label className='toggle'>
        <input type="checkbox" checked={isToggled} onChange={onToggle}/>
        <span className="slider"></span>
    </label>
  )
}
