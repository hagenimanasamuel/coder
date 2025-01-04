import { useEffect, useState } from "react"
import "./login.css"

export default function Signup() {
    const [fistName, setFirstName] = useState("");
    // function to handle the inputs value validation
    function HandleInputValue(event) {
        // add the new value to the current input
        setFirstName(event.value);
    }

    const inputs = document.querySelectorAll(".input");
    inputs.forEach((input, index) => {
        input.oninput = (e) => {
            if(e.target.value != "") {
                document.querySelector(`.label${index}`).classList.remove("active");
            } else {
                document.querySelector(`.label${index}`).classList.add("active")
            }
        }
    })

    return (
        <>
            <div className="login-container ">
                <form action="#">
                    <div className="form-container">
                        <h2>Personal Details</h2>
                        <div className="input-container">
                            <div className="steps active" id="step1" value="true">
                                <div className="input-field">
                                    <input type="text" id="first-name" name="first-name" className="input" required value={fistName} onChange={HandleInputValue} autoFocus title="Enter your first name" />
                                    <label htmlFor="first-name" className="placeholder">First Name</label>
                                    <label htmlFor="first-name" className="placeholder1 label0">Eg: Uwimana</label>
                                </div>
                                <div className="input-field">
                                    <input type="text" id="last-name" name="last-name" className="input" required value={fistName} onChange={HandleInputValue} title="Enter your last name(s)" />
                                    <label htmlFor="last-name" className="placeholder">Last Name(s)</label>
                                    <label htmlFor="last-name" className="placeholder1 label1">Eg: Chantal</label>
                                </div>
                            </div>
                            <div className="steps inactive" id="step2" value="false">
                                <div className="input-field">
                                    <input type="email" id="email" name="email" className="input" required value={fistName} onChange={HandleInputValue} autoFocus title="Enter your Email" />
                                    <label htmlFor="email" className="placeholder">Email</label>
                                    <label htmlFor="email" className="placeholder1 label2">Eg: uwimanachantal@yahoo.com</label>
                                </div>
                                <div className="input-field">
                                    <input type="number" id="tel" name="tel" className="input" required value={fistName} onChange={HandleInputValue} title="Enter your Mobile Phone Number" />
                                    <label htmlFor="tel" className="placeholder">Phone Number</label>
                                    <label htmlFor="tel" className="placeholder1 label3">Eg: +250788880266</label>
                                </div>
                            </div>
                        </div>
                        <div className="submit-container">
                            <button className="btn back-btn inactive-btn" onClick={(e) => {
                                document.getElementById("step1").classList.remove("inactive");
                                document.getElementById("step1").classList.add("active");
                                document.getElementById("step2").classList.remove("active");
                                document.getElementById("step2").classList.add("inactive");
                                document.querySelector(".back-btn").classList.remove("active-btn");
                                document.querySelector(".back-btn").classList.add("inactive-btn");
                            }}>Back</button>
                            <button className="btn active-btn"
                                onClick={(e) => {
                                    var firstName = document.querySelector("#first-name");
                                    var lastName = document.querySelector("#last-name");
                                    if (firstName.value != "" && lastName.value != "") {
                                        document.getElementById("step1").classList.remove("active");
                                        document.getElementById("step1").classList.add("inactive");
                                        document.getElementById("step2").classList.remove("inactive");
                                        document.getElementById("step2").classList.add("active");
                                        document.querySelector(".back-btn").classList.remove("inactive-btn");
                                        document.querySelector(".back-btn").classList.add("active-btn");
                                    }
                                }}>Next</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}