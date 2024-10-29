import { useForm, ValidationError } from '@formspree/react';
import Lottie from 'lottie-react'
import './contact.css'
import emailAnimation from '../../animation/email.json'
import adoneAnimation from '../../animation/done.json'


export default function Contact() {
  const [state, handleSubmit] = useForm("xayrjqlr"); 


  return (
    <div className="contact-us">
      <h1 className='title'><span className='icon-envelope'/> Conatact Us</h1>
      <p className='sub-title'>contact us for more information and get notified when i publish something new ...</p>
      <div className="content-contact flex">

        <form onSubmit={handleSubmit} className="left-contact " >
            <div className="email flex">
                <label htmlFor="email">email address :</label>
                <input autoComplete='off' required type="email" id='email' name='Email'  />
                <ValidationError 
                  prefix="Email" 
                  field="email"
                  errors={state.errors}
                />
            </div>
            <div className="message flex">
                <label htmlFor="message">your message. :</label>
                <textarea required id='message' name='Message' ></textarea>
                <ValidationError 
                  prefix="Message" 
                  field="message"
                  errors={state.errors}
                />
            </div>
            <button type="submit" disabled={state.submitting} className='submit'>
              {state.submitting? "submitting.....": "submit"}</button>
              
            {state.succeeded && (<p className='succeede flex'>
              <Lottie loop={false} animationData={adoneAnimation} className="done"/>
              your messege has been sent successfully 👌🥰</p>)}
        </form>

        <div className="animation-contact">
          <Lottie loop={true}  animationData={emailAnimation}
         className="email"/></div>

    </div>
    </div>
    
  ) 
}
