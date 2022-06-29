import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faAtom } from '@fortawesome/free-solid-svg-icons'
import './What_i_do.scss'


const What_i_do = () => {
    return (
        <div id='what_i_do' className='lg:px-16 px-6 text-white my-10 transition-all' >
            <div className=' lg:block flex  '> <h1 className='whatIDo mx-auto relative pb-2 border-blue-400 inline-block text-center ' >What i do</h1> </div>


            <div className='lg:grid lg:grid-cols-2 gap-4'>

                <div className='flex ' >
                    <span className='inline-block text-blue-500 text-3xl m-4  ' >
                        <FontAwesomeIcon icon={faGlobe} />
                    </span>

                    <p className='pt-4 text-sm'>
                        <span className='block text-base' >Web Frontend</span>
                        Convert Figma or PSD to pixel-Perfect Html or JSX. i can Use Raw css with all css-prefix. and i make it responsive at least <strong>Six</strong> breakpoints
                    </p>
                </div>

                <div className='flex ' >
                    <span className='inline-block text-blue-500 text-3xl m-4  ' >
                        <FontAwesomeIcon icon={faAtom} />
                    </span>

                    <p className='pt-4 text-sm'>
                        <span className='block text-base' >Web Development</span>
                        Basically i'am a <strong>Single page Web application</strong> developer with React js. i can integrate payment functionality, Google Map and lot more things.
                    </p>
                </div>

            </div>

            <div>

            </div>

        </div>
    );
};

export default What_i_do;