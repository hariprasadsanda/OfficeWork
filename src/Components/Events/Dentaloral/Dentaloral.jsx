import React from 'react'
import './Dantaloral.css'
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import RoomRoundedIcon from '@mui/icons-material/RoomRounded';
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';
import Button from '@mui/material/Button';
import picture from '../../../Assets/Oral Health.webp'
import EventFaqs from '../EventFaqs/EventFaqs';
import Media from '../../Media/Media';
import Contact from '../../Contact/Contact';
import hotel from '../../../Assets/Carosal1.png'
import Registration from '../Registration/Registration';
const Dentaloral = () => {
  return (
    <div>
      <div className='top-back'>
        <div className='shadow'>
          <h1 className='top-heading'>Euro Congress and Expo on Dental and Oral Health</h1>
          <h3 className='top-para'>Theme – New Challenges & Current Trends in Dental and Oral Health </h3>
          <div className='logo-container'>
          <h3 className='date'><CalendarMonthRoundedIcon sx={{color:"red",fontSize:'50px'}}/><br/> Date:<br/>
          August 18-19, 2025</h3>
          <h3 className='venue'><RoomRoundedIcon  sx={{color:"red",fontSize:'50px'}}/><br/> Venue:<br/>
          London, UK</h3>
          </div>
          <div>
            <ul className='list'>
              <li> <ArrowCircleRightRoundedIcon sx={{color:'red'}}/>Abstract Submission Open Started</li>
              <li>  <ArrowCircleRightRoundedIcon sx={{color:'red'}}/> Early Bird Registration Start: March 01, 2024</li>
            </ul>
          </div>
          <div className='button-conatiner'>
                <Button variant="contained" sx={{margin:'5px',marginLeft:'80px',height:'60px',width:'200px'
                }}>Go to register <br/> Now</Button>
                <Button variant="contained" sx={{margin:'5px',width:'200px'
                }}>Download <br/>Brochure</Button>
                <Button variant="contained" sx={{margin:'5px',width:'200px'
                }}>Abstract <br/> Submission</Button>
                <Button variant="contained" sx={{margin:'5px',width:'200px'
                }}>Tentative <br/> Program</Button>
          </div>
        </div>
      </div>
      <div className='mid-cont'>
        <div className='mid-text'>
        <h1>Dental and Oral Health Conference</h1>
        <p><span className='class-span'>The Euro Congress and Exhibition on Dental Oral Health Conference,</span> occurring on <span className='class-span'> August 18-19, 2025 </span>, in London, UK,  A Dental Oral Health Conference is a specialized event that brings together professionals in the field of dentistry and oral health. The <span className='class-span'>Dentistry Meetings </span> serve as a platform for sharing the latest research, advancements, and best practices in dental care.<br/> <br/>

Dental Oral Health Conference is a recognized assembly that brings dental experts, scientists, and pioneers from the business. This gathering fills in as an outstanding scene to dig into the most recent improvements in dental and oral wellbeing, highlighting dynamic meetings that address subjects like preventive dentistry, state-of-the-art treatment choices, and new mechanical progressions. Whether you are an accomplished specialist or a rising proficient, this occasion is intended to give a significant encounter, engaging members with the information and experiences important to upgrade dental and oral well-being. Recovery the date for August 18-19, 2025, and go along with us in <span className='class-span'>London</span> for an illuminating excursion into the fate of <span className='class-span'>dental development </span>.</p>
        </div>
        <div className='mid-image-cont'>
          <img src={picture} alt='loading' className='mid-image'/>
        </div>
      </div>
      <div className='scientific'>
        <h1>Scientific Session</h1>
        <h3>Below are the scientific sessions of the conference</h3>
        <div className='scientific-lists'>
          <div>
              <ul className='unorder'>
                  <li>Cosmetic Dentistry</li>
                  <li>Implants and Prosthesis</li>
                  <li>Orthodontics & Endodontics</li>
                  <li>Restorative Dentistry</li>
                  <li>Advanced Orthodontic Techniques</li>

                </ul>
          </div>
            <div>
              <ul className='unorder'>
                <li>Prosthodontics & Periodontics</li>
                <li>Conservative Dentistry</li>
                <li>Dental Sleep Medicine</li>
                <li>Digital Dentistry and Imaging</li>
                <li>Prosthodontics And Implantology</li>

              </ul>
            </div>
            

        </div>
        <Button variant="contained" sx={{margin:'5px',width:'200px'
                }}>View All Scientific Sessions</Button>

      </div>
      <div>
        <EventFaqs/>
      </div>
      <div className='venue-cont'>
        <div className='venue-back'>
          <div>
            <h1 className='venue-heading'>Venue Attraction</h1>
            <h3 className='venue-heading'>Hotel Services & Amenities</h3>
              <div className='venue-flex'>
                <div>
                  <ul className='venue-unorder'>
                    <li>Free Wi-Fi</li>
                    <li>Spa & Wellness Center</li>
                    <li>24/7 Customer Service</li>
                    <li>Concierge Service</li>
                    <li>Private Dining Rooms</li>
                  </ul>
                </div>
                <div>
                  <ul className='venue-unorder1'>
                    <li>24/7 Reception Service</li>
                    <li>Children's Area</li>
                    <li>Concierge Service</li>
                    <li>Private Dining Rooms</li>
                    <li>Private Dining Rooms</li>
                  </ul>
                </div>
              </div>
         </div>
          <div>
            <img src={hotel} alt='loading' className='hotel-img'/>
          </div>
        </div>
      </div>
      <Registration/>
      <Media/>
      <Contact/>
     
      

    </div>
  )
}

export default Dentaloral
