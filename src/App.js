import './App.css';
import { createContext, useEffect, useState } from 'react';
import TextInput from './components/TextInput';
import SuccessModal from './components/SuccessModal';


export const userEmailContext = createContext(); // context for storing the user's email address;
// export const isAValidEmailContext = createContext(); // context for storing if the inputed email is actually a valid email address


function App() {
  const [userEmail, setUserEmail] = useState(''); // context state used to store the user's email so that it can be displayed in the success modal
  // const [isAValidEmail, setisAValidEmail] = useState(false); // context state used to store if the user's email is an actual email address

  useEffect (() => {
    console.log(userEmail);
  })

  const placeHolderText = "email@company.com";

  return (
    <userEmailContext.Provider value={[userEmail, setUserEmail]}>
    {/* <isAValidEmailContext.Provider value={[isAValidEmail, setisAValidEmail]}> */}
    <div className="App">
      {/* <!-- Sign-up form start --> */}
      Stay updated!

Join 60,000+ product managers receiving monthly updates on:

Product discovery and building what matters
Measuring to ensure updates are a success
And much more!
 
<TextInput placeHolderText = {placeHolderText}/>
  {/* <SuccessModal/> */}

{/* <!-- Sign-up form end --> */}

<div className="attribution">
  Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
  Coded by <a href="#">Your Name Here</a>.
</div>
    </div>
    </userEmailContext.Provider>
    // </isAValidEmailContext.Provider>
  );
}

export default App;
