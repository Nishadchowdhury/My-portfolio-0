
import { siteArray } from '../../../Utils/Database/WebSiteData.js'
import './MyProjects.scss'
import AOS from 'aos';
import { useEffect } from 'react';
import SingleSite from './SingleSite.js';


const MyProjects = () => {

    useEffect(() => {
        AOS.init();
    })

    // const SingleSite = ({ Name, img, liveLink, idx }) => {

    //     return (
    //         <>



    //         </>
    //     )
    // }


    return (
        <div id='My_project'


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

                                return <SingleSite aosData="zoom-in" img={img} liveLink={liveLink} Name={Name} key={i} idx={i} />

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

                                return (<SingleSite aosData="zoom-in" img={img} liveLink={liveLink} Name={Name} key={i} idx={i} />)

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

export default MyProjects;