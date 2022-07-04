import 'animate.css';
import Home from './Components/Home/Home';
import { Routes, Route } from "react-router-dom";
import 'aos/dist/aos.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  const bg = 'https://lmpixels.com/wp/leven-wp/dark/wp-content/uploads/sites/4/2019/12/main_bg_14.png'

  // .env
  // REACT_APP_MAP_API=AIzaSyABSMtHAhQ4P8y1K9TzdHhgj90vGeTK2Js
  // REACT_APP_EMAIL_ID=service_fluccfg
  // REACT_APP_EMAIL_TEMPLATE_ID=template_xerrhdm






  return (
    <div id='app-home' className='MoveMouse min-h-screen flex lg:bg-blue-700 bg-[#27272A] '

      style={{
        backgroundImage: "url(" + bg + ")",
        backgroundPosition: 'center',
        // backgroundPositionX: `${mouse.x / 120 - 12}px`,
        // backgroundPositionY: `${mouse.y / 120 - 12}px`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed'
      }} >



      <Routes>

        <Route path='/' element={<Home />} />

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
