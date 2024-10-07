import React from 'react'
import '../Speaker/Speaker.css'
import Footer from '../Footer/Footer'

const Speaker = () => {
  return (
    <div>
     <div className='speaker-image'>
          <h1 className='speaker-h'>Speaker Guidelines</h1>
     </div>
      <h1 className='applied-h'>Applied Microbiology Speaker Guidelines</h1>
     <div className='guideline-container'>
      <h1 className='side-heading'>Speaker Guidelines</h1>
        <ul className='unorder'>
          <li className='unorder-list'>Authors are requested to submit the abstract (250-300 words) and biography(80-100 words) and your photograph that shows your clear face in 250*250 size.</li>
          <li className='unorder-list' >Selected abstract submissions will be presented during oral sessions generally lasting for 3-4 hours. Authors will present their research/overview, etc. in a specific topic area, and presentations will be moderated by experts in the field.</li>
          <li className='unorder-list'>A scientific overview may be included in an oral abstract session, as appropriate, or a moderator may provide a brief transnational summary at the close of a session. Co-mediators will introduce speakers and facilitate audience questions.</li>
        </ul> 
     </div>
     <div className='guideline-container'>
      <h1 className='side-heading'>Presentation Length</h1>
        <ul className='unorder'>
          <li className='unorder-list'>Oral presenters will be allocated 25 minutes for their presentation and 5 minutes for questions and answers. If the presentation exceeds 25 minutes, the moderator will shorten the Q&A period that follows the presentation.</li>
          <li className='unorder-list' >Our experience indicates that up to 20 slides is optimal, allowing 1 minute per slide. You may choose to use more than 20 slides, but please be sure to complete your presentation within the allocated 25 minutes. The content slides should give an overview of the research with conclusions and future research direction.</li>
        </ul> 
     </div>
     <div className='guideline-container'>
      <h1 className='side-heading'>Slide Format</h1>
        <ul className='unorder'>
          <li className='unorder-list'>Prepare slides that clearly mentioned abstract title, your name, university/hospital/comapny and country. Conference name or logo should be added in the first slide of PPT.</li>
          <li className='unorder-list' >Kindly use Microsoft Power Point Presentation to prepare the slides.</li>
          <li className='unorder-list' >All the speakers should prepare the PPT (Power Point Presentation) to present at the scheduled time. We request all the presenters send the final PPT to conference manager before 7 days of the event. The sending PPT name should be with presentating speaker name and the same PPT will be available on day of event.</li>
          <li className='unorder-list' >If you are unable to send the the PPT in email (when size of the file exceeds), please use wetransfer or any drive links from google, outlook. Please do inform conference manager once you send an email or share a link.</li>
          <li className='unorder-list' >Speakers must check their slides twicely (content, images) and listen to audio if you include anything</li>
        </ul> 
     </div>
     <div className='guideline-container'>
      <h1 className='side-heading'>Benefits Of Joining</h1>
        <ul className='unorder'>
          <li className='unorder-list'>Networking Opportunities</li>
          <li className='unorder-list' >Knowledge Sharing</li>
          <li className='unorder-list' >Professional Development</li>
          <li className='unorder-list' >Exposure to Innovations.</li>
          <li className='unorder-list' >Presentation Opportunities</li>
          <li className='unorder-list'>Brand Visibility</li>
          <li className='unorder-list' >Talent Acquisition</li>
          <li className='unorder-list' >Strategic Insights</li>
          <li className='unorder-list' >Partnerships and Collaboration</li>
          <li className='unorder-list' >Market Research</li>
        </ul> 
     </div>
     <Footer/>
    </div>
  )
}

export default Speaker
