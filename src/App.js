import './App.css';
import TextInput from './components/TextInput';

function App() {

  const placeHolderText = "email@company.com";

  return (
    <div className="App">
      {/* <!-- Sign-up form start --> */}

Stay updated!

Join 60,000+ product managers receiving monthly updates on:

Product discovery and building what matters
Measuring to ensure updates are a success
And much more!

 
<TextInput placeHolderText = {placeHolderText}/>

{/* <!-- Sign-up form end --> */}

{/* <!-- Success message start --> */}

Thanks for subscribing!

A confirmation email has been sent to ash@loremcompany.com. 
Please open it and click the button inside to confirm your subscription.

Dismiss message

{/* <!-- Success message end --> */}

<div className="attribution">
  Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
  Coded by <a href="#">Your Name Here</a>.
</div>
    </div>
  );
}

export default App;
