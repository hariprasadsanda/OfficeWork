import React from 'react'
import './Home.css'
import Media from '../Media/Media'
import Faqs from '../Faqs/Faqs'
import Footer from '../Footer/Footer'
// import Faqs from './Faqs/Faqs';
import {paraData} from '../Data'
const Home = () => {
  return (
    <div>
      <div className='back'>
        <h1 className='main-heading'> Dental and Oral Health Events 2025</h1>
        <h4 className='tag-line'>“New Challenges & Current Trends in Dental and Oral Health”</h4>
        <button className='cont-button'>Contact Us</button>
      </div>
      <div className="about">
        <div className="about-image">
          <img src='https://i.pinimg.com/564x/11/fe/5e/11fe5ece1b8beb1ebdf56b52f95fa2eb.jpg' alt='Loading'/>
        </div>
        <div className="about-para">
          <h1 className='about-heading'>Dental and Oral Health Events 2025</h1>
          <div>
        {paraData.map((item)=>{
          return(
            <p className='about-text'>{item.text}</p>
          )
        })}
      </div>
        </div>
      </div>
      <h1 className='upcomming-heading'>Upcoming International Conferences</h1>
      <div className="upcomming">
          <div className='upcomming-card'>
            <img src='https://microbiologyevents.net/wp-content/uploads/2024/09/Add-a-heading-1.png'alt='Loading' className='upcomming-image'/>
            <h4>Microbiology and Immunology</h4>
            <h4>July 07-08, 2025 | Zurich, Swizerland</h4>
            <p className='up-para'>Microbiology studies microorganisms; immunology focuses on immune system and its responses.</p>
            <button className='upcomming-btn' >Register Now</button>
          </div>
          <div className='upcomming-card'>
            <img src='https://microbiologyevents.net/wp-content/uploads/2024/09/Add-a-heading-2.png'alt='Loading' className='upcomming-image'/>
            <h4>Infectious Diseases and Microbiology</h4>
            <h4>August 11-12, 2025 | Toranto, Canada</h4>
            <p className='up-para'>Infectious diseases involve pathogens causing illness; microbiology studies these microorganisms.</p>
            <button className='upcomming-btn'>Register Now</button>
          </div>
          <div className='upcomming-card'>
            <img src='https://microbiologyevents.net/wp-content/uploads/2024/09/Add-a-heading-3.png'alt='Loading' className='upcomming-image'/>
            <h4>Pharmaceutical Microbiology</h4>
            <h4>October 06-07, 2025 | Paris, France</h4>
            <p className='up-para'>Pharmaceutical microbiology ensures drug safety by studying microorganisms in drug production and storage.</p>
            <button className='upcomming-btn'>Register Now</button>
          </div>
      </div>
      <div className="upcomming2">
            <div className='upcomming-card2' >
                <img src='https://microbiologyevents.net/wp-content/uploads/2024/09/Add-a-heading-4.png'alt='Loading' className='upcomming-image'/>
                <h4>Bioinformatics in Microbiology</h4>
                <h4>November 24-25, 2025 | Paris, France</h4>
                <p className='up-para'>Bioinformatics in microbiology analyzes microbial data, aiding in genome sequencing and pathogen identification.</p>
                <button className='upcomming-btn'>Register Now</button> 
            </div>
            <div className='upcomming-card2'>
              <img src='https://microbiologyevents.net/wp-content/uploads/2024/09/Add-a-heading-5.png'alt='Loading' className='upcomming-image'/>
              <h4>Environmental Microbiology & Microbial Bioplastics</h4>
              <h4>September 15-16, 2025 | Rome, Italy</h4>
              <p className='up-para'>Environmental microbiology studies microbes in ecosystems; microbial bioplastics use microbes for eco-friendly.</p>
              <button className='upcomming-btn'>Register Now</button> 
          </div>
      </div>
      <Media />
      <Faqs />
      <Footer/>

      <div>
        {paraData.map((item)=>{
          return(
            <p>{item.text}</p>
          )
        })}
      </div>


    </div>
  )
}

export default Home
