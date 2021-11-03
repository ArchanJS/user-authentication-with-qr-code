import React, { useState } from 'react';
import QRReader from 'react-qr-reader';
import axios from 'axios';

const QrReader = () => {

    const [user, setUser] = useState("");

    return (
        <div className="container-fluid d-flex flex-column align-items-center justify-content-center bg-dark text-white" style={{ height: "92.5vh" }}>
            <div style={{ height: "400px", width: "400px" }}>

                <QRReader
                    delay={300}
                    onError={
                        (error) => {
                            console.log(error);
                        }
                    }
                    onScan={
                        async (userID) => {
                            if (userID) {
                                const config = {
                                    headers: {
                                        "Content-Type": "application/json"
                                    }
                                }
                                const {data} = await axios.get(`/api/getdetails/${userID}`, config);
                                setUser(data);
                            }
                        }
                    }

                />
            </div>
            <h1 className="display-6 text-info ny-3">Name: <strong>{user ? user.username : "no data to show"}</strong></h1>
            <h1 className="display-6 text-info ny-3">Email: <strong>{user ? user.email : "no data to show"}</strong></h1>
        </div>
    )
}

export default QrReader
