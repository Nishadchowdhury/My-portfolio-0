import React from 'react';
import BgSvg from '../../../Utils/img/bg.svg'
import data from '../../../Utils/Database/WebSiteData.js'


const My_projects = () => {

    const SingleSite = ({ Name, img, liveLink, idx }) => {

        return (
            <div className={"_project" + JSON.stringify(idx)}>
                <div className='max-h-[500px] mx-auto overflow-y-auto max-w-[400px] opacity-60 hover:opacity-100 duration-300 ' >
                    <img className='' src={img} alt="" />
                </div>
            </div>
        )
    }


    return (
        <div
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
                        data.map(({ Name, liveLink, img }, i) => {

                            if ((JSON.parse(i) + 1) % 2 !== 0) {
                                return (

                                    <SingleSite img={img} liveLink={liveLink} Name={Name} key={i} idx={i} />
                                )
                            }
                        })
                    }

                </div>

                <div className='w-[1px] h-full border-[1px] border-gray-400 lg:visible absolute invisible ' ></div>

                <div className='py-16  lg:w-1/2 flex flex-col gap-16 filter' >


                    {
                        data.map(({ img, liveLink, Name, }, i) => {

                            if ((JSON.parse(i) + 1) % 2 === 0) {
                                return (
                                    <SingleSite img={img} liveLink={liveLink} Name={Name} key={i} idx={i} />
                                )
                            } else {
                                return
                            }



                        })
                    }




                </div>

            </div>



        </div>
    );
};

export default My_projects;