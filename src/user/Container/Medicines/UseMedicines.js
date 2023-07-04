import React, { useEffect, useState } from 'react';
import ListMedicines from './ListMedicines';
import { Button, Card } from '@mui/material';


function UseMedicines(props) {

    const [data, setData] = useState([]);
    const [filterdata, setFilterdata] = useState([]);

    useEffect(() => {
        let localData = JSON.parse(localStorage.getItem("medicines"));

        if (localData) {
            setData(localData)
        }

        console.log(localData);

    }, [])

    const handleChange = (val) => {
        console.log(val);
        let localData = JSON.parse(localStorage.getItem("medicines"));

        let fData = localData.filter((v, i) =>
            v.name.toLowerCase().includes(val.toLowerCase()) ||
            v.price.toString().includes(val) ||
            v.date.toString().includes(val) ||
            v.desc.toLowerCase().includes(val.toLowerCase())
        )

        console.log(fData);

        setFilterdata(fData);
    }

    return (
        <div className='row' >
            <input type='search' name='search' onChange={(e) => handleChange(e.target.value)} />
            <ListMedicines mdata={filterdata.lenght > 0  ? filterdata : data} />
        </div>
    );
}

export default UseMedicines;