import {Button, ShadowBlock} from "../../components";
import React from "react";
import "./Auth.scss"
import { Form, Input, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {LoginForm, RegisterForm} from "../../module"
import {Route} from "react-router";

const Auth = () => {
    return (
    <section className="auth">
        <div className='auth__content'>
            <Route exact path={['/', '/login',  ]} component={LoginForm}/>
            <Route exact path='/registration' component={RegisterForm}/>
        </div>
    </section>
    )}



export default Auth