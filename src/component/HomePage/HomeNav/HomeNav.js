import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png';
import { connect } from 'react-redux';

const mapStateToProps = state =>{
    return{
        isLogged: state.loggedUserData
    }
}

const HomeNav = (props) => {
    console.log(props);
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand as={Link} to='/' className='pl-5'>
                <img src={logo} alt="logo" style={{height:'40px'}} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto pr-5">
                        <Nav.Link as={Link} to='/'>Home</Nav.Link>
                        <Nav.Link as={Link} to='/'>Service</Nav.Link>
                        <Nav.Link as={Link} to='/'>Contact</Nav.Link>
                        <Nav.Link as={Link} to='/booking/list'>Dashboard</Nav.Link>
                    <Nav.Link 
                    as={Link} 
                    to={props.isLogged.displayName ?  '' :'/login'} 
                    className={props.isLogged.displayName ? '':'btn-main'} 
                    style={{color:props.isLogged.displayName ? 'black':'white',fontWeight:props.isLogged.displayName ? '800':'',textAlign:props.isLogged.displayName ? '':'center'}}>
                        {
                            props.isLogged.displayName ?  props.isLogged.displayName :'Login'
                        }
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default connect(mapStateToProps) (HomeNav);