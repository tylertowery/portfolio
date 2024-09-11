'use client'

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronLeft, faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';
import ProjectSlide from './ProjectSlide';

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const projects = [
    {
      title: 'Total Party Wipeboard',
      description: 'A website that allows a DM to keep track of all of their DnD parties and adventures!',
      link: 'https://total-party-wipeboard.vercel.app/',
      image: '/total-party-wipeboard-homepage.png',
    },
    {
      title: 'Volleyball Rotations',
      description: 'A web application that allows a user to create and edit volleyball lineups to visualize their rotations.',
      link: 'https://volleyball-rotations.vercel.app/',
      image: '/volleyball-rotations-layout.png',
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < projects.length - 1 ? prevIndex + 1 : 0
    );
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : projects.length - 1
    );
  }

  return (
    <div className='carousel-container'>
      <div className='project-heading'>
        <h4 className='project-title'>{projects[currentIndex]?.title}</h4>
        <p className='project-description'>{projects[currentIndex]?.description}</p>
      </div>
      <div className='arrow left-arrow' onClick={prevSlide}>
        <FontAwesomeIcon icon={faCircleChevronLeft} size='2xl' />
      </div>
      <div className='browser-container'>
        <div className='browser-header'>
          <div className='browser-buttons'>
            <span className='button close'></span>
            <span className='button minimize'></span>
            <span className='button maximize'></span>
          </div>
          <div className='browser-address-bar'>
            <span className='browser-url'>{projects[currentIndex]?.link}</span>
          </div>
          <div className='browser-content'>
            < ProjectSlide image={projects[currentIndex]?.image} link={projects[currentIndex]?.link} title={projects[currentIndex]?.title} />
          </div>
        </div>
      </div>
      <div className='arrow right-arrow' onClick={nextSlide}>
        <FontAwesomeIcon icon={faCircleChevronRight} size='2xl' />
      </div>
    </div>
  )
}