import React from 'react';
import AnimatedLetters from '../../Animation/Font';

const AboutMe = () => {

    const AboutHeader = ['M', 'e', ' ', '&', ' ', 'M', 'y', ' ', 'S', 'e', 'l', 'f'];

    return (
        <div id='aboutMe' className='flex justify-center mt-10' >

            <div className='w-4/5' >
                <div className='text-3xl text-white flex justify-center' >
                    <AnimatedLetters letterClass={'text-animate'} strArray={AboutHeader} idx={29} />  </div>

                <p className='text-white ' >
                    I'm a front-end web developer, I have experience in web development it's near a year. I love to do something with computer and at the same time I love JavaScript that's why I decided to be a web developer . That's why I'm here .


                    I'm a web developer based on react-JS with a bunch of CSS frameworks. I have some knowledge about node JS, have some knowledge about back-end with no SQL database . I know how to secured a website client site in server side both <strong className='text-2xl' >Thank you.</strong>
                </p>
            </div>


        </div>
    );
};

export default AboutMe;