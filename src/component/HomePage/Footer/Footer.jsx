import React from 'react';
import './Footer.css';
import facebook from '../../../images/facebook.svg';
import instagram from '../../../images/instagram.svg';
import linkedin from '../../../images/linkedin.svg';

const Footer = () => {
  return (
    <div class='container-fluid contact-section mt-5'>
      <div class='container'>
        <div class='row row-cols-1 row-cols-md-2 row-cols-lg-4'>
          <div class='col d-flex align-items-start justify-content-start p-3'>
            <div>
              <h3 class='fs-2 fw-bold my-4 text-clr'>Sweet Home</h3>
              <p>Address: 60-49 Road 11378 New York</p>
              <p>Phone: +1 000 000 0000</p>
              <p>Email: sweethome@gmail.com</p>
              <div class='box'>
                <a href='#'>
                  <img
                    src={facebook}
                    style={{ width: '20px', height: '20px' }}
                    alt=''
                  />
                </a>
                <a href='#'>
                  <img
                    src={instagram}
                    style={{ width: '20px', height: '20px' }}
                    alt=''
                  />
                </a>
                <a href='#'>
                  <img
                    src={linkedin}
                    style={{ width: '20px', height: '20px' }}
                    alt=''
                  />
                </a>
              </div>
            </div>
          </div>
          <div class='col mt-1 mt-lg-0 d-flex align-items-start justify-content-start p-3'>
            <div>
              <h3 class='fs-4 fw-bold my-4 text-clr'>Information</h3>
              <p>About Us</p>
              <p>Checkout</p>
              <p>Contact</p>
              <p>service</p>
            </div>
          </div>
          <div class='col mt-1 mt-lg-0  d-flex align-items-start justify-content-start p-3'>
            <div>
              <h3 class='fs-4 fw-bold my-4 text-clr'>My Account</h3>
              <p>My Account</p>
              <p>Contact</p>
              <p>Service</p>
              <p>office</p>
            </div>
          </div>
          <div class='col mt-1 mt-lg-0  d-flex align-items-start justify-content-start p-3'>
            <div>
              <h3 class='fs-4 fw-bold my-4 text-clr'>
                Join Our Newsletter Now
              </h3>
              <p>
                Get E-mail updates about our latest News.
              </p>
              <input
                class='email-box'
                type='email'
                placeholder='Enter Your Mail'
              />
              <button type='button' class='btn-main mt-2'>
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <p>©2021. Sweet Home. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Footer;
