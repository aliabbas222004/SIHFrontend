import React, { useEffect } from 'react';
import '../Footer.css';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
    let location = useLocation();
    useEffect(() => {
        const handleScroll = () => {
            const fadeInText = document.querySelector('.fade-in-text');
            if (fadeInText) {
                const rect = fadeInText.getBoundingClientRect();
                if (rect.top < window.innerHeight) {
                    fadeInText.classList.add('visible');
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <footer className="bd-footer py-4 py-md-5 mt-5 bg-body-tertiary" style={{ backgroundColor: 'rgb(250, 133, 90,0.2' }}>
            <div className="container py-4 py-md-5 px-4 px-md-3 text-body-secondary">
                <div className="row justify-content-center text-center">
                    <div className="col-8 col-lg-6 mb-3">
                        <a
                            className=" align-items-center mb-2 text-body-emphasis text-decoration-none justify-content-center fade-in-text"
                            href="/"
                            aria-label="Sunrise Interior Hub"
                        >
                            <img src="/images/sunrise10-8.png" alt="logo" width="100px" /> <br />
                            <span className='sih1' style={{ fontSize: '3rem', marginLeft: '10px' }}>Sunrise Interior Hub</span>
                        </a>
                        <br />
                        <p style={{ fontSize: '20px' }}>
                            E-39 Road No.2, Sradar Estate, Ajwa road, <br /> Vadodara, Gujarat, India
                        </p>
                        <ul className="list-unstyled d-flex justify-content-center footer-list-contact">
                            <li className="mb-2 mx-2">
                                <a href="https://www.instagram.com/aliabbasbhaisaheb?igsh=amcyNmJ4ZjBpaDVi" target="_blank" rel="noreferrer">
                                    <img
                                        src="https://img.icons8.com/?size=100&id=Xy10Jcu1L2Su&format=png&color=000000"
                                        alt="Instagram"
                                        style={{ width: '40px' }}
                                    />
                                </a>
                            </li>
                            <li className="mb-2 mx-2">
                                <a href="https://wa.me/7048897540" target="_blank" rel="noreferrer">
                                    <img
                                        src="https://img.icons8.com/?size=100&id=16713&format=png&color=000000"
                                        alt="Whatsapp"
                                        style={{ width: '40px' }}
                                    />
                                </a>
                            </li>
                            <li className="mb-2 mx-2">
                                <a href="/" target="_blank" rel="noreferrer">
                                    <img
                                        src="https://img.icons8.com/?size=100&id=118497&format=png&color=000000"
                                        alt="FaceBook"
                                        style={{ width: '40px' }}
                                    />
                                </a>
                            </li>
                            <li className="mb-2 mx-2">
                                <a href="mailto:badruddinbhaisaheb44.com" target="_blank" rel="noreferrer">
                                    <img
                                        src="https://img.icons8.com/?size=100&id=P7UIlhbpWzZm&format=png&color=000000"
                                        alt="Gmail"
                                        style={{ width: '40px' }}
                                    />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-8 col-lg-2 d-flex align-items-center justify-content-center">

                        <ul className="list-unstyled footer-list">
                            <li className="mb-2"><h3>Links</h3> </li>
                            <li className="mb-2">
                                <a href="/">
                                    <img
                                        src="https://img.icons8.com/?size=100&id=14096&format=png&color=000000"
                                        alt="Home"
                                        style={{ width: '30px' }}
                                    />
                                    &nbsp;&nbsp;Home
                                </a>
                            </li>
                            <li className="mb-2">
                                <Link className={`nav-link`} aria-current="page" to="/about"><img
                                    src="https://img.icons8.com/?size=100&id=qDNClnB7Z4Ky&format=png&color=000000"
                                    alt="About Us"
                                    style={{ width: '30px' }}
                                />
                                    &nbsp;&nbsp;About Us</Link>
                                
                            </li>
                            <li className="mb-2">
                                <a href="/">
                                    <img
                                        src="https://img.icons8.com/?size=100&id=2333&format=png&color=000000"
                                        alt="Works"
                                        style={{ width: '30px' }}
                                    />
                                    &nbsp;&nbsp;Works
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
