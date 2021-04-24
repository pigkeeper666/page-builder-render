import { Input as AntInput, Form } from 'antd'

const FormInput = (props) => {
  return (
    <Form.Item
      label="账号"
      name="username"
      rules={[{ required: true, message: '请输入账号' }]}
      {...props}
    >
      <AntInput />
    </Form.Item>
  )
}

export default FormInput