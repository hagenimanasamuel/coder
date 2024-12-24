import { useEffect, useState } from "react"
import "./login.css"

export default function Signup() {
    const [fistName, setFirstName] = useState("");
    // function to handle the inputs value validation
    function HandleInputValue(event) {
        // add the new value to the current input
        setFirstName(event.value)
    
        const inputs = document.querySelectorAll(".input");
        const labels = document.querySelectorAll(".placeholder");
        inputs.forEach((input, index) => {
            if (input.value != "") {
                input.style.borderColor = "green";
                labels[index].style.borderColor = "green"
            } else {
                input.style.borderColor = "red";
                labels[index].style.borderColor = "red"
            }
        })
    }
    
    return (
        <>
            <div className="login-container ">
                <div className="form-container">
                    <h2>CREATE ACCOUNT</h2>
                    <div className="input-container">
                        <div className="input-field">
                            <input type="text" id="first-name" name="first-name" className="input" required value={fistName} onChange={HandleInputValue} autoFocus/>
                            <label htmlFor="first-name" className="placeholder">First Name</label>
                            <label htmlFor="first-name" className="placeholder1">Eg: Uwimana</label>
                        </div>
                        <div className="input-field">
                            <input type="text" id="last-name" name="last-name" className="input" required value={fistName} onChange={HandleInputValue}/>
                            <label htmlFor="last-name" className="placeholder">Last Name(s)</label>
                            <label htmlFor="last-name" className="placeholder1">Eg: Chantal</label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}