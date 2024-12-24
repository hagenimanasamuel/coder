// import { useEffect, useState } from "react"
import "./login.css"

export default function Signup() {
    // const [fistName, setFirstName] = useState("");
    // useEffect(() => {
    //     document.title = `names: ${fistName}`;
    //     alert(fistName)
    // }, []);
    return (
        <>
            <div className="login-container ">
                <div className="form-container">
                    <h2>CREATE ACCOUNT</h2>
                    <div className="input-container">
                        <div className="input-field">
                            <input type="text" id="first-name" name="first-name" required value={fistName} onChange={(event) => setFirstName(event.value)} autoFocus/>
                            <label htmlFor="first-name" className="placeholder">First Name</label>
                        </div>
                        <div className="input-field">
                            <input type="text" id="last-name" name="last-name" required value={fistName} />
                            <label htmlFor="last-name" className="placeholder">Last Name(s)</label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}