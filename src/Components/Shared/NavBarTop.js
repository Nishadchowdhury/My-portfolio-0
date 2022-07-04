import React, { useState } from 'react';
import whiteLogo from '../../Utils/img/N-white.png'
import './Navbar.css'


const NavBarTop = () => {

    const [show, setShow] = useState(false);

    const showNav = () => {
        setShow(!show)
    }

    const headerClass = "inline-block lg:px-5 p-2 lg:text-base text-sm  "

    return (
        <div className={` lg:rounded-t-[2.5rem] lg:pt-0 pt-1 flex justify-between lg:static transition-all duration-300 fixed top-0 ${show ? 'bg-transparent border-b-transparent' : 'bg-[#27272A] border-b-2'} w-full flex-row text-white  z-50  px-4 items-center `}>
            <div>  <a href='/#home' ><span className="inline-block lg:p-3 lg:h-16 h-10  "> <img className='h-full' src={whiteLogo} alt="" /> </span></a></div>
            <div>
                <div className={`lg:inline-block lg:mt-0 lg:opacity-100  ${show ? "-mt-32 opacity-0" : '-mt-0 opacity-100'} transition-all duration-300 `}   >

                    <a href='/#what_i_do' className={headerClass} >Services</a>
                    <a href='/#Skills' className={headerClass} >Skills</a>
                    <a href='/#My_project' className={headerClass} >My project</a>
                    <a href='/#contactMe' className={headerClass} >Contact</a>
                </div>



            </div>
            <button className='lg:hidden inline-block text-red-500 mr-3' onClick={showNav} >

                <section class="navigation__icon">
                    <span class={`${show ? 'topBar ' : 'topBarRotate '} `}></span>
                    <span class={`${show ? 'middleBar ' : 'middleBarRotate '} `}></span>
                    <span class={`${show ? 'bottomBar ' : 'bottomBarRotate '} `}></span>
                </section>
            </button>
        </div>
    );
};

export default NavBarTop;