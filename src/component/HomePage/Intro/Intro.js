import React from 'react';
import hero from '../../../images/hero.jpg';
import './Intro.css';

const Intro = () => {
    return (
        <section className='container-fluid py-5 intro'>
            <div className="container py-5">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-md-6 pr-5 order-1 order-md-0">
                        <div className="intro-text pt-3 pt-md-0">
                            <h2>Get your Home today</h2>
                            <p className='intro-text'>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam, rerum. Quos sequi expedita vel iste eligendi laudantium iusto ullam aliquid voluptatum in nulla perferendis, fugit assumenda magnam illum optio possimus corrupti consectetur quasi consequuntur nihil harum adipisci!
                        </p>
                        </div>
                    </div>
                    <div className="col-md-6 order-0 order-md-1">
                        <img src={hero} alt="intro" className='img-fluid' />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Intro;