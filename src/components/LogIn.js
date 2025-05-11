import React from 'react'
import { useNavigate } from 'react-router-dom';
const LogIn = (props) => {
    let navigate = useNavigate();
    const handleClick = async (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('exampleInputPassword1').value;
        const res = await fetch(`${process.env.REACT_APP_BASE_URL}/user/logIn`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password,
            })
        });
        const jsonRes = await res.json();
        localStorage.setItem('userToken', jsonRes.userToken)
        navigate("/");
        // props.showAlert("Login Sucess","success")
    }

    const handleGoogleClick = async (e) => {
        e.preventDefault();
        window.location.href = `${process.env.REACT_APP_BASE_URL}/auth/google`;
    }
    return (
        <div className='row justify-content-center py-5 px-3'>

            <form className='col-md-3'>
                <h1 className='text-center'>LogIn</h1>
                <div className="mb-3 mt-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" aria-describedby="email" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="text-center">
                    <button type="submit" className="btn btn-primary" onClick={handleClick}>LogIn</button>
                </div>
            </form>

            <div className="text-center py-3">
                <button type="button" className="btn btngoogle" onClick={handleGoogleClick}><img
                    src="https://storage.googleapis.com/support-kms-prod/ZAl1gIwyUsvfwxoW9ns47iJFioHXODBbIkrK"
                    alt="Google Logo"
                    style={{ width: '20px', marginRight: '10px' }}
                />Login with Google</button>
                <br />
                
            </div>

        </div>
    )
}

export default LogIn
