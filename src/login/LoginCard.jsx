import { useState } from 'react'
import { useHistory } from "react-router-dom";
import request from '../request'
import { Input, Form, Button, message } from 'antd'
import { DownCircleOutlined } from '@ant-design/icons';
import styles from './LoginCard.module.scss'

const layout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 19 },
};
const tailLayout = {
  wrapperCol: { span: 24 },
};

const Login = (props) => {
  const [isloading, setLoading] = useState(false)
  const history = useHistory()
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    setLoading(true)
    console.log(values);
    const rst = await request.post('/login', {
      ...values
    })
    setLoading(false)
    if (rst.code === 0) {
      message.success('登录成功')
      history.push('/home')
    } else {
      message.error('密码错误')
    }
    console.log('rst', rst)
  };

  return (
    <div className={styles['box']}>
      <div className={styles['text-area']}>
        <div className={styles['title']}>前端页面搭建器</div>
        <div className={styles['sub-title']}>登录方可使用正常功能,提交即注册</div>
      </div>
    
      <Form
        {...layout}
        form={form}
        name="basic"
        onFinish={onFinish}
      >
        <Form.Item
          label="账号"
          name="username"
          rules={[{ required: true, message: '请输入账号' }]}
        >
          <Input style={{borderRadius: 6}}/>
        </Form.Item>

        <Form.Item
          label="密码"
          name="password"
          rules={[{ required: true, message: '请输入密码' }]}
        >
          <Input.Password style={{borderRadius: 6}}/>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button
            type="primary"
            htmlType="submit"
            style={{ width: '100%' }}
            loading={isloading}
            shape="round"
            icon={<DownCircleOutlined />}
          >
            下一步
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Login
