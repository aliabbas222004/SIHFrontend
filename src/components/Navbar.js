import React from 'react'
import {
    Link,
    useLocation
} from "react-router-dom";
const Navbar = () => {
    let location = useLocation();

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ position: 'sticky', top: 0, zIndex: 1020 }}>
                <div className="container-fluid">
                    <Link className="navbar-brand d-flex align-items-center" to="/"> <img src='/images/sunrise10-8.png' style={{ width: '30px' }} alt='logo' /> &nbsp;  Sunrise Interior Hub </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} aria-current="page" to="/about">About</Link>
                            </li>

                        </ul>
                        <form className="d-flex">
                            {!localStorage.getItem('userToken') ? (
                                <>
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                                        <Link className={`nav-link ${location.pathname === "/user/logIn" ? "active" : ""}`} to="/user/logIn">Log In</Link>
                                        <Link className={`nav-link ${location.pathname === "/user/signUp" ? "active" : ""}`} to="/user/signUp">Sign Up</Link>
                                        <Link className='nav-link' to="/filter">Filter</Link>

                                    </ul>
                                </>
                            ) :
                                <>
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                        <Link className='nav-link' to="/user/logOut">Log Out</Link>
                                        <Link className='nav-link' to="/filter">Filter</Link>

                                    </ul>
                                </>
                            }
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
