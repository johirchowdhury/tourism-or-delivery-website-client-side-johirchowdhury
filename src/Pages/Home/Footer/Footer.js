import React from 'react';

const Footer = () => {
    return (
        <footer className="page-footer font-small bg-dark text-white pt-4">
            <div className="container-fluid text-center text-md-left">
                <div className="row">
                    <div className="col-md-6 mt-md-0 mt-3">
                        <h5 className="text-uppercase">About Us</h5>
                        <p>obokash is a trusted and reliable tour and travel agency among all the leading and updated tour-operating services in Bangladesh. We are here to bring the luxury to your traveling. obokash is a proud member of Association of Travel Agents of Bangladesh-ATAB and Tour Operators Association of Bangladesh.</p>
                    </div>

                    <hr className="clearfix w-100 d-md-none pb-0" />

                    <div className="col-md-3 mb-md-0 mb-3">
                        <h5 className="text-uppercase">Contact Us</h5>
                        <ul className="list-unstyled">
                            <li><a href="#!">Dhanmondi, Dhaka</a></li>
                            <li><a href="#!">Get Direction on Google Map</a></li>
                            <li><a href="#!">016743828548</a></li>
                            <li><a href="#!">ask@obokash.com</a></li>
                        </ul>
                    </div>

                    <div className="col-md-3 mb-md-0 mb-3">
                        <h5 className="text-uppercase">Quick Link</h5>
                        <ul className="list-unstyled">
                            <li><a href="#!">Company Overview</a></li>
                            <li><a href="#!">Message From CEO</a></li>
                            <li><a href="#!">Tour Packages</a></li>
                            <li><a href="#!">Visa Service</a></li>
                            <li><a href="#!">Blog</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer-copyright text-center py-3">© 2020 Copyright:
                <a href="https://johirchowdhury.com/"> Johir Chowdhury</a>
            </div>

        </footer>
    );
};

export default Footer;