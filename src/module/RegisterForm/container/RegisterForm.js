import React from 'react';
import RegisterForm from "../components/RegisterForm";
import validateFunc from 'Utils/validations'
import {withFormik} from "formik"

const withFormik = (values) => {
    const errors = {};
    const validate = validateFunc({isAuth:false});

    const keys = Object.keys(values);
    keys.forEach(key =>validate[key] && validate[key](errors, values[key]))

    return errors;
};


export default withFormik;