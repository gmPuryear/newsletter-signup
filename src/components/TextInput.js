import {useContext, useEffect, useState} from "react";
import SubscribeButton from "./SubscribeButton";
import { userEmailContext } from "../App";

const TextInput = (placeHolderText) => {
    const [userEmail, setUserEmail] = useContext(userEmailContext);
    const [isAnEmail, setIsAnEmail] = useState('');

    const handleChange = (e) => {
        const email = e.target.value;
        isInputEmail(email);
    }

    const isInputEmail = (emailInput) => {
        const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        setIsAnEmail(emailPattern.test(emailInput));
        setUserEmail(emailInput);            
         }
    
    
    const buttonText = "Subscribe to monthly newsletter";

    return (
        <>
        <ul className="input_label_err_msg">
            <li>Email Address</li>
            {
            !isAnEmail
            &&
            <li className="email_err_msg">Valid email required</li>
            }
        </ul>
        <input className={isAnEmail ? "good_email" : "bad_email"} placeholder={placeHolderText.placeHolderText} type="email" onChange={handleChange}/>
        <SubscribeButton buttonText= {buttonText}/>
        </>
    )
}
export default TextInput;