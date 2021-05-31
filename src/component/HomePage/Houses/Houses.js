import React from 'react';
import HomeCard from '../HomeCard/HomeCard';
import { connect } from 'react-redux'

const mapStateToProps = state =>{
    return{
        homedata: state.homedata
    }
}
const Houses = (props) => {
    return (
        <div className='container'>
            <h2 className='pt-5 pb-3 pl-5 heading'>Select your dream home</h2>
            <div className="row">
                {
                    props.homedata.map(home => <HomeCard key={home.id} home={home} />)
                }
            </div>
        </div>
    );
};

export default connect(mapStateToProps) (Houses);