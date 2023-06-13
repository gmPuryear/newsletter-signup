import './App.css';
import { createContext, useEffect, useState } from 'react';
import UserEmailInput from './components/UserEmailInput';
import mobileBanner from './Images/illustration-sign-up-mobile.svg'

function App() {
 const placeHolderText = "email@company.com";

  return (
    <div className="App">
      
      <img className='mobile_banner' src={mobileBanner} alt='email banner'/>

      

      {/* <!-- Sign-up form start --> */}
      <div className='content_container'>
      <h1>Stay updated!</h1>

Join 60,000+ product managers receiving monthly updates on:

Product discovery and building what matters
Measuring to ensure updates are a success
And much more!
 
<UserEmailInput placeHolderText = {placeHolderText}/>
  {/* <SuccessModal/> */}

{/* <!-- Sign-up form end --> */}
</div>

<div className="attribution">
  
  Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
  Coded by <a href="#">Your Name Here</a>.
</div>
    </div>
  );
}

export default App;
