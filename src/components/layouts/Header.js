import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

import SideDrawer from '../SideDrawer';

export default function Header() {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [headerShow, setHeaderShow] = useState(false);

    const toggleDrawer = () => drawerOpen ? setDrawerOpen(false) : setDrawerOpen(true);

    const handleScroll = () => window.scrollY > 0 ? setHeaderShow(true) : setHeaderShow(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
        //eslint-disable-next-line
    }, []);

    return (
        <AppBar
            position='fixed'
            style={{
                backgroundColor: headerShow ? '#2f2f2f' : 'transparent',
                boxShadow: 'none',
                padding: '10px 0px'
            }}
        >
            <Toolbar>
                <div className='header_logo'>
                    <div className='font_righteous header_logo_venue'>The Venue</div>
                    <div className='header_logo_title'>Musical Events</div>
                </div>

                <IconButton
                    aria-label='Menu'
                    color='inherit'
                    onClick={toggleDrawer}
                >
                    <MenuIcon />
                </IconButton>

                <SideDrawer
                    open={drawerOpen}
                    onClose={toggleDrawer}
                />
            </Toolbar>

        </AppBar>
    )
}
