import React from 'react';

function ForgotPass(props) {
    return (
        <div className='text-center'>
            <h1>Forgot Password</h1>
            <div className="col-md-5 form-group mt-3 mt-md-0">
                <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                <div className="validate" />
                <div className="center"><button type="submit">Submit</button></div>
            </div>
        </div>
    );
}

export default ForgotPass;