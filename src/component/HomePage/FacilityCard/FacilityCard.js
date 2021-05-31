import React from 'react';
import './FacilityCard.css';

const FacilityCard = ({ facility }) => {
    const { logo, title, details } = facility;
    return (
        <div className='col-lg-4 col-md-6 facilitycard text-center p-3'>
            <img src={logo} alt="facility" />
            <h3 className='py-2 py-md-3'>{title}</h3>
            <p>{details}</p>
        </div>
    );
};

export default FacilityCard;