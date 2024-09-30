import React from 'react'
import { useState } from 'react'
import eyeSlash from '../../assets/images/svg/eye-slash-icon.svg'
import eyeShow from '../../assets/images/svg/eye-show.svg'

const FormValidation = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [error, setError] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [passwordShow, showSetPassword] = useState(false);
    const [confirmPasswordShow, confirmPasswordSet] = useState();
    const validateEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}/;
        return emailRegex.test(email);
    };
    const handelSubmit = (e) => {
        e.preventDefault();

        const errors = {
            name: formData.name ? "" : "name is required",
            email: formData.email ? (validateEmail(formData.email) ? "" : "invalid email") : "email is required",
            password: formData.Password ? "" : "Password is required",
            confirmPassword: formData.ConfirmPassword ?
                (formData.Password === formData.confirmPassword ? "" : "Password not match") : "Confirm password is required",
        };
        setError(errors);
        if (!Object.values(errors).some(error => error)) {
            console.log("Submitted values:");
            setFormData({
                name: "",
                email: "",
                password: "",
                confirmPassword: "",
            });
        }
    };
 
  return (
      <div className='py-5'>
          <div className='container'>
              <div className='form_box d-flex flex-column justify-content-center align-items-center'>
                  <h2>Form Validation</h2>
                  <form onSubmit={handelSubmit} className='d-flex flex-column justify-content-center align-items-center'>
                      <div className='d-flex gap-3 pt-2'>
                          <div className='d-flex flex-column'>
                              <input
                                  type="text"
                                  placeholder='Name'
                                  className='form'
                                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                  value={formData.name}
                              />
                              {error.name && <p className="mt-1 text_red">{error.name}</p>}
                          </div>
                          <div className='d-flex flex-column'>
                              <input
                                  type="email"
                                  placeholder='Email'
                                  className='form'
                                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                  value={formData.email}
                              />
                              {error.email && <p className="mt-1 text_red">{error.email}</p>}
                          </div>
                          </div>
                          <div className='d-flex gap-3 pt-2'>
                          <div className='d-flex flex-column position-relative'>
                              <input
                                  type={passwordShow ? "text" : "password"}
                                  placeholder='Password'
                                  className='form'
                                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                  value={formData.password}
                              />
                              <button type="button" className='position-absolute eye_button d-flex align-items-center' onClick={() => showSetPassword(!passwordShow)}>
                                  {passwordShow ? (
                                      <img src={eyeShow} alt="Hide password" />
                                  ) : (
                                      <img src={eyeSlash} alt="Show password" />
                                  )}
                              </button>
                              {error.password && <p className="mt-1 text_red">{error.password}</p>}
                          </div>
                          <div className='d-flex flex-column position-relative'>
                              <input
                                  type={confirmPasswordShow ? "text" : "password"}
                                  placeholder='Confirm Password'
                                  className='form'
                                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                                  value={formData.confirmPassword}
                              />
                              <button className='position-absolute eye_button d-flex align-items-center' type="button" onClick={() => confirmPasswordSet(!confirmPasswordShow)}>
                                  {confirmPasswordShow ? (
                                      <img src={eyeShow} alt="Hide password" />
                                  ) : (
                                      <img src={eyeSlash} alt="Show password" />
                                  )}
                              </button>
                              {error.confirmPassword && <p className="mt-1 text_red">{error.confirmPassword}</p>}
                          </div>
                      </div>
                      <button type="submit" className='font-bold submit_button mt-3'>Submit</button>
                  </form>
               </div>
           </div>
    </div>
  )
};

export default FormValidation