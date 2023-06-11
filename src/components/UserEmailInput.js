import {useContext, useEffect, useState} from "react";
import { userEmailContext } from "../App";
import SuccessModal from "./SuccessModal";

const UserEmailInput = (placeHolderText) => {
    const [isAnEmail, setIsAnEmail] = useState(false);
    const [toggleSuccessModal, setToggleSuccessModal] = useState(false);

    const handleChange = (e) => {
        const email = e.target.value;
        isInputEmail(email);
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
            <li>Email Address</li>
            {
            !isAnEmail
            &&
            <li className="email_err_msg">Valid email required</li>
            }
        </ul>
        <input className={isAnEmail ? "good_email" : "bad_email"} placeholder={placeHolderText.placeHolderText} type="email" onChange={handleChange}/>
        <button onClick={() => openSuccessModal()}>Subscribe to monthly newsletter</button>
        {
            toggleSuccessModal
            &&
            <SuccessModal/>
        }
        </>
    )
}
export default UserEmailInput;