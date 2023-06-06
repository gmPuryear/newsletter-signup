import {useEffect, useState} from "react";
import SubscribeButton from "./SubscribeButton";

const TextInput = (placeHolderText) => {
    const [isAnEmail, setIsAnEmail] = useState(false);

    const handleChange = (e) => {
        const email = e.target.value;
        isInputEmail(email);
    }

    const isInputEmail = (emailInput) => {
        const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        const isEmail = emailPattern.test(emailInput);
        setIsAnEmail(isEmail);            
         }
    
    
    const buttonText = "Subscribe to monthly newsletter";

    return (
        <>
        <p>
            Email Address
            {
            !isAnEmail
            &&
            <p>Valid email required</p>
            }
        </p>
        <input className={isAnEmail ? "good_email" : "bad_email"} placeholder={placeHolderText.placeHolderText} type="email" onChange={handleChange}/>
        <SubscribeButton buttonText= {buttonText}/>
        </>
    )
}
export default TextInput;