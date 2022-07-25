import React from 'react'

import { Card, Form, Button, Checkbox, Input } from 'antd'

import { useNavigate } from 'react-router-dom'

import './index.scss'

import {useStore} from '@/store'

function Login() {

    const {loginStore}  = useStore()

    const navigate = useNavigate()

    const onFinish = (values) => {
        // console.log('Success:', values);
        loginStore.login(values).then(() => {
            // 跳转首页
            navigate('/')
        })
    };

    


  return (
    <div className="login">
      <Card className="login-container" title="Admin Login">
        <Form
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          autoComplete="off">
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: '请输入手机号',
              },
              {
                pattern: /^1[3-9]\d{9}$/,
                message: '请输入正确的手机号'
              }
            ]}>
            <Input placeholder='请输入手机号' />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: '请输入密码',
              },
            ]}>
            <Input.Password placeholder='请输入密码' />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 10,
              span: 16,
            }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default Login
