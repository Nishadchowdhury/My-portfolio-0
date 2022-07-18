import React, { useEffect } from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import bgContact from '../../../Utils/img/sendEmailBg.svg'
import './MyLocation.scss'
import AOS from 'aos';
import emailjs from 'emailjs-com'
import { toast } from 'react-toastify';

const containerStyle = {
    width: '100%',
    height: '100%',
    borderRadius: '16px',
    // margin: 'auto'
};

const center = {
    lat: 23.225969,
    lng: 91.313477
};

console.log(process.env.REACT_APP_MAP_API);

function MyComponent() {

    useEffect(() => {
        AOS.init();
    }, [])


    const SendEmail = e => {
        e.preventDefault();
        emailjs.init()
        emailjs.sendForm(process.env.REACT_APP_EMAIL_ID, process.env.REACT_APP_EMAIL_TEMPLATE_ID, e.target, "ifY7ZX3tF2LqXoD0S").then(res => {

            if (res.status === 200) {
                toast('Email send completed');
                e.target.reset()
            } else {
                toast('something wrong, please try again');
            }
        })

    }

    return (
        <div
            id='contactMe'
            className='flex lg:flex-row flex-col-reverse ' >

            <div
                data-aos="zoom-in"
                className="contact lg:flex-1 lg:h-auto h-96  bg-no-repeat bg-[length:150px_150px]  bg-right-bottom"
                style={{
                    backgroundImage: "url(" + bgContact + ")"
                }}
            >

                <h1 className='text-center text-2xl text-white mb-2 '> Contact Me </h1>

                <form className='flex justify-center items-center flex-col gap-8 h-auto z-20'
                    onSubmit={SendEmail}
                >

                    <div className='relative lg:w-2/3 w-4/5  textInput '  >
                        <input className=' textIn w-full p-3 border-[1px] bg-inherit rounded-md outline-none text-white transition-all duration-500' type="text" required
                            name='name'
                        />
                        <span className='absolute border-none text-gray-400 left-0 p-3 pointer-events-none uppercase transition-all duration-500 '>Your Name</span>

                    </div>

                    <div className='relative lg:w-2/3 w-4/5  textInput '  >
                        <input className=' textIn w-full p-3 border-[1px] bg-inherit rounded-md outline-none text-white transition-all duration-500' type="email" required
                            name='email' />
                        <span className='absolute border-none text-gray-400 left-0 p-3 pointer-events-none uppercase transition-all duration-500 '>Email</span>

                    </div>


                    <div className='relative lg:w-2/3 w-4/5  textInput '  >
                        <textarea className=' textIn w-full lg:max-h-full lg:min-h-[80px] max-h-44 p-3 border-[1px] bg-inherit rounded-md outline-none text-white ' type="text" required
                            name='message'
                        />
                        <span className='absolute border-none text-gray-400 left-0 p-3 pointer-events-none uppercase transition-all duration-500 '>Message</span>

                    </div>
                    <div>
                        <input className='btn  border-2  px-3 py-1 text-white active:scale-95 cursor-pointer  border-blue-500  rounded-xl  transition-all active:opacity-70' type="submit" value="Send" />
                    </div>

                </form>

            </div >

            <div
                data-aos="zoom-in"
                className='h-96 rounded-2xl  lg:px-0 px-3 lg:mb-0 mb-10 lg:flex-1'>

                <div className=' lg:w-11/12 mx-auto h-full  lg:brightness-50 lg:hover:brightness-100 transition-all duration-300'

                >

                    <LoadScript
                        googleMapsApiKey={'AIzaSyBgcL9WlQurkB-kRTgVhM62dKP7c8p1Hl4'}
                    >
                        <GoogleMap
                            mapContainerStyle={containerStyle}
                            center={center}
                            zoom={12.5}
                        >
                            { /* Child components, such as markers, info windows, etc. */}

                            <Marker position={{ lat: 23.225969, lng: 91.313477 }} />

                        </GoogleMap>
                    </LoadScript>

                </div>

            </div>

        </div >
    )
}

export default React.memo(MyComponent)