'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/navigation';


export default function HomeHero() {
  const router = useRouter();

  const handleLinkedIn = () => {
    window.open('https://www.linkedin.com/in/tylertowery/', '_blank')
  }

  const handleGithub = () => {
    window.open('https://github.com/tylertowery', '_blank')
  }

  const handleResume = () => {
    window.open('https://tylers-portfolio-lemon.vercel.app/Resume', '_blank');
  }
  // TODO:
  // title is not matching and throwing error on rendering
  return (
    <section id='home' className='home-hero'>
      <div className='hero-content'>
        <h1 className='hero-heading'>HEY, I&apos;M TYLER TOWERY</h1>
        <p className='hero-description'>A Full Stack Software Engineer building out digital experiences from your ideas to reality</p>
        <a href='#projects' className='hero-button'>PROJECTS</a>
      </div>
      <div className='scroll'>
        <div className='mouse' />
      </div>
      <div className='socials'>
        <div className='social-icon-wrapper' data-title='LinkedIn'>
          <FontAwesomeIcon onClick={handleLinkedIn} icon={faLinkedin} className='social-icon linked-in' size='4x' />
        </div>
        <div className='social-icon-wrapper' data-title='GitHub'>
          <FontAwesomeIcon onClick={handleGithub} icon={faSquareGithub} className='social-icon github' size='4x' />
        </div>
        <div className='social-icon-wrapper' data-title='Resume'>
          <FontAwesomeIcon onClick={handleResume} icon={faBookOpen} className='social-icon resume' size='3x' />
        </div>
      </div>
    </section>
  )
}