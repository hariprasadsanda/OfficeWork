
import React from 'react'
import '../Registration/Registration.css'
import MicIcon from '@mui/icons-material/Mic';
import SchoolIcon from '@mui/icons-material/School';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';

const Registration = () => {
  return (
    <div>
      <div className='registartion-text'>
        <h1>Registration</h1>
        <h4>Early bird registration available</h4>
      </div>
      <div className='white-flex'>
        <div className='white1'>
            <MicIcon style={{ fontSize: 90,backgroundColor:'#13214a',color:'white',borderRadius:'50px',textAlign:'center',marginTop:'9px'}} />
            <h3>Speaker Registration</h3>
            <p>Oral Presentations</p>
            <h3>$799</h3>
            <button className='white-button'>Register Now</button>
        </div>
        <div className='white2'>
        <SchoolIcon style={{ fontSize: 90,backgroundColor:'#13214a',color:'white',borderRadius:'50px',textAlign:'center',marginTop:'9px'}} />
            <h3>Student Registration</h3>
            <p>Post Graduates</p>
            <h3>$799</h3>
            <button className='white-button'>Register Now</button>
        </div>
        <div className='white3'>
        <BusinessCenterIcon style={{ fontSize: 90,backgroundColor:'#13214a',color:'white',borderRadius:'50px',textAlign:'center',marginTop:'9px'}} />
            <h3>Delegate Registration</h3>
            <p>Participant & Attendants</p>
            <h3>$799</h3>
            <button className='white-button'>Register Now</button>
        </div>

      </div>
    </div>
  )
}

export default Registration
