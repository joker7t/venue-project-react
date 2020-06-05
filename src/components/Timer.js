import React, { useState, useEffect } from 'react';
import Slide from 'react-reveal/Slide';

const Timer = () => {
    //eslint-disable-next-line
    const [deadLine, setDeadLine] = useState('Oct, 1, 2020');
    const [days, setDays] = useState('0');
    const [hours, setHours] = useState('0');
    const [minutes, setMinutes] = useState('0');
    const [seconds, setSeconds] = useState('0');

    useEffect(() => {
        setInterval(() => getTimeUntil(deadLine), 1000);

        //eslint-disable-next-line
    }, []);

    const getTimeUntil = () => {
        const time = Date.parse(deadLine) - Date.parse(new Date());
        if (time < 0) {

        } else {
            setSeconds(Math.floor(time / 1000) % 60);
            setMinutes(Math.floor(time / 1000 / 60) % 60);
            setHours(Math.floor(time / 1000 / 60 / 60) % 24);
            setDays(Math.floor(time / 1000 / 60 / 60 / 24));
        }
    }

    return (
        <Slide left delay='1000'>
            <div className='countdown_wrapper'>
                <div className='countdown_top'>
                    Event starts in
            </div>

                <div className='countdown_bottom'>
                    <div className='countdown_item'>
                        <div className='countdown_time'>
                            {days}
                        </div>
                        <div className='countdown_tag'>
                            Days
                        </div>
                    </div>

                    <div className='countdown_item'>
                        <div className='countdown_time'>
                            {hours}
                        </div>
                        <div className='countdown_tag'>
                            Hs
                        </div>
                    </div>

                    <div className='countdown_item'>
                        <div className='countdown_time'>
                            {minutes}
                        </div>
                        <div className='countdown_tag'>
                            Mins
                        </div>
                    </div>

                    <div className='countdown_item'>
                        <div className='countdown_time'>
                            {seconds}
                        </div>
                        <div className='countdown_tag'>
                            Sec
                        </div>
                    </div>
                </div>

            </div>
        </Slide>
    );
}

export default Timer;
