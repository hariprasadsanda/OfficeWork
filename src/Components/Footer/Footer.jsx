import React from 'react'
import '../Footer/Footer.css'

const Footer = () => {
  return (
    <div>
     <div className="foot-container">
        <div>
          <img src='https://oralhealthevents.com/wp-content/uploads/2024/07/Dental-white-1.png' alt='Logo' className='foot-image'/>
          <p className='foot-para foot-color'>ecosystem that brings the Scholars, people in the scientific study & research, knowledge group of the society, the students, learners and more on a common ground – to share their knowledge, on the scientific progress that brings along the benefits to humanity and to our existence itself.</p>
        </div>
            <div className='foot-useful'>
              <h2 className='foot-color'>USEFUL LINKS</h2>
              <ul className='foot-list'>
                <li className='foot-linked '><a href='#' className='foot-color'>Home</a></li>
                <li className='foot-linked '><a href='#' className='foot-color'>Up Coming Events</a></li>
                <li className='foot-linked '><a href='#' className='foot-color'>Venue</a></li>
                <li className='foot-linked '><a href='#' className='foot-color'>Speaker Guidelines</a></li>
                <li className='foot-linked '><a href='#' className='foot-color'>Contact</a></li>
              </ul>
            </div>
        <div className='foot-contact'>
          <h2 className='foot-color'>CONTACT INFO</h2>
          <h4 className='foot-color'>+1 630 768 1199</h4>
          <h4 className='foot-color'>james.charles@stripeconferences.com</h4>
          <h4 className='foot-color'>16192 ,Coastal Highway Lewes, Delaware, USA 19958</h4>
        </div>
     </div>
             <div className='foot-copy'>
                <p className='foot-color'> Privacy Policy | Terms and Conditions | Cancellation Policy </p>
                <p className='foot-color'>Copyright 2024 © Microbiology Events (Stripe Conferences)</p>
              </div>
    </div>
  )
}

export default Footer
