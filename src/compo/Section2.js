import React from 'react'
import '../style/Section2.css'
import S2 from '../files/sec2.png'


function Section2() {
    return (
        <div className="section2"> 
            <div className="section2__con">
                <img src={S2} alt="" />
                <p>Bring your dealership to your customers! Build a digital storefront experience with Dealer.com, a Honda-certified website provider.</p>
            </div> 
        </div>
    )
}

export default Section2
