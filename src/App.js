import 'animate.css';
import Home from './Components/Home/Home';
import { Routes, Route, Link } from "react-router-dom";
import 'aos/dist/aos.css';

function App() {

  const bg = 'https://lmpixels.com/wp/leven-wp/dark/wp-content/uploads/sites/4/2019/12/main_bg_14.png'


  return (



    <div id='app-home' className=' min-h-screen flex bg-blue-500 '

      style={{
        backgroundImage: "url(" + bg + ")",
        backgroundColor: 'blue',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed'
      }} >


      <Routes>

        <Route path='/' element={<Home />} />

      </Routes>



    </div >

  );
}

export default App;
