import React from 'react';
import Header from '../user/Component/Header';
import Footer from '../user/Component/Footer';
import Home from '../user/Container/Home';
import About from '../user/Container/About';
import Appointment from '../user/Container/Appointment';
import Contact from '../user/Container/Contact1';
import Departments from '../user/Container/Department';
import Doctors from '../user/Container/Doctors';
import { Routes, Route } from 'react-router-dom';
import Doctor from '../user/Container/Doctor';
import VisitingDoctors from '../user/Container/VisitingDoctors';
import NotFound from '../user/Container/NotFound';
import ForgotPass from '../user/Container/ForgotPass';
import Auth1 from '../user/Container/Auth1';
import Contact1 from '../user/Container/Contact1';
import Auth from '../user/Container/Auth';
import UseMedicines from '../user/Container/Medicines/UseMedicines';

function UserRoutes(props) {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Department" element={<Departments />} />
                <Route path="/Doctors" element={<Doctors />} />
                <Route path="/About" element={<About />} />
                <Route path="/Contact1" element={<Contact1 />} />
                <Route path="/Appointment" element={<Appointment />} />
                <Route path="/Auth" element={<Auth />} />
                <Route path='/UseMedicines' element={<UseMedicines/>}/>
                {/* <Route path="/Doctor/:id" element={<Doctor/>}/>
          <Route path="/Doctor/visiting_doctors" element={<VisitingDoctors/>}/> */}

                {/* Nested Route */}
                <Route path='/Doctor'>
                    <Route path=":id" element={<Doctor />} />
                    <Route path="visiting_doctors" element={<VisitingDoctors />} />
                </Route>

                {/* <Route path='*' element={<NotFound/>}/> */}
                <Route path='/ForgotPass' element={<ForgotPass />} />
            </Routes>
            <Footer />
        </>
    );
}

export default UserRoutes;