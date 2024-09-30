import React, { useState } from 'react';
import eyeSlash from '../../assets/images/svg/eye-slash-icon.svg'
import eyeShow from '../../assets/images/svg/eye-show.svg'

const Validation = () => {
    const [formValue, setFormValue] = useState({
        Name: "",
        Email: "",
        Password: "",
        ConfirmPassword: "",
    });

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const validateEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}/;
        return emailRegex.test(email);
    };

    const submitHandle = (e) => {
        e.preventDefault();

        const newErrors = {
            name: formValue.Name ? "" : "Name is required",
            email: formValue.Email ? (validateEmail(formValue.Email) ? "" : "Invalid email address") : "Email is required",
            password: formValue.Password ? "" : "Password is required",
            confirmPassword: formValue.ConfirmPassword ?
                (formValue.Password === formValue.ConfirmPassword ? "" : "Password not match") : "Confirm password is required",
        };

        setErrors(newErrors);

        if (!Object.values(newErrors).some(error => error)) {
           
            setFormValue({
                Name: "",
                Email: "",
                Password: "",
                ConfirmPassword: "",
            });
        }
        console.log("Submitted values:", formValue);
    };

    return (
        <div className='pt_60'>
            <div className='container'>
                <div className='form_box d-flex flex-column justify-content-center align-items-center'>
                    <h2>Form Validation</h2>
                    <form onSubmit={submitHandle} className='d-flex flex-column justify-content-center align-items-center'>
                        <div className='d-flex gap-3 pt-2'>
                            <div className='d-flex flex-column'>
                                <input
                                    type="text"
                                    placeholder='Name'
                                    className='form'
                                    onChange={(e) => setFormValue({ ...formValue, Name: e.target.value })}
                                    value={formValue.Name}
                                />
                                {errors.name && <p className="mt-1 text_red">{errors.name}</p>}
                            </div>
                            <div className='d-flex flex-column'>
                                <input
                                    type="email"
                                    placeholder='Email'
                                    className='form'
                                    onChange={(e) => setFormValue({ ...formValue, Email: e.target.value })}
                                    value={formValue.Email}
                                />
                                {errors.email && <p className="mt-1 text_red">{errors.email}</p>}
                            </div>
                        </div>
                        <div className='d-flex gap-3 mt-3'>
                            <div className='d-flex flex-column position-relative'>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder='Password'
                                    className='form'
                                    onChange={(e) => setFormValue({ ...formValue, Password: e.target.value })}
                                    value={formValue.Password}
                                />
                                <button type="button" className='position-absolute eye_button d-flex align-items-center' onClick={() => setShowPassword(!showPassword)}>
                                    {showPassword ? (
                                        <img src={eyeShow} alt="Hide password" />
                                    ) : (
                                        <img src={eyeSlash} alt="Show password" />
                                    )}
                                </button>
                                {errors.password && <p className="mt-1 text_red">{errors.password}</p>}
                            </div>
                            <div className='d-flex flex-column position-relative'>
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    placeholder='Confirm Password'
                                    className='form'
                                    onChange={(e) => setFormValue({ ...formValue, ConfirmPassword: e.target.value })}
                                    value={formValue.ConfirmPassword}
                                />
                                <button className='position-absolute eye_button d-flex align-items-center' type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                                    {showConfirmPassword ? (
                                        <img src={eyeShow} alt="Hide password" />
                                    ) : (
                                            <img src={eyeSlash} alt="Show password" />
                                    )}
                                </button>
                                {errors.confirmPassword && <p className="mt-1 text_red">{errors.confirmPassword}</p>}
                            </div>
                        </div>
                        <button type="submit" className='font-bold submit_button mt-3'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Validation;

// import React, { useState } from 'react';

// const Validation = () => {
//     const formData = {
//         name: "",
//         email: "",
//         password: "",
//         confirmPassword: "",
//     }
//     const [formValue, setFormValue] = useState(formData)
//     const [errors, setError] = useState(false)
//     const [password, setPassword] = useState(false)
//     const [confirmPassword, setConfirm] = useState(false)
//     const [emailCheck, setMailError, Email] = useState("");
   
//     const submitHandel = (e) => {
//         const emailCheck = /^[a-zA-Z0-9_.+\-]+[\x40][a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;
//         if (!emailCheck.test(Email)) {
//             setMailError("valid mail address");

//         } else {
//             setMailError("okay");
//         }
            
   
//         e.preventDefault()
//         setError(true)
//         if (
//             formValue.Name !== "" &&
//             formValue.Email !== "" &&
//             formValue.Password !== "" &&
//             formValue.ConfirmPassword !== ""
            
//         )
    
//         {
//             setError(false)
//             setFormValue(formData)
           
//         }
//         console.log("value", formValue, emailCheck )
//     }

//     return (
//         <div className='pt_60'>
//             <div className='container'>
//                 <div className='form_box d-flex flex-column justify-content-center align-items-center'>
//                     <h2>Form Validation</h2>
//                     <div className='d-flex gap-3 pt-2'>
//                         <div className='d-flex flex-column'>
//                             <input type="text" placeholder='Name' className='form' onChange={(e) => setFormValue({ ...formValue, Name: e.target.value })} value={formValue.Name} />
//                             <p className="mt-1 text_red">{errors && formValue.Name === "" ? "name is required" : ""}</p>
//                         </div>
//                         <div className='d-flex flex-column'>
//                             <div>
//                                 <input type={email ? "text":"email"} placeholder='Email' className='form' onChange={(e) => setFormValue({ ...formValue, Email: e.target.value })} value={formValue.Email} />
//                                 <div onClick={() => setMailError(!email)}>email</div>
//                           </div>
                         
//                             <p className="mt-1 text_red">{errors && formValue.Email === "" ? "email is required" : ""}</p>
//                         </div>
//                     </div>
//                     <div className='d-flex gap-3 mt-3'>
//                         <div className='d-flex flex-column'>
//                             <div>
//                                 <input type={password ? "text" : "password"} placeholder='Password' className='form' onChange={(e) => setFormValue({ ...formValue, Password: e.target.value })} value={formValue.Password} />
//                                 <div onClick={() => setPassword(!password)}>{password ? "show" : "hide"}</div>
//                             </div>
//                             <p className="mt-1 text_red">{errors && formValue.Password === "" ? "password is required" : ""}</p>
//                         </div>
//                         <div className='d-flex flex-column'>
//                             <div>
//                                 <input type={confirmPassword ? "password" : "confirmPassword"} placeholder='ConfirmPassword' className='form' onChange={(e) => setFormValue({ ...formValue, ConfirmPassword: e.target.value })} value={formValue.ConfirmPassword} />
//                                 <div onClick={() => setConfirm(!confirmPassword)}>{confirmPassword ? "hide" : "show"}</div>
//                            </div>
//                             <p className="mt-1 text_red">{errors && formValue.ConfirmPassword === "" ? "confirm password is required" : ""}</p>
//                         </div>
//                     </div>
//                     <button onClick={(e) => submitHandel(e)} className='font-bold submit_button mt-3' href="">Submit</button>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Validation



