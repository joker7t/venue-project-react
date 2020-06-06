import React from 'react';
import Button from '@material-ui/core/Button';
import TicketIcon from '../resources/images/icons/ticket.png';

const MyButton = ({ text, bck, color, link }) => {
    return (
        <Button
            variant="contained"
            href={link}
            size='small'
            style={{
                backgroundColor: bck,
                color: color
            }}
        >
            <img
                className='iconImage'
                src={TicketIcon}
                alt='Icon'
            />
            {text}
        </Button>
    );
}

export default MyButton;
