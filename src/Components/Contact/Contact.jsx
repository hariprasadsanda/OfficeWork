import React from 'react'
import '../Contact/Contact.css'
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import Footer from '../Footer/Footer';


const Contact = () => {
  return (
    <div>
        <div className='contact-container'>
          <h1 className='contact-heading'>Contact us</h1>
          <h4 className='contact-para'>To learn more about our conferences and events, please get in touch with us. Join our extensive network of scientists, professional experts, and research scholars to stay informed and connected.</h4>
            <div className='contact-sub'>
              <div className='address-card'>
                      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                           <IoLocationSharp style={{ fontSize: '40px', color: '#154747' }} />
                       </div>
                <h2 className='address-heading'>Address</h2>
                <h3 className='address-para'>16192 Coastal Highway Lewes, Delaware, USA 19958</h3>
              </div>
              <div className='phone-card'>  
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        < FaPhoneAlt style={{ fontSize: '40px', color: '#154747' }} />
                        </div>
                <h2 className='phone-heading'>Phone number</h2>
                <h3 className='phone-para'>+1 630 768 1199</h3>
              </div>
              <div className='email-card'>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                           <MdOutlineEmail style={{ fontSize: '40px', color: '#154747' }} />
                        </div>x
                <h2 className='email-heading'>E-mail address</h2>
                <h3 className='email-para'>support@stripeconferences.com</h3>
              </div>
            </div>

        </div>
        <div className='map-container'>
          <div className='form-container'>
            <h1 className='form-heading'>Contact Us</h1>
            <label for='name'>Your Name</label><br/>
            <input type="text" id='name' className='form-name'/><br/>
            <label for='name'>Your Email</label><br/>
            <input type="text" id='name' className='form-email'/><br />
            <label for='name'>Your Message (Optional)</label><br/>
            <input type="text" id='name' className='form-message'/><br />
            <button className='form-button'>SUBMIT</button>
          </div>
          <div className='map-cont'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15150.270942489777!2d80.22797212948343!3d18.321365893860534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a33a502250e187b%3A0x9562ef639facd5d4!2sMedaram%2C%20Telangana%20506344!5e0!3m2!1sen!2sin!4v1728038528837!5m2!1sen!2sin" width="600" height="450" style={{border:"0px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
        
        <Footer/>
  
      
    </div>
  )
}

export default Contact
