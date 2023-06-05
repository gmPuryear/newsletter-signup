import SubscribeButton from "./SubscribeButton";

const TextInput = (placeHolderText) => {
    
    const isInputEmail = (emailInput) => {
        const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    }

    const handleChange = (e) => {
        const email = e.target.value;
        isInputEmail(email);
    }

    const buttonText = "Subscribe to monthly newsletter";

    return (
        <>
        <input className="textInput" placeholder={placeHolderText.placeHolderText} type="email" onChange={handleChange}/>
        <SubscribeButton buttonText= {buttonText}/>
        </>
    )
}
export default TextInput;