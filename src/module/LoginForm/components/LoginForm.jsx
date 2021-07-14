import React from "react";
import {Checkbox, Form, Input} from "antd";
import {LockOutlined, UserOutlined} from "@ant-design/icons";
import {Button, ShadowBlock} from "../../../components";
import {Link} from "react-router-dom";


const LoginForm = ({values,
                       validateEmail,
                       touched,
                       error,
                       handleChange,
                       handleBlur,
                       handleSubmit,
                       isValid,
                       isSubmitting,}) => {

    const onFinish = values => {
        console.log('Received values of form: ', values);
    }
    return (
        <div>
            <div className='auth__top'>
                <h2>Войдите в аккаунт</h2>
                <p>Пожайлуста, войдите в аккаунт</p>
            </div>
        <ShadowBlock>
        <Form
            name="normal_login"
            className="login-form"
            initialValues={{remember: true}}
            onFinish={onFinish}
        >
            <Form.Item
                name="username"
                rules={[{required: true, message: 'Please input your Username!'}]}
            >
                <Input size='large'
                       prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="Username"/>
            </Form.Item>
            <Form.Item
                name="password"
                rules={[{required: true, message: 'Please input your Password!'}]}
            >
                <Input
                    size='large'
                    prefix={<LockOutlined className="site-form-item-icon"/>}
                    type="password"
                    placeholder="Password"
                />
            </Form.Item>
            <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>Запомнить меня</Checkbox>
                </Form.Item>

                <a className="login-form-forgot" href="">
                    Забыли пароль?
                </a>
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    Войти в аккаунт
                </Button>
                <div>

                    <Link className='auth__register-link' to='/registration'>
                        Зарегестрироваться сейчас
                    </Link>
                </div>

            </Form.Item>
        </Form>
    </ShadowBlock>
        </div>
)
}

export default LoginForm