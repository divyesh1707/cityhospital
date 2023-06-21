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
import Auth from './Container/Auth';
import VisitingDoctors from './Container/VisitingDoctors';
import NotFound from './Container/NotFound';
import ForgotPass from './Container/ForgotPass';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Department" element={<Departments />} />
        <Route path="/Doctors" element={<Doctors />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Appointment" element={<Appointment />} />
        {/* <Route path="/Auth" element={<Auth/>}/> */}
        {/* <Route path="/Doctor/:id" element={<Doctor/>}/>
          <Route path="/Doctor/visiting_doctors" element={<VisitingDoctors/>}/> */}

        {/* Nested Route */}
        <Route path='/Doctor'>
          <Route path=":id" element={<Doctor />} />
          <Route path="visiting_doctors" element={<VisitingDoctors />} />
        </Route>

        {/* <Route path='*' element={<NotFound/>}/> */}
        <Route path='/Auth' element={<Auth/>}/>
        <Route path='/ForgotPass' element={<ForgotPass/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
