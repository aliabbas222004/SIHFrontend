import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const SignUp = (props) => {
  let navigate=useNavigate();
  const [formData, setFormData] = useState({
    uname: '',
    email: '',
    password: '',
    cpassword: '',
    phone:'',
    address:''
  });

  const [passwordMatch, setPasswordMatch] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleConfirmBlur = () => {
    setPasswordMatch(formData.password === formData.cpassword);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    const res = await fetch(`${process.env.REACT_APP_BASE_URL}/user/signUp`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({name:formData.uname, email:formData.email, password:formData.password,phone:formData.phone,address:formData.address })
    });
    const jsonRes = await res.json();
    localStorage.setItem('userToken', jsonRes.userToken)
    navigate("/");
  }

  return (
    <div className='row justify-content-center py-5 px-3'>

      <form className='col-md-3'>
        <h1 className='text-center'>SignUp</h1>
        <div className="mb-3 mt-3">
          <label htmlFor="uname" className="form-label">Name</label>
          <input type="text" className="form-control" name='uname' id="uname" onChange={handleChange} aria-describedby="name" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" name='email' id="email" onChange={handleChange} aria-describedby="email" />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" name='password' onChange={handleChange} id="password" />
        </div>
        <div className="mb-3">
          <label htmlFor="cpassword" className="form-label">Confirm Password</label>
          <input type="password" className={`form-control ${!passwordMatch ? 'is-invalid' : ''}`} name='cpassword' onChange={handleChange} onBlur={handleConfirmBlur} id="cpassword" />
          {!passwordMatch && (
            <div className="invalid-feedback">
              Passwords do not match.
            </div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Phone Number</label>
          <input type="text" className="form-control" name='phone' onChange={handleChange} id="phone" />
        </div>

        <div className="mb-3">
          <label htmlFor="address" className="form-label">Address</label>
          <input type="text" className="form-control" name='address' onChange={handleChange} id="address" />
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-primary" disabled={!passwordMatch} onClick={handleSignUp}>SignUp</button>
        </div>

      </form>
    </div>
  )
}

export default SignUp
