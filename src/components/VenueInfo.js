import React from 'react';
import calendar_icon from '../resources/images/icons/calendar.png';
import location_icon from '../resources/images/icons/location.png';
import Grid from '@material-ui/core/Grid';
import Zoom from 'react-reveal/Zoom';

const VenueInfo = () => {
    return (
        <div className='bck_black' style={{ width: '100%' }}>
            <div className='center_wrapper'>
                <div className='vn_wrapper'>
                    <Grid container>
                        <Grid item md={6} className='vn_item'>
                            <Zoom duration={500}>
                                <div className='vn_outer'>
                                    <div className='vn_inner'>
                                        <div className='vn_icon_square bck_red'></div>
                                        <div
                                            className='vn_icon'
                                            style={{
                                                background: `url(${calendar_icon})`
                                            }}
                                        ></div>
                                        <div className='vn_title'>
                                            Event Date & Time
                                    </div>
                                        <div className='vn_desc'>
                                            1 Oct 2020 @ 12:00
                                    </div>
                                    </div>
                                </div>
                            </Zoom>
                        </Grid>

                        <Grid item md={6} className='vn_item'>
                            <Zoom duration={500} delay={500}>
                                <div className='vn_outer'>
                                    <div className='vn_inner'>
                                        <div className='vn_icon_square bck_yellow'></div>
                                        <div
                                            className='vn_icon'
                                            style={{
                                                background: `url(${location_icon})`
                                            }}
                                        ></div>
                                        <div className='vn_title'>
                                            Event Location
                                        </div>
                                        <div className='vn_desc'>
                                            Somewhere on Earth
                                        </div>
                                    </div>
                                </div>
                            </Zoom>
                        </Grid>
                    </Grid>
                </div>
            </div>


        </div>
    );
}

export default VenueInfo;
