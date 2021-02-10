import React, { useState } from 'react'
import '../style/Section3.css'
import Sec3_4 from '../files/sec3_1.png'
import Sec3_1 from '../files/sec3_11.png'
import Sec3_2 from '../files/sec3_2.png'
import Sec3_3 from '../files/sec3__3.png'
function Section3() {


    const [p1, setP1] = useState(true)
    const [p2, setP2] = useState(false)
    const [p3, setP3] = useState(false)
    const [p4, setP4] = useState(false)

    return (
        <div className="section3">
            <div className="section3__content">
                <h2><span>Our</span> SOLUTIONS</h2>
                <p>Dealer.com, our industry’s only end-to-end digital marketing solution backed by an unrivaled understanding of consumer behavior, delivers the technology and expertise to help dealers master their digital experiences.</p>
                <div className="section3__con">
                    <div className="section3__conLeft">
                        {p1 && <img src={Sec3_1} alt="" />}
                        {p2 && <img src={Sec3_2} alt="" />}
                        {p3 && <img src={Sec3_3} alt="" />}
                        {p4 && <img src={Sec3_4} alt="" />}
                    </div>
                    <div className="section3__conRight">
                        <div className="section3__con__item" onClick={() => {setP1(true); setP2(false); setP3(false); setP4(false)}}>
                            <div className= {p1 === true ? 'section3__sidebar' : 'section3__sidebar1'}>

                            </div>
                            {p1 === true ? 
                                <div className="section3__ins">
                                    <h4>Websites</h4>
                                    <p>Bring ease, efficiency, and delight to</p>
                                    <p> consumers shopping your Digital Storefront.</p>
                                    <span>Learn More →</span>
                                </div>
                                :
                                <h4>Websites</h4>
                        }
                        </div>
                        <div className="section3__con__item" onClick={() => {setP2(true); setP1(false); setP3(false); setP4(false)}}>
                            <div className= {p2 === true ? 'section3__sidebar' : 'section3__sidebar1'}>

                            </div>
                            {p2 === true ? <div className="section3__ins">
                                <h4>Digital Retailing</h4>
                                <p>Offer consumers the freedom, flexibility, and</p>
                                <p>convenience to complete their car-buying</p>
                                <p>experience right from your inventory pages.</p>
                                <span>Learn More →</span>
                            </div> : 
                            <h4>Digital Retailing</h4>
                            }
                        </div>
                        <div className="section3__con__item" onClick={() => {setP2(false); setP1(false); setP3(true); setP4(false)}}>
                            <div className= {p3 === true ? 'section3__sidebar' : 'section3__sidebar1'}>

                            </div>
                            {p3 === true ? <div className="section3__ins">
                                <h4>Managed Services</h4>
                                <p>Expand your marketing potential with a</p>
                                <p>specialized digital expertise focused on your </p>
                                <p>business.</p>
                                <span>Learn More →</span>
                            </div> : 
                            <h4>Managed Services</h4>
                            }
                        </div>
                        <div className="section3__con__item"onClick={() => {setP2(false); setP1(false); setP3(false); setP4(true)}}>
                            <div className= {p4 === true ? 'section3__sidebar' : 'section3__sidebar1'}>

                            </div>
                            {p4 === true ? <div className="section3__ins">
                                <h4>Advertising</h4>
                                <p>Foster vehicle and service demand with a</p>
                                <p>flexible, intelligent, and secure advertising</p>
                                <p>platform powered by data you won’t find</p>
                                <p>anywhere else.</p>
                                <span>Learn More →</span>
                            </div> : 
                            <h4>Advertising</h4>
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="section3__p">
                <h2>Our SOLUTIONS</h2>
                <p>Dealer.com, our industry’s only end-to-end digital marketing solution backed by an unrivaled understanding of consumer behavior, delivers the technology and expertise to help dealers master their digital experiences.</p>
                <div className="section3__p__item">
                    <img src={Sec3_1} alt="" />
                    <h4>Websites</h4>
                    <p>Bring ease, efficiency, and delight to consumers shopping your Digital Storefront.</p>
                    <span>Learn More</span>
                </div>
                <div className="section3__p__item">
                    <img src={Sec3_2} alt="" />
                    <h4>Digital Retailing</h4>
                    <p>Offer consumers the freedom, flexibility, and convenience to complete their car-buying experience right from your inventory pages.</p>
                    <span>Learn More</span>
                </div>
                <div className="section3__p__item">
                    <img src={Sec3_3} alt="" />
                    <h4>Managed Services</h4>
                    <p>Expand your marketing potential with a specialized digital expertise focused on your business.</p>
                    <span>Learn More</span>
                </div>
                <div className="section3__p__item">
                    <img src={Sec3_4} alt="" />
                    <h4>Advertising</h4>
                    <p>Foster vehicle and service demand with a flexible, intelligent, and secure advertising platform powered by data you won’t find anywhere else.</p>
                    <span>Learn More</span>
                </div>
            </div>
        </div>
    )
}

export default Section3
