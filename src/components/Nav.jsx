import { NavLink } from 'react-router-dom'

export default function Nav() {
  return (
    <section className="filters mb-5">
      <ul className="nav nav-tabs justify-content-center">
        <li className="nav-item">
          <NavLink to="/" end className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>
            Projects
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/design" className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>
            Design
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>
            About Me
          </NavLink>
        </li>
      </ul>
    </section>
  )
}
