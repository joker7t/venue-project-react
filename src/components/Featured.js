import React from 'react';
import Carrousel from './Carrousel';
import Timer from './Timer';

const Featured = () => {
    return (
        <div style={{ position: 'relative' }}>

            <Carrousel />

            <div className='artist_name'>
                <div className='wrapper'>
                    Ariana <br />Grande
                </div>
            </div>

            <Timer />
        </div>
    );
}

export default Featured;
