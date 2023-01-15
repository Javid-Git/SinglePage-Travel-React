import React, {useEffect, useState} from "react";
import './home.css';
import video from '../../Pics/video.mp4';
import {CiLocationArrow1} from 'react-icons/ci';
import {AiOutlineFilter} from 'react-icons/ai';
import {FiFacebook, FiInstagram, FiList} from 'react-icons/fi';
import {TbApps} from 'react-icons/tb';
import {SiTripadvisor} from 'react-icons/si';
import Aos from 'aos';
import data from '../../Components/Data/data'
import 'aos/dist/aos.css';
import {Slider} from "@mui/material";
import Main from "../Main/Main";

export default function Home(){
    const [formData, setFormData] = useState({
        location: '',
        date: '',
        price: 0
    })
    const [tours, setTours]= useState(data.data)
    useEffect(()=>{
        Aos.init({duration: 2000})
    },[])

    function formInfo(e){
        const {name, value} = e.target
        setFormData(oldFormData=>({
            ...oldFormData,
                [name]: value
        }))
    }
    function submitForm(e) {
        e.preventDefault()
        const tempArray = [];
        for (let i = 0; i < data.data.length; i++){
            if (data.data[i].title.toLowerCase().includes(formData.location.toLowerCase()) || data.data[i].location.toLowerCase().includes(formData.location.toLowerCase())){
                console.log('asdsa')
                if (formData.price !== 0){
                    if(data.data[i].price <= formData.price){
                        console.log('asdsa')
                        tempArray.push(data.data[i])
                    }
                }else{
                    tempArray.push(data.data[i])
                    console.log('fffffffff')
                }
            }
        }
        if (tempArray.length === 0){
            setTours(undefined)
        }else{
            setTours(tempArray)
        }
    }
    return(
        <div>
            <section className="home">
                <div className="overlay">

                </div>
                <video src={video} muted autoPlay loop type='video/mp4'></video>
                <div className="homeContent container">
                    <div className="textDiv">
                    <span data-aos={'fade-up'} className="smallText">
                        Out packages
                    </span>
                        <h1 data-aos={'fade-up'} className="homeTitle">
                            Search your Holiday
                        </h1>
                    </div>
                    <form action='' onSubmit={submitForm} data-aos={'fade-up'} className="cardDiv grid">
                        <div className="destInput">
                            <label htmlFor="city">Search your destination:</label>
                            <div className="input flex">
                                <input onChange={formInfo} name={'location'} type="text" value={formData.location} placeholder={'Enter name here ...'}/>
                                <CiLocationArrow1 className={'icon'}/>
                            </div>
                        </div>
                        <div  className="dateInput">
                            <label htmlFor="date">Select your date:</label>
                            <div className="input flex">
                                <input  onChange={formInfo} value={formData.date} name={'date'} type="date" />
                            </div>
                        </div>
                        <div className="priceInput">
                            <div className="label_total flex">
                                <label htmlFor="price">Max price:</label>
                            </div>
                            <div className="input flex">
                                {/*<input  type="range" max={'5000'} min={'1000'} value={'0'} id={'rangeSlider'}/>*/}
                                <Slider onChange={formInfo} name={'price'}  color="warning" defaultValue={0}  min={0} max={5000} aria-label="Default" valueLabelDisplay="auto" />
                            </div>
                        </div>
                        <div className="searchOptions flex">
                            <AiOutlineFilter className={'icon'}/>
                            <button>MORE FILTERS</button>
                        </div>
                    </form>
                    <div data-aos={'fade-up'} className="homeFooterIcons flex">
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
            <Main tours = {tours}/>
        </div>
    )
}