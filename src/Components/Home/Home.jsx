import React from "react";
import './home.css'
import video from '../../Pics and Videos/video.mp4';
import {CiLocationArrow1} from 'react-icons/ci'
import {AiOutlineFilter} from 'react-icons/ai'
import {FiFacebook, FiInstagram, FiList} from 'react-icons/fi'
import {TbApps} from 'react-icons/tb'
import {SiTripadvisor} from 'react-icons/si'
export default function Home(){
    return(
        <section className="home">
             <div className="overlay">
                 
             </div>
            <video src={video} muted autoPlay loop type='video/mp4'></video>
            <div className="homeContent container">
                <div className="textDiv">
                    <span className="smallText">
                        Out packages
                    </span>
                    <h1 className="homeTitle">
                        Search your Holiday
                    </h1>
                </div>
                <div className="cardDiv grid">
                    <div className="destInput">
                        <label htmlFor="city">Search your destination:</label>
                        <div className="input flex">
                            <input type="text" placeholder={'Enter name here ...'}/>
                            <CiLocationArrow1 className={'icon'}/>
                        </div>
                    </div>
                    <div className="dateInput">
                        <label htmlFor="date">Select your date:</label>
                        <div className="input flex">
                            <input type="date" />
                        </div>
                    </div>
                    <div className="priceInput">
                        <div className="label_total flex">
                            <label htmlFor="price">Max price:</label>
                            <h3 className="total">$5000</h3>
                        </div>
                        <div className="input flex">
                            <input type="range" max={'5000'} min={'1000'}/>
                        </div>
                    </div>
                    <div className="searchOptions flex">
                        <AiOutlineFilter className={'icon'}/>
                        <span>MORE FILTERS</span>
                    </div>
                </div>
                <div className="homeFooterIcons flex">
                    <div className="rightIcons">
                        <FiFacebook className={'icon'}/>
                        <FiInstagram className={'icon'}/>
                        <SiTripadvisor className={'icon'}/>
                    </div>
                    <div className="leftIcons">
                        <FiList className={'icon'}/>
                        <TbApps className={'icon'}/>

                    </div>
                </div>
            </div>
        </section>
    )
}