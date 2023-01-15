import React, {useEffect} from "react";
import './main.css';

import {BiCurrentLocation} from 'react-icons/bi'
import {BsClipboardCheck} from 'react-icons/bs'
import Aos from "aos";
export default function Main(props){
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
                        props.tours !== undefined ?
                        props.tours.map((x)=>{
                            return(
                                <div data-aos={'fade-up'} key={x.id} className="singleDestination">
                                    <div className="imageDiv">
                                        <img src={x.imgSrc} alt={x.title}/>
                                    </div>
                                    <div className="cardInfo">
                                        <h4 className="destinationTitle">
                                            {x.title}
                                        </h4>
                                        <span className="continent flex">
                                            <BiCurrentLocation className={'icon'}/>
                                            <span className="name">{x.location}</span>
                                        </span>
                                        <div className="fees flex">
                                            <div className="classify">
                                                <span>{x.classify}<small>+1</small></span>
                                            </div>
                                            <div className="price">
                                                <h5>{x.price} $</h5>
                                            </div>
                                        </div>
                                        <div className="description">
                                            <p>{x.description}</p>
                                        </div>
                                        <button className={'btn flex'}>
                                            DETAILS<BsClipboardCheck className={'icon'}/>
                                        </button>
                                    </div>
                                </div>
                            )
                        }) : <div className="middler">Nothing Found</div>
                    }
                </div>
            </div>
        </section>
    )
}