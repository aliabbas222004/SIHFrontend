import React,{useEffect} from 'react';
import Team from './Team';

const About = () => {

    useEffect(() => {
        const elementsLeft = document.querySelectorAll('.slide-in-left');
        const elementsRight = document.querySelectorAll('.slide-in-right');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    if (entry.target.classList.contains('slide-in-left')) {
                        entry.target.classList.add('animate-left');
                    }
                    if (entry.target.classList.contains('slide-in-right')) {
                        entry.target.classList.add('animate-right');
                    }
                    observer.unobserve(entry.target); // Animate once
                }
            });
        }, {
            threshold: 0.2,
        });

        elementsLeft.forEach(el => observer.observe(el));
        elementsRight.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <div
                style={{
                    backgroundImage: "url('/images/bg1.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '100%',
                    overflowX: 'hidden', 
                }}
            >
                <div className="container py-5">
                    <div className="row align-items-center">
                        <div className="col-md-4 text-center">
                            <img
                                src="/images/sunrise10-8.png"
                                alt="Logo"
                                style={{ width: '40%' }}
                            />
                        </div>
                        <div className="col-md-8 text-center slide-in-right">
                            <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>
                                CRAFTING ELEGANT SPACES, DESIGNING LASTING IMPRESSIONS!
                            </div>
                        </div>
                    </div>
                </div>


            </div>
            <div className='mt-5 px-4 py-5'>
                <h4 style={{ fontSize: '1.9em', fontWeight: '10px' }}>KNOW ABOUT SUNRISE INTERIOR HUB</h4>
                <p style={{ fontSize: '1.1em', wordSpacing: '0.3em' }}>
                    At Sunrise Interior Hub, we specialize in delivering sophisticated and functional interior solutions that transform everyday spaces into artistic expressions. <br />
                    From elegant wall panels and modern louvers to high-quality decorative laminates, our curated collection is crafted to meet the evolving aesthetics of contemporary living. <br />
                    We take pride in being trendsetters in the interior industry, offering customized designs, durable materials, and exceptional craftsmanship — all tailored to bring your vision to life.

                </p>
            </div>

            <div className='px-4 py-5'>
                <div className="row mt-5 d-flex align-items-center">
                    <div className="col-md-6 slide-in-left">
                        <img src="/images/vision.png" alt="" style={{ width: '100%' }} />
                    </div>
                    <div className="col-md-6 ">
                        <h1 className='slide-in-right text-center mb-3'>VISION</h1>
                        <p style={{ fontSize: '1.1em', wordSpacing: '0.3em' }}>
                            Our vision is to redefine modern interiors by blending creativity, functionality, and craftsmanship into every space we design. <br />
                            We aspire to become a trusted name in the interior decor industry by consistently delivering innovative solutions that elevate lifestyles and inspire aesthetic excellence. <br />
                            Through sustainable practices and a deep understanding of evolving design trends, we aim to shape environments that leave lasting impressions.
                        </p>
                    </div>
                </div>

            </div>

            <div className='py-5 px-4' style={{ backgroundColor: '#ff9b0033' }}>
                <div className="row mt-5 d-flex align-items-center">
                    <div className="col-md-6 ">
                        <h1 className='slide-in-left text-center mb-3'>MISSION</h1>
                        <p style={{ fontSize: '1.1em', wordSpacing: '0.3em' }}>
                            At Sunrise Interior Hub, our mission is to transform ordinary spaces into exceptional environments through innovative design, quality craftsmanship, and a commitment to excellence. <br />
                            We strive to exceed client expectations by delivering customized interior solutions that reflect personality, functionality, and elegance. <br />
                            Our dedication lies in building long-lasting relationships based on trust, transparency, and creative collaboration.
                        </p>
                    </div>
                    <div className="col-md-6 slide-in-right">
                        <img src="/images/mission.png" alt="" style={{ width: '80%' }} />
                    </div>
                </div>

            </div>

            <div className="mt-5 px-4">
                <div className="row mt-5 d-flex align-items-center" style={{ minHeight: '100vh' }}>
                    <div className="col-md-6 slide-in-left d-flex justify-content-center">
                        <img src="/images/values1.png" alt="" style={{ width: '80%' }} />
                    </div>
                    <div className="col-md-6">
                        <h1 className="slide-in-right text-center mb-3">VALUES</h1>
                        <p style={{ fontSize: '1.1em', wordSpacing: '0.3em' }}>
                            At Sunrise Interior Hub, our core values guide every project and client interaction:<br /><br />
                            <strong>1. Integrity:</strong> We believe in honesty, transparency, and ethical practices in all aspects of our work.<br />
                            <strong>2. Creativity:</strong> We foster innovation to craft unique and inspiring designs tailored to each client.<br />
                            <strong>3. Quality:</strong> We are committed to delivering the highest standards of materials and craftsmanship.<br />
                            <strong>4. Client-Centric Approach:</strong> We prioritize your vision, needs, and satisfaction above all else.<br />
                            <strong>5. Sustainability:</strong> We design with responsibility—embracing eco-friendly choices and sustainable practices.<br />
                            <strong>6. Collaboration:</strong> We believe in teamwork and strong communication for achieving the best outcomes.
                        </p>
                    </div>
                </div>
            </div>


            <Team />

        </>
    );
};

export default About;
