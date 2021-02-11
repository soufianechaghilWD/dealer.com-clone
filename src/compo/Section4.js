import React from 'react'
import '../style/Section4.css'
import Sec4__row__1 from '../files/sec4__row.jpg'
import Sec4__row__2 from '../files/sec4__row1__1.png'
import Sec4__row2 from '../files/sec4__row2.png'
import Sec4__row2__1 from '../files/sec4__row2__2.png'

function Section4() {
    return (
        <div className="section4">
            <h1>Insights</h1>
            <p>Your go-to source for industry news, digital marketing best practices, and</p>
            <p> thought leadership to drive results at your dealership.</p>
            <div className="section4__SEO">
                <div className="section4__SEO__left">
                    <h2>ARTICLE</h2>
                    <h3>Partner with SEO Experts to</h3>
                    <h3>Pass the Competition</h3>
                    <br />
                    <br />
                    <p>It has been a whirlwind year for the</p>
                    <p>automotive industry. In order to keep pace</p>
                    <p>with change, consumers are adopting new</p>
                    <p>ways of navigating the vehicle ownership</p>
                    <p>cycle while keeping themselves and their</p>
                    <p>families safe. Whether they’re in the…</p>
                    <span>November 3, 2020</span>
                </div>
                <div className="section4__SEO__pic">
                </div>
            </div>
            <div className="section4__row">
                <div className="section4__col">
                    <img src={Sec4__row__1} alt="" />
                    <h2>ARTICLE</h2>
                    <h3>A New Focus On The “Online to In-Store” Consumer Experience</h3>
                    <span>March 24, 2020</span>
                    <p>For the last few years, dealers have put significant focus into how best to bridge the online and in-store consumer experiences into a singular, cohesive shopping journey...</p>
                </div>
                <div className="section4__col">
                    <img src={Sec4__row__2} alt="" />
                    <h2>ARTICLE</h2>
                    <h3>Prioritize Relevant and Current Content on Your Digital Channels</h3>
                    <span>April 6, 2020</span>
                    <p>Whether you have mandated store closures in heavily impacted areas in the country, you are located in an area where the concern is growing, or in a location where it’s...</p>
                </div>
            </div>
            <div className="section4__row">
                <div className="section4__col">
                    <img src={Sec4__row2} alt="" />
                    <h2>ARTICLE</h2>
                    <h3>Data, Insights and Opportunities in the Age of Social Distancing</h3>
                    <span>April 14, 2020</span>
                    <p>The US is a diverse place, and as a result, we see diversity within Dealer.com data. While we’ve generalized our findings in this post, every dealership’s story about...</p>
                </div>
                <div className="section4__col">
                    <img src={Sec4__row2__1} alt="" />
                    <h2>ARTICLE</h2>
                    <h3>Digital Advertising as the Car Shopping Experience Evolves</h3>
                    <span>April 8, 2020</span>
                    <p>By Scott Blodgett  As car shopping moves from traditional retail to an online...</p>
                </div>
            </div>
            <button>MORE INSIGHTS</button>
        </div>
    )
}

export default Section4
