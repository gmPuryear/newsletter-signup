import {ReactComponent as SuccessCheck} from '../Images/icon-success.svg';

const SuccessModal = (props) => {
        const {
        userEmail,
        // toggleSuccessModal,
        setToggleSuccessModal
    } = props

    return (
        <div className="successModal_container">
            <div className='success_Modal_top_content'>
            <SuccessCheck/>
            {/* <!-- Success message start --> */}
            <h1>Thanks for subscribing!</h1>
                <p>
                    A confirmation email has been sent to <span className='user_email'>{userEmail}</span>. 
                    Please open it and click the button inside to confirm your subscription.
                </p>
            </div>
            <div className='dismiss_btn_container'>
                <button className='dismiss_btn' onClick={() => setToggleSuccessModal(false)}>Dismiss message</button>
            </div>
        </div>
    )

}
export default SuccessModal;