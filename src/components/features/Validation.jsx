import React, { useState } from 'react';


const Validation = () => {
    const formData = {
        Name: "",
        Email: "",
        Password: "",
        ConfirmPassword: "",
    }
    const [formValue, setFormValue] = useState(formData)
    const [errors, setError] = useState(false)

    const submitHandel = (e) => {
        e.preventDefault()
        setError(true)
    }
    console.log("value", formValue)

    return (
        <div className='pt_60'>
            <div className='container'>
                <div className='form_box d-flex flex-column justify-content-center align-items-center'>
                    <h2>Form Validation</h2>
                    <div className='d-flex gap-3 pt-2'>
                        <div className='d-flex flex-column'>
                            <input type="text" placeholder='Name' className='form' onChange={(e) => setFormValue({ ...formValue, Name: e.target.value })} value={formValue.Name} />
                            <p className="mt-1 text_red">{errors && formValue.Name === "" ? "name is required" : ""}</p>
                        </div>
                        <div className='d-flex flex-column'>
                            <input type="email" placeholder='Email' className='form' onChange={(e) => setFormValue({ ...formValue, Email: e.target.value })} value={formValue.Email} />
                            <p className="mt-1 text_red">{errors && formValue.Email === "" ? "email is required" : ""}</p>
                        </div>
                    </div>
                    <div className='d-flex gap-3 mt-3'>
                        <div className='d-flex flex-column'>
                            <input type="password" placeholder='Password' className='form' onChange={(e) => setFormValue({ ...formValue, Password: e.target.value })} value={formValue.Password} />
                            <p className="mt-1 text_red">{errors && formValue.Password === "" ? "password is required" : ""}</p>
                        </div>
                        <div className='d-flex flex-column'>
                            <input type="Password" placeholder='ConfirmPassword' className='form' onChange={(e) => setFormValue({ ...formValue, ConfirmPassword: e.target.value })} value={formValue.ConfirmPassword} />
                            <p className="mt-1 text_red">{errors && formValue.ConfirmPassword === "" ? "confirm password is required" : ""}</p>
                        </div>
                    </div>
                    <button onClick={(e) => submitHandel(e)} className='font-bold submit_button mt-3' href="">Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Validation
