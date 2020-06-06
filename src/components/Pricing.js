import React from 'react';
import Grid from '@material-ui/core/Grid';
import MyButton from './MyButton';
import Zoom from 'react-reveal/Zoom';

const Pricing = () => {
    const boxItems = [
        {
            price: 100,
            position: 'Balcony',
            desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
            link: 'http://google.com',
            delay: 500
        },
        {
            price: 250,
            position: 'Medium',
            desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
            link: 'http://google.com',
            delay: 0
        },
        {
            price: 200,
            position: 'Star',
            desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
            link: 'http://google.com',
            delay: 500
        }
    ]

    const showBoxes = () => boxItems.map((item, i) =>
        <Grid item sm={4} key={i}>
            <Zoom delay={item.delay}>
                <div className='pricing_item'>
                    <div className='pricing_inner_wrapper'>
                        <div className='pricing_item_wrapper'>
                            <div className='pricing_title'>
                                <span>${item.price}</span>
                                <span>{item.position}</span>
                            </div>
                            <div className='pricing_description'>
                                {item.desc}
                            </div>
                            <div className='pricing_buttons'>
                                <MyButton
                                    text='Purchase tickets'
                                    bck='#ffa880'
                                    color='#ffffff'
                                    link={item.link}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Zoom>
        </Grid>
    );

    return (
        <div className='bck_black'>
            <div className='center_wrapper pricing_section'>
                <h2>Pricing</h2>
                <div className='pricing_wrapper'>
                    <Grid container>
                        {showBoxes()}
                    </Grid>
                </div>
            </div>
        </div>
    );
}

export default Pricing;
