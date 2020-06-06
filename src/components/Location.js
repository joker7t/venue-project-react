import React from 'react';

const Location = () => {
    return (
        <div className='location_wrapper'>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62860.63914868947!2d105.72255069246359!3d10.034185113824783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a0629f6de3edb7%3A0x527f09dbfb20b659!2zQ-G6p24gVGjGoSwgTmluaCBLaeG7gXUsIEPhuqduIFRoxqEsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1591427629554!5m2!1svi!2s"
                width="100%"
                height="500px"
                frameBorder="0"
                allowFullScreen="true"
                aria-hidden="false"
                tabIndex="0"
                title='map'
            >
            </iframe>

        </div>
    );
}

export default Location;
