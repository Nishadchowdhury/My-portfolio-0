import React, { useEffect } from 'react';
import AnimatedLetters from '../../Animation/Font';
import './Skills.scss'
import { skillData } from '../../../Utils/Database/WebSiteData'
const Skills = () => {

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

    const barParent = 'skill_bar '

    const SkillHeadAr = ['M', 'y', ' ', 'S', 'k', 'i', 'l', 'l', 's'];

    return (
        <>
            <div id='Skills' className=' flex mt-10 justify-between lg:flex-row flex-col '>

                <div className='lg:w-1/2 w-full border-red-400 Border  flex flex-col justify-center items-center ' >
                    <h2 className='text-white text-5xl font-extrabold  block text-start' > <AnimatedLetters idx={15} letterClass={'text-animate'} strArray={SkillHeadAr} /> </h2>


                    <div className="lg:w-4/5 w-full text-white">

                        {
                            skillData.map(({ Knowledge, SVG, SkillName, UsedIn }, i) => {

                                return (<div key={i} className={barParent}>
                                    <div className="bar">
                                        <div className="info">
                                            <span className=' ' >{SkillName}</span>
                                        </div>
                                        <div className="progress-line "> <span
                                            style={{
                                                width: `${Knowledge + '%'}`,
                                            }}
                                            className={`animate animate1  `}   >

                                            <h3 className='inline-block absolute right-0 -top-[30px] rounded-br-none text-gray-400 border-blue-400 border-[1px] bg-[#27272A] rounded-lg px-1 ' > {Knowledge + "%"}</h3>
                                        </span>

                                        </div>
                                    </div>
                                </div>)
                            })
                        }


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