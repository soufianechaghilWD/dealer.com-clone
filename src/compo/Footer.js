import React from 'react'
import '../style/Footer.css'
import Foote from '../files/footer.png'

function Footer() {
    return (
        <div className="footer">
            <div className='footer__con'>
                <div className="footer__conLeft">
                    <p><i className="fa fa-twitter"></i></p>
                    <p><i className="fa fa-facebook-f"></i></p>
                    <p><i className="fa fa-linkedin-square"></i></p>
                    <p><i className="fa fa-youtube-play"></i></p>
                    <p><i className="fa fa-instagram"></i></p>
                </div>
                <div className="footer__conDi">

                </div>
                <div className="footer__conRight">
                    <p>Copyright © 2001-2021 Cox Automotive Inc. All Rights Reserved</p>
                    <div>
                        <p>Privacy Policy</p>
                        <div></div>
                        <p>Terms of Use</p>
                    </div>
                </div>
            </div>

            <img src={Foote} alt="" />

        </div>
    )
}

export default Footer
