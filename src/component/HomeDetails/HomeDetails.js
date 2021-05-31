import React from 'react';
import { useParams } from 'react-router';
import './HomeDetails.css';
import { connect } from 'react-redux';

const mapStateToProps = state =>{
    return{
        homedata: state.homedata
    }
}

const Details = (props) => {
    const { id } = useParams();

    const selected = props.homedata.filter(home => home.id === Number(id));
    const { title, price, imgMain, common1, common2, common3, common4, smallDetails, rent, serviceCharge, securityDeposit, flatReleasePolicy, flatSize, floor, roomCategory, facilities, additionalFacilities, address } = selected[0];

    return (
        <section className='container details'>
            <img src={imgMain} alt="detail-main-img" />
            <div className="w-100 d-flex">
                <img src={common1} alt="common" className='details-thumb' />
                <img src={common2} alt="common" className='details-thumb' />
                <img src={common3} alt="common" className='details-thumb' />
                <img src={common4} alt="common" className='details-thumb' />
            </div>
            <div className="d-flex align-items-center justify-content-between pt-3 pb-4">
            {/* this is price of the home title and price */}
                <h2>{title}</h2>
                <h2>${price}</h2>
            </div>
            <p>{smallDetails}</p>
            <h2>Price Details -</h2>
            <p>Rent / month: ${rent}</p>
            <p>Service Charge: ${serviceCharge} / month, subject to change</p>
            <p>Security Deposit: {securityDeposit} months rent</p>
            <p>Flat release policy: {flatReleasePolicy} months earlier notice required</p>
            <h2>Property details -</h2>
            <p>Address & area: {address}</p>
            <p>Flat Size: {flatSize} square feet</p>
            <p>Floor: {floor[0]} ({floor[1]} floor) ({floor[2]} storyed building) ({floor[3]} facing unit)</p>
            <p>Room Category: {roomCategory}</p>
            <p>Facilities: {facilities}</p>
            <p>Additional Facilities: {additionalFacilities}</p>
        </section>
    );
};

export default connect(mapStateToProps) (Details);