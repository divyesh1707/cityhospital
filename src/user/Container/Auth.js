import { red } from '@mui/material/colors';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import * as Yup from 'yup'
import Button from '../UI/Button/Button';
import { ButtonBase } from '@mui/material';
import Input from '../UI/Input/Input';

function Auth(props) {

    const [authtype, setauthtype] = useState('login');

    const navigate = useNavigate();

    let authobj = {}, initialValue = {}
    if (authtype === 'login') {
        authobj = {
            email: Yup.string().required('Enter Email id').email('Enter Valid Email'),
            password: Yup.string().required('Enter Password')
            // .matches('(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"', 'Password Must be Match')
        }
        initialValue = {
            email: '',
            password: ''
        }
    } else if (authtype === 'signup') {
        authobj = {
            name: Yup.string().required('Enter Name'),
            email: Yup.string().required('Enter Email id').email('Enter Valid Email'),
            password: Yup.string().required('Enter Password')
        }
        initialValue = {
            name: '',
            email: '',
            password: ''
        }
    } else {
        authobj = {
            email: Yup.string().required('Enter Email id').email('Enter Valid Email'),
        }
        initialValue = {
            email: ''
        }
    }

    const authSchema = Yup.object(authobj);

    const formik = useFormik({
        initialValues: initialValue,
        validationSchema: authSchema,
        enableReinitialize: true,
        onSubmit: (value, action) => {

            if (authtype === 'login') {
                handleLogin();
            } else if (authtype === 'signup') {
                handleRegister();
            } else if (authtype === 'forget') {
                handleForget();
            }
            console.log(value);
            action.resetForm()
        }
    })

    const handleLogin = (() => {
        localStorage.setItem("LoginData", 'true');
        navigate('/')
    })

    const handleRegister = (() => {

    })

    const handleForget = (() => {

    })


    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = formik;

    return (
        <section id="appointment" className="appointment">
            <div className="container">
                <div className="section-title">
                    {/* {
                        authtype === 'login' ? <h2>Login</h2>
                            : authtype === 'signup' ? <h2>Signup</h2> : <h2>Reset Password</h2>
                    } */}
                </div>
                <form action method="post" role="form" className="php-email-form" onSubmit={handleSubmit}>
                    <div className="row justify-content-center ">
                        {
                            authtype === 'login' || authtype === 'forget' ? null :

                                <div className="col-md-7 form-group">
                                    <Input type="text"
                                        ninputame="name"
                                        className="form-control"
                                        id="name"
                                        value={values.name}
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="Your Name"
                                    />
                                    <div className="validate" />
                                    <span className='err'>{errors.name && touched.name ? errors.name : ''}</span>
                                </div>
                        }
                        <div className="col-md-7 form-group mt-3 mt-md-0">
                            <Input type="email"
                                className="form-control"
                                name="email" id="email"
                                value={values.email}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                placeholder="Your Email"
                            />
                            <div className="validate" />
                            <span className='err' style={{ color: 'red' }}>{errors.email && touched.email ? errors.email : ''}</span>
                        </div>
                        {
                            authtype !== 'forget' ? <div className="col-md-7 form-group mt-3 mt-md-0">
                                <Input type="password"
                                    className="form-control"
                                    name="password"
                                    id="password"
                                    value={values.password}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    placeholder="Your Password"
                                />
                                <div className="validate" />
                                <span className='err' style={{ color: 'red' }}>{errors.password && touched.password ? errors.password : ''}</span>
                            </div> : null
                        }
                        <div className="text-center m-2">
                            {
                                authtype === 'login' ?
                                    <a href='#' onClick={(() => setauthtype('forget'))}>Forgot password?</a>
                                    : null
                            }
                        </div>
                    </div>
                    {
                        authtype === 'login' ?
                            <div className="text-center"><Button type='primary'>Login</Button></div>
                            : authtype === 'signup' ?
                                <div className="text-center"><Button type='secondary'>Signup</Button></div>
                                : <div className="text-center"><Button type='outlined'>Send OTP</Button></div>
                    }
                    <div className="text-center m-2">
                        {
                            authtype === 'login' ?
                                <span>Don't have an account <a href='#' onClick={() => setauthtype('signup')}>Signup</a></span>
                                : <span>Already have an account <a href='#' onClick={() => setauthtype('login')}>Login</a></span>
                        }
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Auth;
