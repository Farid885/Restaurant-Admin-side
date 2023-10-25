import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input,Col ,Row } from 'antd';
// import { Link } from 'react-router-dom';
import Mycarousel from '../elements/Mycarousel'
import { logInUser } from '../redux/actions/index';
import {useDispatch,} from 'react-redux'




const Login = () => {


  const dispatch = useDispatch()
  
  
  const onFinish = (values) => {
    console.log('Received values: ', values);
  
  dispatch(logInUser(values.email,values.password,values.remember))
  
  };
  return (
   <div className='container'>

<Row  gutter={32,32} className='align-items-center'>
<Col className='mt-5 ' md={12}><Mycarousel/> </Col>
  <Col className='mt-5 pt-5' md={8}>
  <Form
      name="normal_login"
      className="login-form text-center"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      
    >
      <h2 >Log In</h2>
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className=" me-3  login-form-button">
          Log in
        </Button>
       
      </Form.Item>
    </Form>
  </Col>

</Row>
   </div>
  );
};
export default Login;