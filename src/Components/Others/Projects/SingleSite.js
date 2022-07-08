import React from 'react';
import BgSvg from '../../../Utils/img/bg.svg'

const SingleSite = ({ Name, img, liveLink, idx, aosData }) => {
    return (
        <div

            style={{
                backgroundImage: `url(${BgSvg})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }}

        >
            <div

                data-aos={aosData}
                className=' lg:block hidden projectTag h-[500px] mx-auto overflow-y-auto rounded-xl w-[400px] first-letter:' >
                <a href={liveLink} target={"_blank"} rel="noreferrer" className='box block  grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 '
                    style={{
                        backgroundImage: "url(" + img + ")",
                    }}
                > </a>
            </div>

            <div
                data-aos={aosData}

                className='p-3' >
                <div className=' lg:px-0  lg:hidden scale-95  projectTag max-h-[500px] mx-auto overflow-y-auto rounded-xl max-w-[400px] duration-300 ' >
                    <a href={liveLink} target={"_blank"} rel="noreferrer" > <img src={img} alt="" /></a>
                </div>
            </div>
        </div>
    );
};

export default SingleSite;