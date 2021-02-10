import React, { useEffect, useState } from 'react'
import '../style/Section1.css'
import H2 from "../files/sec1h2.png"
import Right from '../files/sec1right.png'

function Section1() {



    return (
        <div className="section1">
            <div className="section1__content">
                <button>BOOK A DEMO</button>
                <div className="section1__con">
                    <div className="section1__conLeft">
                        <h1>Powering Consumer</h1>
                        <h1>Experiences from </h1>
                        <h1>Anywhere</h1>
                        <img src={H2} alt="" />
                        <h3>ONE-TIME OFFER: Up to 50% off Dealer.com</h3>
                        <h3>Websites and Digital Retailing.*</h3>
                        <button>Reserve Your Demo</button>
                    </div>
                    <img src={Right} alt="" />
                </div>
                <p>*Applicable January 25th, 2021 through February 11th, 2021 only. Exclusions apply.​​</p>
            </div>
        </div>
    )
}

export default Section1
