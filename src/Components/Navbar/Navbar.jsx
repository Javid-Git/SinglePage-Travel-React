import React, {useState} from "react";
import './navbar.css'
import  {SiYourtraveldottv} from 'react-icons/si'
import  {AiOutlineCloseCircle} from 'react-icons/ai'
import  {RxDragHandleDots2} from 'react-icons/rx'
export default function Navbar(){
    const [active, setActive] = useState(false)

    function toggle(){
        setActive(!active)
    }
    return(
        <section className="navbarSection">
            <header className="header flex">
                <div className="mainLogo">
                    <a href=""  className="logo flex">
                        <h1><SiYourtraveldottv className='icon' /> Travel</h1>
                    </a>
                </div>
                <div className={`${active ? 'navbar activeNavbar':'navbar'}`}>
                    <ul className="navlists flex">
                        <li className="navitem">
                            <a href="" className="navlink">
                                Home
                            </a>
                        </li>
                        <li className="navitem">
                            <a href="" className="navlink">
                                Packages
                            </a>
                        </li>
                        <li className="navitem">
                            <a href="" className="navlink">
                                Shop
                            </a>
                        </li>
                        <li className="navitem">
                            <a href="" className="navlink">
                                Pages
                            </a>
                        </li>
                        <li className="navitem">
                            <a href="" className="navlink">
                                News
                            </a>
                        </li>
                        <li className="navitem">
                            <a href="" className="navlink">
                                Contact
                            </a>
                        </li>
                        <button className={'btn'}>
                            <a href="" >BOOK NOW</a>
                        </button>
                    </ul>
                    <div onClick={toggle} className="closeNavbar">
                        <AiOutlineCloseCircle className={'icon'}/>
                    </div>
                </div>
                <div onClick={toggle} className="toggleNavbar">
                    <RxDragHandleDots2  className="icon" />
                </div>
            </header>
        </section>
    )
}