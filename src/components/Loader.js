import React, { useEffect, useState } from 'react';
import App from '../App';

const FirstVisitWrapper = () => {
    const [showLoader, setShowLoader] = useState(true);

    useEffect(() => {

        const timer = setTimeout(() => {
            setShowLoader(false);
        }, 4000);

        return () => clearTimeout(timer);
    }, []);


    if (showLoader) {
        return (
            <div id="loader" style={loaderStyle}>
                <img src="/images/loading.gif" alt="Loading..." style={{ width: '70px' }} />
            </div>
        );
    }

    return <App />;
};

const loaderStyle = {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(244 244 244)',
};

export default FirstVisitWrapper;
