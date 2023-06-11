import { useContext, useState } from "react";
import { userEmailContext } from "../App";
import SuccessModal from "./SuccessModal";

const SubscribeButton = (buttonText) => {
    const [userEmail, setUserEmail] = useContext(userEmailContext);
    const [isAValidEmail, setisAValidEmail] = useState(false);

    const handleIsValidEmail = () => {
        const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        const isAValidEmail = emailPattern.test(userEmail);
        isAValidEmail && setisAValidEmail(true);
    }
    

return (
    <>
        <button onClick={() => {
            handleIsValidEmail();
        }}>{buttonText.buttonText}</button>
        {isAValidEmail
        ?
        <SuccessModal/>
        :
        ''
        }
    </>
    )
}
export default SubscribeButton;