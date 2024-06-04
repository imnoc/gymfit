import React, { useState } from 'react'
import './Header.css'
import Logo from '../../assets/logo.png'
import Bars from '../../assets/bars.png'
import { Link } from 'react-scroll'

const Header = () => {


  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpend, setOpenMenu] = useState(false)
  return (

    <div className="header">
      <img src={Logo} alt="" className='logo' />
      {(menuOpend === false && mobile === true) ? (
        <div
          style={{ backgroundColor: 'var(--appColor)', padding: '0.5rem', borderRadius: '5px' }}
          onClick={() => setOpenMenu(true)}
        >
          <img src={Bars} alt="" style={{ width: '1.5rem', height: '1.5rem' }} />
        </div>
      ) : (
        <ul className='header-menu'>
          <li >
            <Link onClick={() => setOpenMenu(false)}
              activeClass='active'
              to='header'
              span={true}
              smooth={true}>Home</Link>
          </li>
          <li >
            <Link onClick={() => setOpenMenu(false)}
              to='programs'
              span={true}
              smooth={true}>Programs</Link>
          </li>
          <li >
            <Link onClick={() => setOpenMenu(false)}
              to='reasons'
              span={true}
              smooth={true}>Why us</Link>
          </li>
          <li >
            <Link onClick={() => setOpenMenu(false)}
              to='plans'
              span={true}
              smooth={true}>Plans</Link>
          </li>
          <li ><Link
            onClick={() => setOpenMenu(false)}
            to='testimonials'
            span={true}
            smooth={true}
          >Testimonials</Link></li>
        </ul>
      )}

    </div>


  )
}

export default Header
