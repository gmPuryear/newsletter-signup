import {useContext, useEffect, useState} from "react";
import { userEmailContext } from "../App";
import SuccessModal from "./SuccessModal";

const UserEmailInput = (placeHolderText) => {
    const [isAnEmail, setIsAnEmail] = useState(false);
    const [toggleSuccessModal, setToggleSuccessModal] = useState(false);
    const [userEmail, setUserEmail] = useState('');

    const handleChange = (e) => {
        const email = e.target.value;
        isInputEmail(email);
        setUserEmail(email);
    }

    const isInputEmail = (emailInput) => {
        const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        setIsAnEmail(emailPattern.test(emailInput));           
    }

    const openSuccessModal = () => {
        if (isAnEmail) {
            setToggleSuccessModal(true);
        }
    }

    const buttonText = "Subscribe to monthly newsletter";

    return (
        <>
            <ul className="input_label_err_msg">
                    {
                    !isAnEmail
                    &&
                    <li className="email_err_msg">Valid email required</li>
                    }
            </ul>

                <div className="input_and_btn">
                <b><label for="emailInput">Email address</label></b>
                <input className={isAnEmail ? "good_email" : "bad_email"} name="emailInput" placeholder={placeHolderText.placeHolderText} type="email" onChange={handleChange}/>
                <button onClick={() => openSuccessModal()}>Subscribe to monthly newsletter</button>
                {
                    toggleSuccessModal
                    &&
                    <SuccessModal userEmail={userEmail}/>
                }
            </div>
        </>
    )
}
export default UserEmailInput;