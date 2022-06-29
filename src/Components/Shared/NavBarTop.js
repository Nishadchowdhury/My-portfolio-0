import React from 'react';
import whiteLogo from '../../Utils/img/N-white.png'
import blackLogo from '../../Utils/img/N-black.png'

const NavBarTop = () => {
    return (
        <div className='flex justify-between flex-row text-white h-16 border-b-2 px-4 items-center ' >
            <div> <span className="inline-block p-3 h-16 "> <img className='h-full' src={whiteLogo} alt="" /> </span></div>
            <div>
                <span className="inline-block h-9 p-3 ">Home</span>
                <a href='/#what_i_do' className="inline-block h-9 p-3 ">Services</a>
                <a href='/#Skills' className="inline-block h-9 p-3 ">Skills</a>
                <a href='/#My_project' className="inline-block h-9 p-3 ">My project</a>


            </div>
        </div>
    );
};

export default NavBarTop;