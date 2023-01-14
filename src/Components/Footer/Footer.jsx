import React, {useEffect} from "react";
import './footer.css'
import video2 from '../../Pics/video2.mp4';
import {AiOutlineSend} from 'react-icons/ai'
import {SiYourtraveldottv} from 'react-icons/si'
import {BiChevronRight} from 'react-icons/bi'
import {FaTwitter, FaYoutube, FaTripadvisor, FaInstagram} from 'react-icons/fa'
import Aos from "aos";
export default function Footer(){
    useEffect(()=>{
        Aos.init({duration: 2000})
    },[])
    return(
        <section className="footer">
            <div className="videoDiv">
                <video src={video2} loop autoPlay muted type={'video/mp4'}></video>
            </div>
            <div className="sectionContent container">
                <div className="contactDiv flex">
                    <div data-aos={'fade-up'} className="text">
                        <small>KEEP IN TOUCH</small>
                        <h2>Travel with us</h2>
                    </div>
                    <div data-aos={'fade-up'} className="inputDiv flex">
                        <input  type="text" placeholder={'Enter Email Address'}/>
                        <button className="btn flex" type={"submit"}>
                            SEND <AiOutlineSend className={'icon'}/>
                        </button>
                    </div>
                </div>
                <div data-aos={'fade-up'} className="footerCard flex">
                    <div className="footerIntro flex">
                        <div className="logoDiv">
                            <a href="" className="logo flex">
                                <SiYourtraveldottv className={'icon'}/> Shtarel
                            </a>
                        </div>
                        <div data-aos={'fade-up'} className="footerParagraph">
                            Tourism comprises the activities of persons travelling to and staying in places outside their usual environment for not more than one consecutive year (12 months) for leisure, business or other purposes.
                        </div>
                        <div data-aos={'fade-up'} className="footerSocials">
                            <FaTwitter className={'icon'}/>
                            <FaYoutube className={'icon'}/>
                            <FaInstagram className={'icon'}/>
                            <FaTripadvisor className={'icon'}/>
                        </div>
                    </div>
                    <div className="footerLink grid">
                        <div data-aos={'fade-up'} data-aos-duration={2000} className="linkGroup">
                            <span className="groupTitle">
                                OUR AGENCY
                            </span>
                            <li className="footerList flex">
                                <BiChevronRight className={'icon'}/>
                                Services
                            </li>
                            <li className="footerList flex">
                                <BiChevronRight className={'icon'}/>
                                Insurance
                            </li>
                            <li className="footerList flex">
                                <BiChevronRight className={'icon'}/>
                                Agency
                            </li>
                            <li className="footerList flex">
                                <BiChevronRight className={'icon'}/>
                                Tourism
                            </li>
                            <li className="footerList flex">
                                <BiChevronRight className={'icon'}/>
                                Payment
                            </li>
                        </div>
                        <div data-aos={'fade-up'} data-aos-duration={3000} className="linkGroup">
                            <span className="groupTitle">
                                PARTNERS
                            </span>
                            <li className="footerList flex">
                                <BiChevronRight className={'icon'}/>
                                Bookings
                            </li>
                            <li className="footerList flex">
                                <BiChevronRight className={'icon'}/>
                                Rentcars
                            </li>
                            <li className="footerList flex">
                                <BiChevronRight className={'icon'}/>
                                Hostel
                            </li>
                            <li className="footerList flex">
                                <BiChevronRight className={'icon'}/>
                                Trivago
                            </li>
                            <li className="footerList flex">
                                <BiChevronRight className={'icon'}/>
                                Trip Advisor
                            </li>
                        </div>
                        <div data-aos={'fade-up'} data-aos-duration={4000} className="linkGroup">
                            <span className="groupTitle">
                                LAST MINUTE
                            </span>
                            <li className="footerList flex">
                                <BiChevronRight className={'icon'}/>
                                London
                            </li>
                            <li className="footerList flex">
                                <BiChevronRight className={'icon'}/>
                                California
                            </li>
                            <li className="footerList flex">
                                <BiChevronRight className={'icon'}/>
                                Indonesia
                            </li>
                            <li className="footerList flex">
                                <BiChevronRight className={'icon'}/>
                                Europe
                            </li>
                            <li className="footerList flex">
                                <BiChevronRight className={'icon'}/>
                                Oceania
                            </li>
                        </div>

                    </div>
                    <div className="footerDiv flex">
                        <small>BY JAVID ALIZADA</small>
                        <small>COPYRIGHTS RESERVED</small>
                    </div>
                </div>
            </div>
        </section>
    )
}