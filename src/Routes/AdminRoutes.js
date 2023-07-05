import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Doctors from '../admin/Container/Doctors';
import Department from '../admin/Container/Department';
import Medicines from '../admin/Container/Medicines/Medicines'
import Appointment from '../user/Container/Appointment';
import Layout from '../admin/Component/Layout';
import CustomTable from '../admin/Container/CustomTable';

function AdminRoutes(props) {
    return (
        <div>
            <>
                <Layout>
                    <Routes>
                        <Route path='doctors' element={<Doctors />} />
                        <Route path='department' element={<Department />} />
                        <Route path='medicines' element={<Medicines />} />
                        <Route path='appointment' element={<Appointment />} />
                        <Route path='customTable' element={<CustomTable />} />
                    </Routes>
                </Layout>
            </>
        </div>
    );
}

export default AdminRoutes;