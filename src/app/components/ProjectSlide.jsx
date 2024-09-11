import Image from 'next/image';

export default function ProjectSlide({ image, link, title }) {


  return (
    <div className='project-slide'>
      <a href={link} target='_blank' rel='noopener noreferrer' className='project-image-container' >
        <Image src={image} alt={title} className='project-image' height={1000} width={1000} />
      </a>
    </div>
  )
}