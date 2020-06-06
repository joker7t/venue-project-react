import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import MyButton from './MyButton';

const Discount = () => {
    const [porcentageStart, setPorcentageStart] = useState(0);
    //eslint-disable-next-line
    const [porcentageEnd, setPorcentageEnd] = useState(50);
    const [isRunDiscount, setIsRunDiscount] = useState(false);

    const updatePorcentage = () => {
        if (porcentageStart < porcentageEnd) {
            setPorcentageStart(porcentageStart + 1);
        }
    }

    useEffect(() => {
        if (isRunDiscount) {
            setTimeout(() => updatePorcentage(), 30);
        }
    });

    return (
        <div className='discount_wrapper'>
            <Grid container spacing={3}>
                <Grid item md={3}>
                    <Fade onReveal={() => setIsRunDiscount(true)}>
                        <div className='discount_porcentage'>
                            <span>{porcentageStart}%</span>
                            <span>OFF</span>
                        </div>
                    </Fade>
                </Grid>
                <Grid item md={9}>
                    <Slide right>
                        <div className='discount_description'>
                            <h3>login to discount</h3>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                        </div>

                        <MyButton
                            text='Purchase tickets'
                            bck='#ffa880'
                            color='#ffffff'
                            link='http://google.com'
                        />
                    </Slide>
                </Grid>
            </Grid>
        </div>
    );
}

export default Discount;
