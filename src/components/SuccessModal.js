const SuccessModal = (userEmail) => {
    console.log(userEmail);

    return (
        <div>
            {/* <!-- Success message start --> */}
            Thanks for subscribing!

A confirmation email has been sent to {userEmail.userEmail}. 
Please open it and click the button inside to confirm your subscription.

<button>Dismiss message</button>

{/* <!-- Success message end --> */}
        </div>
    )

}
export default SuccessModal;