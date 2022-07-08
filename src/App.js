import 'animate.css';
import Home from './Components/Home/Home';
import { Routes, Route } from "react-router-dom";
import 'aos/dist/aos.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react';

function App() {

  const bg = 'https://lmpixels.com/wp/leven-wp/dark/wp-content/uploads/sites/4/2019/12/main_bg_14.png'

  // .env
  // REACT_APP_MAP_API=AIzaSyABSMtHAhQ4P8y1K9TzdHhgj90vGeTK2Js
  // REACT_APP_EMAIL_ID=service_fluccfg
  // REACT_APP_EMAIL_TEMPLATE_ID=template_xerrhdm



  const [mouseMove, setMouseMove] = useState({
    x: null,
    y: null,
  })


  useEffect(() => {

    function handle(e) {
      setMouseMove({
        x: e.pageX / 400,
        y: e.pageY / 400,
      })
    }

    document.addEventListener('mousemove', handle)
    return () => document.removeEventListener(mouseMove, handle)

  })


  const [scrollPosition, setScrollPosition] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 200) {
        setScrollPosition(true)
      } else {
        setScrollPosition(false)
      }
    });
  }, [])




  const GoToTop = () => {
    window[`scrollTo`]({ top: 0, behavior: 'smooth' })
  }

  return (
    <div id='app-home' className='MoveMouse min-h-screen flex lg:bg-blue-700 bg-[#27272A] '

      style={{
        backgroundImage: "url(" + bg + ")",
        // backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundPositionX: `${-20 - mouseMove.y}px`,
        backgroundPositionY: `${-20 - mouseMove.x}px`,
      }} >

      <button onClick={GoToTop} className={` z-[999999] scale-0 transition-all duration-200 ${scrollPosition ? ' lg:scale-100' : 'lg:opacity-0'} bottom-14 left-24 fixed rotate-180 py-3 p-4 rounded-2xl border-2 border-gray-400 text-white hover:text-blue-500  `} >
        <FontAwesomeIcon icon={faArrowDown} />
      </button>
      <Routes>

        <Route path='/' element={<Home mouseMoveX={mouseMove.x} mouseMoveY={mouseMove.y} />} />

      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div >

  );
}

export default App;
