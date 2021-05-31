import { faBed, faMapMarkedAlt, faShower } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './HomeCard.css';

const HomeCard = ({ home }) => {
    const { id, imgMain, title, address, bedrooms, bathroom, price } = home;
    return (
        <div className='col-lg-4 col-md-6'>
            <div className="m-2 m-md-3 homecard shadow-lg">
                <img src={imgMain} alt="home" className='aspected-img' />
                <div className="p-3">
                    <h3 className='pb-2'>{title}</h3>
                    <p><FontAwesomeIcon icon={faMapMarkedAlt} /> {address}</p>
                    <div className="d-flex align-items-center justify-content-between">
                        <p><FontAwesomeIcon icon={faBed} /> {bedrooms} bedrooms</p>
                        <p><FontAwesomeIcon icon={faShower} /> {bathroom} bathrooms</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                        <h3>${price}</h3>
                        <Link to={`/home/${id}`}>
                            <button className='btn-main'>
                                View Details
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeCard;