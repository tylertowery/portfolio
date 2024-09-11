'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

export default function NavBar() {
  return (
    <div className='header'>
      <div className='header-content'>
        <div className='logo-container'>
          <div className='header-logo'>
            <Image src='/tyler-picture.png' alt='Tyler Towery image' className='header-picture' width={75} height={75} />
          </div>
          <p className='header-name'>TYLER TOWERY</p>
        </div>
        <nav className='links-container'>
          <ul>
            <li><a href='#home' className='header-link'>HOME</a></li>
            <li><a href='#about' className='header-link'>ABOUT</a></li>
            <li><a href='#projects' className='header-link'>PROJECTS</a></li>
            <li><a href='#contact' className='header-link contact-link'>CONTACT</a></li>
          </ul>
        </nav>
      </div>
    </div>
  )

}