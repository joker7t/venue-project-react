import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const SideDrawer = ({ open, onClose }) => {
    return (
        <Drawer
            anchor='right'
            open={open}
            onClose={onClose}
        >
            <List component='nav'>
                <ListItem button onClick={() => console.log(123)}>
                    Event starts in
                </ListItem>
                <ListItem button onClick={() => console.log(123)}>
                    Venue info
                </ListItem>
                <ListItem button onClick={() => console.log(123)}>
                    Highlights
                </ListItem>
                <ListItem button onClick={() => console.log(123)}>
                    Pricing
                </ListItem>
                <ListItem button onClick={() => console.log(123)}>
                    Location
                </ListItem>
            </List>
        </Drawer>
    );
}

export default SideDrawer;
