import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Formik, useFormik } from 'formik';
import * as yup from 'yup';
import { DataGrid } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { hover } from '@testing-library/user-event/dist/hover';

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const [items, setItems] = React.useState([]);
  const [Udata, setUpdateData] = useState([]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmitData = (data) => {
    console.log(data);

    let rno = Math.floor(Math.random() * 1000);

    let newData = { id: rno, ...data };

    let localData = JSON.parse(localStorage.getItem('medicines'));

    console.log(localData);

    if (localData === null) {
      localStorage.setItem('medicines', JSON.stringify([newData]));
      setItems([newData]);
    } else {
        if(Udata){
          let UData = localData.map((v) => {
              if(v.id === d.id){
                   return data
              }else{
                return v 
              }
          });
        }
      localData.push(newData);
      localStorage.setItem('medicines', JSON.stringify(localData));
      setItems(localData);
    }

    handleClose();
  };

  useEffect(() => {
    let localData = JSON.parse(localStorage.getItem('medicines'));

    if (localData !== null) {
      setItems(localData);
    }
  }, []);

  let d = new Date();
  let nd = new Date(d.setDate(d.getDate() - 1));

  let medicineSchema = yup.object({
    name: yup.string().required(),
    date: yup.date().min(nd, 'Please enter a valid date').required(),
    price: yup.number().required(),
    desc: yup
      .string()
      .required()
      .test('desc', 'Maximum 3 words allowed.', function (val) {
        let arr = val.split(' ');

        if (arr.length > 3) {
          return false;
        } else {
          return true;
        }
      }),
  });

  const formik = useFormik({
    validationSchema: medicineSchema,
    initialValues: {
      name: '',
      date: '',
      price: '',
      desc: '',
    },
    onSubmit: (values, action) => {
      handleSubmitData(values);
      action.resetForm();
    },
  });

  const { values, errors, touched, handleBlur, handleChange, handleSubmit} = formik;

  const handleDelete = (id) => {
    let localData = JSON.parse(localStorage.getItem('medicines'));

    let filteredData = localData.filter((v) => v.id !== id);

    localStorage.setItem('medicines', JSON.stringify(filteredData));

    setItems(filteredData);
  };

  const handleEdit = (data) => {
    console.log(data);
    handleClickOpen(data);
  };

  const columns = [
    { field: 'name', headerName: 'Name', width: 130 },
    { field: 'date', headerName: 'Expiry Date', width: 130 },
    { field: 'price', headerName: 'Price', width: 130 },
    { field: 'desc', headerName: 'Description', width: 130 },
    {
      field: 'action',
      headerName: 'Action',
      width: 130,
      renderCell: (params) => (
        <>
          <IconButton aria-label="delete" onClick={() => handleDelete(params.row.id)}>
            <DeleteIcon />
          </IconButton>
          <IconButton aria-label="edit" onClick={() => handleSubmitData(params.row)}>
            <EditIcon />
          </IconButton>
        </>
      ),
    },
  ];

  return (
    <>
      <h1>Medicine</h1>
      <Button  className="add-medicine-button red hover" style={{color: 'red'}} variant="outlined" onClick={handleClickOpen}>
        Add Medicine
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Medicine</DialogTitle>
        <DialogContent>
          <Formik value={values}>
            <form onSubmit={handleSubmit}>
              <TextField
                margin="dense"
                id="name"
                label="Medicine name"
                name="name"
                type="text"
                fullWidth
                variant="standard"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <span style={{ color: 'red' }}>{errors.name && touched.name ? errors.name : null}</span>
              <TextField
                margin="dense"
                id="date"
                label="Expiry Date"
                name="date"
                type="date"
                fullWidth
                variant="standard"
                value={values.date}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <span style={{ color: 'red' }}>{errors.date && touched.date ? errors.date : null}</span>
              <TextField
                margin="dense"
                id="price"
                label="Medicine Price"
                name="price"
                type="text"
                fullWidth
                variant="standard"
                value={values.price}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <span style={{ color: 'red' }}>{errors.price && touched.price ? errors.price : null}</span>
              <TextField
                margin="dense"
                id="desc"
                label="Medicine Description"
                name="desc"
                multiline
                rows={4}
                type="text"
                fullWidth
                variant="standard"
                value={values.desc}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <span style={{ color: 'red' }}>{errors.desc && touched.desc ? errors.desc : null}</span>

              <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button type="submit">Submit</Button>
              </DialogActions>
            </form>
          </Formik>
        </DialogContent>
      </Dialog>

      <div style={{ height: 400, width: '100%' }}>
        <DataGrid rows={items} columns={columns} pageSizeOptions={[5, 10]} checkboxSelection />
      </div>
    </>
  );
}
