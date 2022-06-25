import React, { useState } from 'react';
import './Home.scss';

import avatar from '../../Utils/img/avatar.jpg';
import AnimatedLetters from '../Animation/Font';
import NavBarTop from '../Shared/NavBarTop';

const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ['N', 'i', 's', 'h', 'a', 'd', ' ', 'C', 'h', 'o', 'w', 'd', 'h', 'u', 'r', 'y'];
    const jobArray = ['W', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r'];

    return (
        <>


            <div className=' flex justify-center items-center' >


                <div className='bg-zinc-800 lg:my-12 lg:w-[90%] w-full min-h-[200px] lg:rounded-[2.5rem]  ' >
                    <NavBarTop />

                    <div className="flex justify-center lg:flex-row flex-col lg:px-16 px-6 my-14 ">


                        <div className='lg:w-2/5  flex items-center justify-center  ' >
                            <div className="w-[300px] h-[300px] border-8 rounded-full bg-cover "
                                style={{ backgroundImage: "url(" + avatar + ")", }}
                            >

                            </div>
                        </div>

                        <div className=" text-white lg:w-[60%] flex justify-center flex-col lg:mt-0 mt-10 ">

                            <span className='inline-block mb-4 fadeIn_1' >Web Developer With React.js</span>

                            <span>
                                <h2
                                    className="lg:text-5xl text-3xl font-extrabold" >
                                    <AnimatedLetters
                                        letterClass={letterClass}
                                        strArray={nameArray}
                                        idx={15}
                                    />
                                </h2>
                            </span>

                            <p className='mt-4 fadeIn_3'>
                                I am a Front-end web developer. Basically, I am a MERN stack developer. I have mid-level experience in building some web application sites with NoSQL DB (MongoDB). My dream is, I'll be a sincerely serious developer.
                            </p>

                            <div className=' mt-4 lg:mx-0 mx-auto ' >
                                <button className='btn  border-2 border-r-0 border-blue-500 px-4 py-2 rounded-full rounded-r-none transition-all active:opacity-70 ' >
                                    <span className='active:scale-95 inline-block ' >Download Resume</span>
                                </button>

                                <button className='btn border-2  border-l-0 border-blue-200 px-4 py-2 rounded-full rounded-l-none  transition-all active:opacity-70 ' >
                                    <span className='active:scale-95 inline-block ' >Contact</span>
                                </button>
                            </div>

                        </div>

                    </div>

                </div>


            </div>
        </>
    );
};

export default Home;