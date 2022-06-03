import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className='main-menu'>
      <ul className='menu'>
      <li className='className="menu-item menu-item--expanded"'>
          <span className="nolink">Styleguide</span>
          <ul className='menu'>
            <li><Link href={'/styleguide/global'}><a>Global</a></Link></li>
            <li><Link href={'/styleguide/form'}><a>Form</a></Link></li>
          </ul>
        </li>
        <li><Link href={'/home'}><a>Home</a></Link></li>
        <li><Link href={'/landing'}><a>Landing</a></Link></li>
        <li><Link href={'/components'}><a>Components</a></Link></li>
      </ul>
    </nav>
  )
}

