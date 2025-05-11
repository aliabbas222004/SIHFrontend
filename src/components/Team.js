import React,{useEffect} from 'react'

const Team = () => {
    useEffect(() => {
        const images = document.querySelectorAll('.revolve-on-scroll');

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-spin');
                    observer.unobserve(entry.target); 
                }
            });
        }, {
            threshold: 0.3
        });

        images.forEach(img => observer.observe(img));

        return () => observer.disconnect();
    }, []);
    return (
        <div className='text-center'>
            <h1>Our Team</h1>
            <div className="row justify-content-center">
                <div className="col-md-4 mt-3">
                    <img src='/images/Badruddin.jpg' className="revolve-on-scroll" alt='' style={{ border: '0px solid black', borderRadius: '50%', width: '100px' }} />
                    <br /><br />
                    <h4>Badruddin Bhaisaheb</h4>
                    <h6>Owner</h6>
                </div>
                <div className="col-md-4 mt-3">
                    <img src='/images/Mahediya.jpg' className="revolve-on-scroll" alt='' style={{ border: '0px solid black', borderRadius: '50%', width: '100px' }} />
                    <br /><br />
                    <h4>Mahediya Bhaisaheb</h4>
                    <h6>Owner</h6>
                </div>
                <div className="col-md-4 mt-3">
                    <img src='/images/Zainul.jpg' className="revolve-on-scroll" alt='' style={{ border: '0px solid black', borderRadius: '50%', width: '100px' }} />
                    <br /><br />
                    <h4>Zainul Abedin Bhaisaheb</h4>
                    <h6>Owner</h6>
                </div>
                <div className="col-md-4 mt-3">
                    <img src='/images/ali.jpg' className="revolve-on-scroll" alt='' style={{ border: '0px solid black', borderRadius: '50%', width: '100px' }} />
                    <br /><br />
                    <h4>Aliabbas Bhaisaheb</h4>
                    <h6>Owner</h6>
                </div>
            </div>
        </div>
    )
}

export default Team
