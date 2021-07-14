import React from "react";
import {Button, ShadowBlock} from "../../../components";
import {Checkbox, Form, Input} from "antd";
import {LockOutlined, UserOutlined, MailOutlined, ExclamationCircleTwoTone} from "@ant-design/icons";
import {Link} from "react-router-dom";

const RegisterForm = ({values, validateEmail,
                              touched,
                              error,
                              handleChange,
                              handleBlur,
                              handleSubmit,
                              isValid,
                              isSubmitting,
                          }) => {
    const onFinish = values => {
        console.log('Received values of form: ', values);
    }
    const success = false;
    return (
        <div>
            <div className='auth__top'>
                <h2>Регистрация</h2>
                <p>Для входа в чат, вам нужно зерегестрироваться</p>
            </div>
            <ShadowBlock>
                {!success ? (<Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{remember: true}}
                    onFinish={onFinish}

                /*    onSubmit ={ha}*/
                >
                    <Form.Item
                        name="E-Mail"
                        rules={[{required: true, message: 'Пожайлуста введите свой E-Mail!'}]}

                    >
                        <Input id="email"
                            size='large'
                               prefix={<MailOutlined type='mail' className="site-form-item-icon"
                               />} placeholder="E-Mail"/>
                    </Form.Item>
                    <Form.Item
                        name="Ваше имя"
                        rules={[{required: true, message: 'Please input your Ваше имя!'}]}
                    >
                        <Input size='large'
                               prefix={<UserOutlined
                                   className="site-form-item-icon"/>}
                               placeholder="Ваше имя"/>
                    </Form.Item>
                    <Form.Item
                        name="Пароль"
                        rules={[{required: true, message: 'Введите пароль!'}]}
                    >
                        <Input
                            size='large'
                            prefix={<LockOutlined className="site-form-item-icon"/>}
                            type="password"
                            placeholder="Пароль"
                        />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{required: true, message: 'Please input your Password!'}]}
                    >
                        <Input
                            size='large'
                            prefix={<LockOutlined className="site-form-item-icon"/>}
                            type="password"
                            placeholder="Повторите пароль"
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
                        <Button
                            type="primary" htmlType="submit" className="login-form-button" >
                            <Link to="/login"> Войти в аккаунт </Link>
                        </Button>
                        <div>

                            <Link className='auth__register-link' to='/registration'>
                                Зарегестрироваться сейчас
                            </Link>
                        </div>

                    </Form.Item>
                </Form>)

                    : <div className="auth__success-block">
                        <div>
                            <ExclamationCircleTwoTone />
                        </div>

                        <h3>Подтвердите свой аккаунт</h3>
                        <p>На вашу почту отправлено письмо с сылкой для подтверждения аккаунта</p>
                    </div> }
            </ShadowBlock>
        </div>
    )
}

export default RegisterForm