import { useState } from "react";
import SuccessModal from "./SuccessModal";

const SubscribeButton = (placeHolderText) => {
    const [openSuccessModal, setOpenSuccessModal] = useState(false);

return (
    <>
    
        <button type="submit" onClick={() => setOpenSuccessModal(true)}>{placeHolderText.buttonText}</button>
        {
        openSuccessModal
        &&
        <SuccessModal setOpenSuccessModal = {setOpenSuccessModal}/>
    }
    </>
    
    )
}
export default SubscribeButton;