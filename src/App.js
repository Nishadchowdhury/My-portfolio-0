import './App.css';
import Home from './Components/Home/Home';



function App() {

  const bg = 'https://lmpixels.com/wp/leven-wp/dark/wp-content/uploads/sites/4/2019/12/main_bg_14.png'

  return (
    <>
      <div id='app-home' className=' min-h-screen bg-blue-500 '

        style={{
          backgroundImage: "url(" + bg + ")",
          backgroundColor: 'blue',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed'
        }} >


        <Home />


      </div >

    </>
  );
}

export default App;
