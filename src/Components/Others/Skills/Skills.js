import React, { useEffect } from 'react';
import './Skills.scss'
const Skills = () => {



    const options = {
        radius: 230,
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




    return (
        <>
            <div className=' flex justify-between '>

                <div className='w-1/2 bg-red-400 ' >
                    <span className='text-white text-5xl font-extrabold' >  Me &#38; My self </span>
                </div>


                <div className='w-1/2 flex justify-center items-center '  >
                    <div className="tagcloud"></div>
                </div>

            </div>
        </>
    )

};

export default Skills;