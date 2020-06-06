import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { scroller } from "react-scroll";

const SideDrawer = ({ open, onClose }) => {

    const scrollToElement = (element) => {
        scroller.scrollTo(element, {
            duration: 1000,
            delay: 100,
            smooth: true,
            offset: -150
        });
        onClose();
    };

    return (
        <Drawer
            anchor='right'
            open={open}
            onClose={onClose}
        >
            <List component='nav'>
                {
                    //name for element must be the same as which was defined in App.js 
                }
                <ListItem button onClick={() => scrollToElement('featured')}>
                    Event starts in
                </ListItem>
                <ListItem button onClick={() => scrollToElement('venue-info')}>
                    Venue info
                </ListItem>
                <ListItem button onClick={() => scrollToElement('highlight')}>
                    Highlights
                </ListItem>
                <ListItem button onClick={() => scrollToElement('pricing')}>
                    Pricing
                </ListItem>
                <ListItem button onClick={() => scrollToElement('location')}>
                    Location
                </ListItem>
            </List>
        </Drawer>
    );
}

export default SideDrawer;
