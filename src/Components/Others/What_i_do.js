import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'


const What_i_do = () => {
    return (
        <div className='px-16 text-white' >
            <h1 className='border-b-[3px] border-blue-400 inline-block  ' >What i do</h1>


            <div className='grid grid-cols-2 gap-4'>

                <div className='flex ' >
                    <span className='inline-block text-blue-500 text-3xl m-4  ' >
                        <FontAwesomeIcon icon={faGlobe} />
                    </span>

                    <p className='pt-4'>
                        <span className='block' >Web Development</span>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere molestiae, perspiciatis doloribus corporis repudiandae soluta!
                    </p>
                </div>

            </div>

            <div>

            </div>

        </div>
    );
};

export default What_i_do;