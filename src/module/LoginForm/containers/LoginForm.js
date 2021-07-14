import LoginForm from '../components/LoginForm'
import React from 'react';
import validateForm from 'Utils/validations'
import {withFormik} from "formik"

const withFormik = (values) => {
    const errors = {};

   validateForm({isAuth:true, values, errors});


    return errors;
};


export default withFormik;