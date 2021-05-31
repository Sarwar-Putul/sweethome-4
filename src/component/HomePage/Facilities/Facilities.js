import React from 'react';
import FacilityCard from '../FacilityCard/FacilityCard.js'
import { connect } from 'react-redux'

const mapStateToProps = state =>{
    return{
        facilities: state.facilities
    }
}
const Facilities = (props) => {
    return (
        <section className='container py-5'>
            <h2 className="pl-5 pt-5 pb-3 heading">Our Facilities</h2>
            <div className="row">
                {
                    props.facilities.map(facility => <FacilityCard key={facility.id} facility={facility} />)
                }
            </div>
        </section>
    );
};

export default connect(mapStateToProps) (Facilities);