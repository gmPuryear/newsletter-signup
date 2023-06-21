import {useContext, useEffect, useState} from "react";
import { userEmailContext } from "../App";
import SuccessModal from "./SuccessModal";

const UserEmailInput = (placeHolderText) => {
    const [isAnEmail, setIsAnEmail] = useState('');
    const [toggleSuccessModal, setToggleSuccessModal] = useState(false);
    const [userEmail, setUserEmail] = useState('');

    const handleChange = (e) => {
        console.log(isAnEmail);
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

    const toggleInputClass = () => {
        if (isAnEmail === '') {
            return ''
        } else if (isAnEmail) {
            return 'good_email'
        } else {
            return "bad_email"
        }
    }

    const toggleErrorMessage = () => {
        if (!isAnEmail && isAnEmail !== '') {
            return <b><span className="email_err_msg">Valid email required</span></b>
        }
    }

    const buttonText = "Subscribe to monthly newsletter";

    return (
        <>
        {/* // <div className="input_label_errorMsg_button"> */}
            <p className="label_errorMsg">
            <b><span className="email_label">Email address</span></b>
                    {
                    toggleErrorMessage()
                    }
            </p>
            <div className="input_and_btn">  
                <input className={toggleInputClass()} name="emailInput" placeholder={placeHolderText.placeHolderText} type="email" onChange={handleChange}/>
                <button className="subscribe_button" onClick={() => openSuccessModal()}>Subscribe to monthly newsletter</button>
                {
                    toggleSuccessModal
                    &&
                    <SuccessModal userEmail= {userEmail} toggleSuccessModal= {toggleSuccessModal} setToggleSuccessModal= {setToggleSuccessModal}/>
                }
            </div>
            {/* </div>   */}
        </>
    )
}
export default UserEmailInput;