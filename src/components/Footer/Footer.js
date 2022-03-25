import React from 'react';

import "./Footer.css";

const Footer = () => {
    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    {/* Column1 */}
                    <div className="col">
                        <h4>Contact Us</h4>
                        <ul className="list-unstyled">
                            <li>07919264225</li>
                            <li>Unit 24, Space Business Centre Olympus Park, Quedeley, Gloucester</li>
                            <li>glostermodels@gmail.com</li>
                        </ul>
                        </div>
                    {/* Column2 */}
                    <div className="col">
                        <h4>About Us</h4>
                        <ul className="list-unstyled">
                            <li>Location</li>
                        </ul>
                    </div>
                    {/* Column3 */}
                    <div className="col">
                        <h4>Social Media</h4>
                        <ul className="list-unstyled">
                        <i className="fab fa-facebook-f">
                        <span style={{ marginLeft: "10px" }}>
                            <a href="https://www.facebook.com/Gloster-Models-111043008150531">
                                Facebook
                            </a>
                        </span>
                        </i>
                        <i class="fa-brands fa-ebay">
                        <span style={{ marginLeft: "10px" }}>
                        Ebay
                        </span>
                        </i>
                            </ul>
                            </div>
                    <hr/>
                    <div className="row">
                        <p className="copyright">
                        &copy; {new Date().getFullYear()} Gloster Models    
                        </p>    
                    </div>        

                    </div>
                </div>
        </div>
    )
}

export default Footer;