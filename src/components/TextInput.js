import SubscribeButton from "./SubscribeButton";

const TextInput = (placeHolderText) => {

    const handleChange = (e) => {
        console.log(e.target.value);
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