import React from 'react';
import FB from '../../../Utils/SVG/FB.svg'
import gitH from '../../../Utils/SVG/gitHub.svg'
import In from '../../../Utils/SVG/LinkdIn.svg'


const Footer = () => {

    const Year = new Date().getFullYear();

    return (
        <div className=' h-36 flex flex-col justify-center items-center relative'>
            <div className='flex justify-center items-center gap-6 '>
                <a href="https://www.facebook.com/NishadChowdhury.fb/" target='_blank' rel="noreferrer" className='hover:-translate-y-2 transition-all hover:brightness-150 ' >  <img className='w-10    ' src={FB} alt="FB" /> </a>
                <a href="https://github.com/Nishadchowdhury/" target='_blank' rel="noreferrer" className='hover:-translate-y-2 transition-all hover:brightness-150 ' >  <img className='w-10   ' src={gitH} alt="gitH" /> </a>
                <a href="https://www.linkedin.com/in/nishadchowdhury/" target='_blank' rel="noreferrer" className='hover:-translate-y-2 transition-all hover:brightness-150 ' >  <img className='w-10    ' src={In} alt="In" /> </a>
            </div>

            <span className='absolute bottom-2 text-white' >All rights reserved 2020-{Year} </span>

        </div>
    );
};

export default Footer;