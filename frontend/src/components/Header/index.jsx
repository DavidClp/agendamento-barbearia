import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import './header.scss'
import {logo} from '../../assets'

import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'

const Header = () => {

  const [active, setActive] = useState('navBar')

  /* link ativo */
  const [linkActive, setLinkActive] = useState('home')
  const handleItemActive = (item) =>{
    setLinkActive(item)
  }

  /* Link ativo quando rola a tela */
  useEffect(() =>{
    const handleScroll = () => {
      const sections = document.querySelectorAll('section')
      const scrollPosition = document.documentElement.scrollTop

      sections.forEach((section) =>{
        const sectionTop = section.offsetTop - 200
        const sectionBottom = sectionTop + section.offsetHeight
        if(scrollPosition >= sectionTop && scrollPosition < sectionBottom){
          setLinkActive(`${section.id}`)
        }
      })
    }

    window.addEventListener('scroll', handleScroll)

    return () =>{
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  
  /* mostrar nav bar */
  const showNav = () =>{
    setActive('navBar activeNavbar teste')
  }

  /* tirar nav bar */
  const removeNavbar = () =>{
    setActive('navBar teste')
  }

  return (
    <header>
      <div className='divLogo'>
        <Link to="./" className='logo'>
          <img src={logo} alt="logo" />
          MR. BARBA
        </Link>
      </div>

      <div className={active}>
          <div onClick={removeNavbar} className="closeNavbar">
            <AiFillCloseCircle className="icon"/>
          </div>

          <ul className='navLists'>
            <li className='navItem'>
              <a href="#home" className={`navLink ${linkActive === 'home' ? 'active' : ''}`} onClick={() => handleItemActive('home')}>Home</a>
            </li>

            <li className='navItem'>
              <a href="#about" className={`navLink ${linkActive === 'about' ? 'active' : ''}`} onClick={() => handleItemActive('about')}>Sobre Nós</a>
            </li>

            <li className='navItem'>
              <a href="#services" className={`navLink ${linkActive === 'services' ? 'active' : ''}`} onClick={() => handleItemActive('services')}>Serviços</a>
            </li>

            <li className='navItem'>
              <a href="#location" className={`navLink ${linkActive === 'location' ? 'active' : ''}`} onClick={() => handleItemActive('location')}>Localição</a>
            </li>

            <li className='navItem'>
              <a href="#contact" className={`navLink ${linkActive === 'contact' ? 'active' : ''}`} onClick={() => handleItemActive('contact')}>Contato</a>
            </li>

            <Link to={'/scheduling'} className='btnSchedule'>Agende!!!</Link>
          </ul>
          
          
      </div>

      <div onClick={showNav} className="toggleNavbar">
          <TbGridDots className="icon"/>
      </div>


    </header>
  )
}

export default Header