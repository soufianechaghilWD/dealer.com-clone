import React, { useEffect, useState } from 'react'
import '../style/Header.css'
import Logo from '../files/logo.svg'

function Header() {

    const [solutions, setSolutions] = useState(false)
    const [resources, setResources] = useState(false)
    const [about, setAbout] = useState(false)
    const [solCont, setSolCont] = useState(false)
    const [resCont, setResCont] = useState(false)
    const [abouCont, setAbouCont] = useState(false)
    const [search, setSearch] = useState(false)
    const [height, setHeight] = useState(49)
    const [model, setModel] = useState(false)



    useEffect(() => {
        var x = document.getElementById('search')
        setHeight(x?.offsetHeight)
    }, [])



    return (
        <div className="header">
            <div className="header__content">
                {/* The PC Header */}
                <div className="header__content__pc">
                    <img src={Logo} alt="" />
                    {search === false ?
                    <div className="header__content__pc__items header__anim" id="search">
                        <p onMouseEnter={e => {setSolutions(true) ; setResources(false) ; setAbout(false)}} onMouseLeave={e => {if(solCont === false) setSolutions(false)}}>Solutions <i className="fa fa-chevron-down"></i></p>
                        <p onMouseEnter={e => {setResources(true); setAbout(false); setSolutions(false)}} onMouseLeave={e => {if(resCont === false) setResources(false)}}>Resources <i className="fa fa-chevron-down"></i></p>
                        <p>Success Stories</p>
                        <p onMouseEnter={e => {setAbout(true); setResources(false); setSolutions(false)}} onMouseLeave={e => {if(abouCont === false) setAbout(false)}}>About Us <i className="fa fa-chevron-down"></i></p>
                        <p>Suppport</p>
                    </div>
                    :
                    <div className="header__content__pc__search__body" style={{height: height}}>
                        <div className="header__search__body">
                            <div className="header__searchBox" style={{paddingRight: 10, display:'flex', border: '1px solid gray',borderRadius: 5, borderBottomLeftRadius: 5 , borderTop: "none", borderRight: "none", borderLeft: "none"}}>
                                <input type="text" placeholder="Search..." />
                                <p><i className="fa fa-search header__searchbar" style={{color: "gray"}} ></i></p>
                            </div>
                            <div className="header__sugg">
                                <h6>QUICK LINKS</h6>
                                <p>Websites</p>
                                <p>Managed Services</p>
                                <p>Digital Retailing</p>
                                <p>Advertising</p>
                            </div>
                        </div>
                        
                    </div>
                    }
                    <p onClick={e => setSearch(!search)}>{search === true ? <i className="fa fa-close"style={{paddingRight: 10}}></i> : <i className="fa fa-search" style={{paddingRight: 10}}></i>} Search</p>
                    <p><i className='fas fa-user-circle' style={{paddingRight: 10}}></i> Login</p>
                </div>
                {/* The subLists when the user hover on the nav items */}
                {
                    solutions && 
                    <div className="header__solutions" onMouseEnter={e => setSolCont(true)} onMouseLeave={e => {setSolutions(false); setSolCont(false)}}>
                        <div className="header__solutionsColm">
                            <h5>Websites</h5>
                            <p>Flexible Customization</p>
                            <p>Data-Driven Design</p>
                            <p>Optimized Experience</p>
                            <p>Digital Retailing</p>
                            <p>Specials and Incentives</p>
                        </div>
                        <div className="header__solutionsColm">                
                            <h5>Managed Services</h5>
                            <p>Content & Creative</p>
                            <p>Social & Reputation</p>
                            <p>SEO</p>
                            <p>Website Management</p>
                            <p>Home Services Promotion</p>
                        </div>
                        <div className="header__solutionsColm">                
                            <h5>Advertising</h5>
                            <p>Retargeting & Display</p>
                            <p>Paid Search</p>
                            <p>Social Advertising</p>
                            <p>Video Advertising</p>
                            <p>Strategy & Partnership</p>
                        </div>
                        <div className="header__solutionsColm">                
                            <h5>Integrated Partner Program</h5>
                            <h5>OEM Partners</h5>
                            <h5>Analytics</h5>
                        </div>
                    </div>
                }
                {
                    resources && 
                    <div className="header__resources" onMouseEnter={e => setResCont(true)} onMouseLeave={e => {setResources(false); setResCont(false)}}>
                        <p>Resource Library</p>
                        <p>Blog</p>
                        <p>Client Resources</p>
                    </div>
                }
                {
                    about && 
                    <div className="header__about" onMouseEnter={e => setAbouCont(true)} onMouseLeave ={e => {setAbout(false) ; setAbouCont(false)}} >
                        <p>Careers</p>
                        <p>News</p>
                        <p>Corporate Responsibility</p>
                        <p>Corporate Information</p>
                        <p>Contact Us</p>
                    </div>
                }
                
                <div className="header__content__ph">
                    <img src={Logo} alt="" />
                    <i className="fa fa-bars" onClick={e => setModel(!model)} ></i>

                </div>
                {
                    model && 
                    <div className="header__ph__content">
                        <div className="header__modelPh">
                            <div>
                                <input type="text" placeholder="Search..."/>
                                <i className="fa fa-search" style={{paddingRight: 10}}></i>
                            </div>
                        </div> 
                        <div className="header__ph__bu">
                            <button>BOOK A DEMO</button>
                        </div>
                    </div>
                }
                
            </div>
        </div>
    )
}

export default Header
