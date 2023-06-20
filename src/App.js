import Header from './Component/Header';
import Footer from './Component/Footer';
import Home from './Container/Home';
import About from './Container/About';
import Appointment from './Container/Appointment';
import Contact from './Container/Contact';
import Departments from './Container/Department';
import Doctors from './Container/Doctors';
import { Routes, Route } from 'react-router-dom';
import Doctor from './Container/Doctor';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
          <Route path="/Department" element={<Departments/>}/>
          <Route path="/Doctors" element={<Doctors/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="/Appointment" element={<Appointment/>}/>
      </Routes>
      <Footer />
     
    </>
  );
}

export default App;
