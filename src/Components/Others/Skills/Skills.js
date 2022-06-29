import React, { useEffect } from 'react';
import AnimatedLetters from '../../Animation/Font';
import './Skills.scss'
const Skills = ({ MySkillAnimate }) => {

    const options = {
        radius: 180,
        maxSpeed: 'fast',
        initSpeed: 'slow',
        direction: 500,
        keep: true,
    };

    const texts = [
        'HTML', 'CSS', 'JAVASCRIPT',
        'MONGOOSE', 'REACT', 'SASS',
        'NODEJS', 'MONGODB',
        'EXPRESS', 'NoSQL', 'JQUERY'
    ];

    useEffect(() => {
        const TagCloud = require('TagCloud');

        const container = '.tagcloud';

        TagCloud(container, texts, options);

    }, [])



    const SkillHeadAr = ['M', 'y', ' ', 'S', 'k', 'i', 'l', 'l', 's'];

    const barParent = 'skill_bar '


    return (
        <>
            <div id='Skills' className=' flex mt-10 justify-between lg:flex-row flex-col '>

                <div className='lg:w-1/2 w-full border-red-400 Border  flex flex-col justify-center items-center ' >
                    <h2 className='text-white text-5xl font-extrabold  block text-start' > <AnimatedLetters idx={15} letterClass={'text-animate'} strArray={SkillHeadAr} /> </h2>


                    <div className="lg:w-4/5 w-full text-white">

                        <div className={barParent}>
                            <div className="bar">
                                <div className="info">
                                    <span className=' ' >HTMl</span>
                                </div>
                                <div className="progress-line "> <span className=' animate animate1 w-[80%] after:content-["80%"] after:bg-black after:py-px after:px-2 after:rounded-md after:rounded-br-none after:-top-12  '   ></span> </div>
                            </div>
                        </div>



                        <div className={barParent}>
                            <div className="bar">
                                <div className="info">
                                    <span>Bootstrap</span>
                                </div>
                                <div className="progress-line "> <span className=' animate animate2 w-[80%] after:content-["80%"] after:bg-black after:py-px after:px-2 after:rounded-md after:rounded-br-none after:-top-12  '   ></span> </div>
                            </div>
                        </div>



                        <div className={barParent}>
                            <div className="bar">
                                <div className="info">
                                    <span>CSS</span>
                                </div>
                                <div className="progress-line "> <span className=' animate animate3 w-[80%] after:content-["80%"] after:bg-black after:py-px after:px-2 after:rounded-md after:rounded-br-none after:-top-12  '   ></span> </div>
                            </div>
                        </div>



                        <div className={barParent}>
                            <div className="bar">
                                <div className="info">
                                    <span>JavaScript</span>
                                </div>
                                <div className="progress-line "> <span className=' animate animate4  w-[70%] after:content-["70%"] after:bg-black after:py-px after:px-2 after:rounded-md after:rounded-br-none after:-top-12  '   ></span> </div>
                            </div>
                        </div>

                    </div>

                </div>

                <div className='lg:w-1/2 w-full flex justify-center items-center '  >
                    <div className="tagcloud"></div>
                </div>

            </div>
        </>
    )

};

export default Skills;