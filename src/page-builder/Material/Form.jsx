import { Form as AntForm, Button } from 'antd'
import { useState } from 'react'
import request from '../../request'

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const Form = (props) => {
  const [form] = AntForm.useForm();
  const [isloading, setLoading] = useState(false)
  const { children, targetApi, ...others } = props

  console.log('children', children)
  const onFinish = async (values) => {
    setLoading(true)
    const rst = await request.post(targetApi, {
      ...values
    })
    setLoading(false)
  };

  const handleReset = () => {
    form.resetFields()
  }

  return (
    <AntForm
      {...layout}
      form={form}
      name="basic"
      onFinish={onFinish}
      {...others}
    >
      <div style={{ border: '1x rpx dotted grey', minHeight: '100px', margin: 10}}>
       {children}
      </div>
      <AntForm.Item {...tailLayout}>
        <Button
          type="primary"
          htmlType="submit"
          style={{marginRight: 8}}
          loading={isloading}
        >
          提交
        </Button>
        <Button onClick={handleReset} loading={isloading}>
          重置
        </Button>
      </AntForm.Item>
    </AntForm>
  )
}

export default Form