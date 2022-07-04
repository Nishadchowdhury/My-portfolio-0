import React, { useEffect } from 'react';
import BgSvg from '../../../Utils/img/bg.svg'
import { siteArray } from '../../../Utils/Database/WebSiteData.js'
import './My_projects.scss'
import AOS from 'aos';


const My_projects = () => {

    useEffect(() => {
        AOS.init();
    })

    const SingleSite = ({ Name, img, liveLink, idx }) => {

        return (
            <div className={"_project" + JSON.stringify(idx)}
                data-aos="fade-up"
            >
                <div className=' lg:block hidden grayscale hover:grayscale-0 projectTag h-[500px] mx-auto overflow-y-auto rounded-xl w-[400px] opacity-60 hover:opacity-100 duration-300 ' >
                    <a href={liveLink} target={"_blank"} rel="noreferrer" className='box block'
                        style={{
                            backgroundImage: "url(" + img + ")",
                        }}
                    > </a>
                </div>

                <div className='p-3' >
                    <div data-aos="fade-in" className=' lg:px-0  lg:hidden scale-95  projectTag max-h-[500px] mx-auto overflow-y-auto rounded-xl max-w-[400px] duration-300 ' >
                        <a href={liveLink} target={"_blank"} rel="noreferrer" > <img className='' src={img} alt="" /></a>
                    </div>
                </div>


            </div>
        )
    }


    return (
        <div id='My_project'

            style={{
                backgroundImage: "url(" + BgSvg + ")",

            }}
            className='py-10 ' >

            <div className='flex text-white pb-4' >
                <h1 className='inline-block mx-auto uppercase' >
                    <span className="pl-1 inline-block border-b-[3px] pb-2 border-blue-500" >Here is some Of  my</span>
                    <span className=" pr-1 inline-block border-b-[3px] pb-2 border-gray-400 pl-1" > Projects </span>
                </h1>
            </div>


            <div className='flex lg:justify-around lg:flex-row flex-col relative' >

                <div className='py-16  lg:w-1/2 flex flex-col gap-16 filter' >


                    {
                        siteArray.map(({ Name, liveLink, img }, i) => {

                            if ((JSON.parse(i) + 1) % 2 !== 0) {

                                return <SingleSite img={img} liveLink={liveLink} Name={Name} key={i} idx={i} />

                            } else {
                                return ""
                            }

                        })
                    }

                </div>

                <div className='w-[1px] h-full border-[1px] border-gray-400 lg:visible absolute invisible ' ></div>

                <div className='py-16  lg:w-1/2 flex flex-col gap-16 filter' >


                    {
                        siteArray.map(({ img, liveLink, Name, }, i) => {

                            if ((JSON.parse(i) + 1) % 2 === 0) {

                                return (<SingleSite img={img} liveLink={liveLink} Name={Name} key={i} idx={i} />)

                            } else {
                                return ""
                            }


                        })
                    }




                </div>

            </div>


        </div>
    );
};

export default My_projects;