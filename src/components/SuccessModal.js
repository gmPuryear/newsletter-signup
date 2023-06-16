import { useEffect } from "react";

const SuccessModal = (props) => {
        const {
        userEmail,
        toggleSuccessModal,
        setToggleSuccessModal
    } = props

    return (
        <div>
            {/* <!-- Success message start --> */}
            Thanks for subscribing!

A confirmation email has been sent to {userEmail}. 
Please open it and click the button inside to confirm your subscription.

<button onClick={() => setToggleSuccessModal(false)}>Dismiss message</button>

{/* <!-- Success message end --> */}


        </div>
    )

}
export default SuccessModal;