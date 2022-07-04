// import React, { useState } from 'react';
import './Navbar.css'
// import $ from 'jquery';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from 'react';



const Navbar = () => {

    const [navOpen, setVavOpen] = useState('navigation');

    const [header, setHeader] = useState('navigation');

    const navToggle = () => {

        if (navOpen.includes("navigation-open")) {
            setVavOpen('navigation')
        } else {
            setVavOpen('navigation navigation-open')
        }

        if (header.includes('header')) {
            setHeader('noHeader')
        } else {
            setHeader('header')
        }


    }

    return (
        <section className='lg:hidden fixed z-50 '>
            <nav class={` ${navOpen.includes('navigation-open') ? 'headerGray' : 'noHeader'} ${header}`}>

                <div class={navOpen}>

                    {/* <section class="logo"></section> */}

                    <section onClick={navToggle} class="navigation__icon">
                        <span class="topBar"></span>
                        <span class="middleBar"></span>
                        <span class="bottomBar"></span>
                    </section>

                    <ul class="navigation__ul">
                        <li onClick={navToggle}><a href="/#home">HOME</a></li>
                        <li onClick={navToggle}><a href="/#Projects">Projects</a></li>
                        <li onClick={navToggle}><a href="/#aboutMe">About Me</a></li>
                        <li onClick={navToggle}><Link to="/blogs">Blogs</Link></li>
                        <li onClick={navToggle}>


                            <a
                                href="javascript:void(
        window.open(
          'https://form.jotform.com/221594871934466',
          'blank',
          'scrollbars=yes,
          toolbar=no,
          width=700,
          height=500'
        )
      )
    ">
                                Contact me
                            </a>
                        </li>
                    </ul>

                    <section class="navigation__social">
                        <ul class="navigation__social-ul">
                            <li>
                                <a href="" class="social-icon"></a>
                            </li>
                            <li>
                                <a href="" class="social-icon"></a>
                            </li>
                            <li>
                                <a href="" class="social-icon"></a>
                            </li>
                            <li>
                                <a href="" class="social-icon"></a>
                            </li>
                        </ul>
                    </section>

                </div>

            </nav>
        </section>
    );
};

export default Navbar;