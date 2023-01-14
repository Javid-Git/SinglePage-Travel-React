import React, {useEffect} from "react";
import './main.css';

import data from '../../Components/Data/data';
import {BiCurrentLocation} from 'react-icons/bi'
import {BsClipboardCheck} from 'react-icons/bs'
import Aos from "aos";
export default function Main(){
    useEffect(()=>{
        Aos.init({duration: 1000})
    },[])
    return(
        <section className="section mainSection container">
            <div className="sectionTitle">
                <h3 className="title">
                    Popular destinations
                </h3>
                <div className="sectionContent grid">
                    {
                        data.data.map(({id, imgSrc, title, location, classify, price, description})=>{
                            return(
                                <div data-aos={'fade-up'} key={id} className="singleDestination">
                                    <div className="imageDiv">
                                        <img src={imgSrc} alt={title}/>
                                    </div>
                                    <div className="cardInfo">
                                        <h4 className="destinationTitle">
                                            {title}
                                        </h4>
                                        <span className="continent flex">
                                            <BiCurrentLocation className={'icon'}/>
                                            <span className="name">{location}</span>
                                        </span>
                                        <div className="fees flex">
                                            <div className="classify">
                                                <span>{classify}<small>+1</small></span>
                                            </div>
                                            <div className="price">
                                                <h5>{price}</h5>
                                            </div>
                                        </div>
                                        <div className="description">
                                            <p>{description}</p>
                                        </div>
                                        <button className={'btn flex'}>
                                            DETAILS<BsClipboardCheck className={'icon'}/>
                                        </button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}