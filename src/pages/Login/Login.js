import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { actLogin } from '../../store/user/action';
import { StyledLoginContainer } from './login.styled';


function Login(props) {
    // dùng history để check login -> chưa login thì ở lại page Login
    // login rồi -> token !== null => chuyển sang page Home
    const history = useHistory();
    const token = useSelector(state => state.User.token);
    const dispatch = useDispatch();


    useEffect(() => {
        if (token) {
            // đã đăng nhập => chuyển sang page Home
            history.push('/');
        }
    }, [token, history]);

    const onFinish = values => {
        console.log('Received values of form: ', values);
        dispatch(actLogin(values));
    };

    return (
        <StyledLoginContainer>
            
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}>
                <Form.Item
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Username!',
                        },
                    ]}>
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                </Form.Item>
                {/* password */}
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Password!',
                        },
                    ]}>
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                    </Button>
                </Form.Item>
            </Form>
        </StyledLoginContainer>
    );
}

export default Login;