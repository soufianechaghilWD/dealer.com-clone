import React from 'react'
import '../style/Section6.css'
import Sec6 from '../files/sec6.png'

function Section6() {
    return (
        <div className="section6">
            <h1>Customer TESTIMONIALS</h1>
            <div className="section6__con">
                <img src={Sec6} alt="" />
                <div className="section6__con__te">
                    <h2>"The data tells a story"</h2>
                    <p>The automotive landscape has changed in the last 20 years, obviously. The way consumers absorb information has completely changed. And dealer.com has helped us bridge that gap and get them information in the way that they want to view things. It tells us who we want to market to, where we can reach that customer, what product to serve to them, what platform to serve it on. And Dealer.com's able to provide us all of that information and data.</p>
                    <span>Amy Nail, Marketing Director, Jim Koons Automotive</span>
                </div>
            </div>
            <button>SHOW MORE</button>
        </div>
    )
}

export default Section6
