import './App.css';
import { createContext, useEffect, useState } from 'react';
import UserEmailInput from './components/UserEmailInput';
import mobileBanner from './Images/illustration-sign-up-mobile.svg'

function App() {
 const placeHolderText = "email@company.com";

  return (
  <div className="App">
      {/* <!-- Sign-up form start --> */}
      <img className='mobile_banner' src={mobileBanner} alt='email banner'/>
      
      <div className='form_container'>
        <h1 className="stay_updated_header">Stay updated!</h1>

          <p className='intro_to_list'>Join 60,000+ product managers receiving monthly updates on:</p>

          <ul className='benefits_list'>
            <li>Product discovery and building what matters</li>
            <li>Measuring to ensure updates are a success</li>
            <li>And much more!</li>
          </ul>

            <UserEmailInput placeHolderText = {placeHolderText}/>

      </div>

  

  {/* <!-- Sign-up form end --> */}
  <div className="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="#">George Puryear</a>.
  </div>
</div>
  );
}

export default App;
