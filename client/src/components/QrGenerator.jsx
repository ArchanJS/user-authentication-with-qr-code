import React, { useState } from 'react';
import QRCode from "react-qr-code";

const QrGenerator = () => {

    const [text,setText] = useState("");
    const [userID,setUserID] = useState("You have not entered anything yet!");

    return (
        <div className="container-fluid d-flex flex-column align-items-center justify-content-center" style={{height:"92.5vh"}}>
            <QRCode value={userID}/>
            <input class="form-control w-25 mt-5" type="text" placeholder="Enter your userID" aria-label="default input example" value={text}
            onChange={(e)=>setText(e.target.value)}
            />
            <button className="btn btn-info my-3"
            onClick={()=>{
                setUserID(text);
            }}
            >Generate</button>
        </div>
    )
}

export default QrGenerator
