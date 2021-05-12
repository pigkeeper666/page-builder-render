import { useState, useEffect } from 'react'
import { Button, Table, Tag, Space, Modal, Input, Form, Switch, message } from 'antd'
import { useHistory } from "react-router-dom";
import request from '../request'

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 16 },
};

const PageManage = () => {
  const columns = [
    {
      title: '页面标识号',
      dataIndex: 'pageId',
      key: 'pageId',
    },
    {
      title: '页面名称',
      dataIndex: 'pageName',
      key: 'pageName',
    },
    {
      title: '页面备注',
      dataIndex: 'pageDescription',
      key: 'pageDescription',
    },
    {
      title: '页面状态',
      key: 'pageStatus',
      dataIndex: 'pageStatus',
      render: tag => (
        <>
          {tag === 0 ? (
              <Tag color="geekblue">
                关闭
              </Tag>
            ) : (
              <Tag color="green">
                开启
              </Tag> 
            )
          }
        </>
      ),
    },
    {
      title: '操作',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <Button type="ghost" onClick={() => handleUpdate(record)}>更改</Button>
          <Button type="primary" danger onClick={() => handleDelete(record)}>删除</Button>
          <Button type="primary" onClick={() => handleJump(record)}>编辑器</Button>
        </Space>
      ),
    },
  ];


  const [datasource, setDatasource] = useState([])
  const [visible, setVisible] = useState(false)
  const [inputType, setInputType] = useState('create')
  const [loading, setLoading] = useState(false)
  const [form] = Form.useForm();
  const history = useHistory()

  const loadData = () => {
    setLoading(true)
    request.get('/api/getPageList')
      .then((res) => {
        console.log('请求res', res)
        setDatasource(res.data)
      })
      .catch((err) => {message.error('出错了')})
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    loadData()
  }, [])

  const handleUpdate = (record) => {
    setInputType(record.pageId)
    setVisible(true)
    form.setFieldsValue(record)
  }

  const handleJump = (record) => {
    history.push({
      pathname: '/editor',
      state: {
        pageId: record.pageId,
      }
    })
  }

  const handleDelete = (record) => {
    request.post('/api/deletePage', {
      pageId: record.pageId,
    })
      .then((res) => {
        loadData()
        setVisible(false)
      })
      .catch((err) => {message.error('出错了')})
  }

  const handleCreate = () => {
    setInputType('create')
    setVisible(true)
  }

  const handleOk = () => {
    form.validateFields().then((val) => {
      const { pageName, pageDescription, pageStatus } = val
      const params = {
        pageName,
        pageDescription: pageDescription || '--',
        pageStatus: Number(pageStatus),
      }
      if (inputType === 'create') {
        request.post('/api/createPage', params)
          .then((res) => {
              loadData()
              setVisible(false)
          })
          .catch((err) => {message.error('出错了')})
      } else {
        request.post('/api/editPage', {
          ...params,
          pageId: inputType,
        })
          .then((res) => {
              loadData()
              setVisible(false)
          })
          .catch((err) => {message.error('出错了')})
      }

    })
  }

  const handleCancel = () => {
    setVisible(false)
  }

  return (
    <div>
      <Button
        type="primary"
        style={{ marginBottom: 10 }}
        onClick={handleCreate}
      >
        创建页面
      </Button>
      <Table
        rowKey="pageId"
        loading={loading}
        columns={columns}
        dataSource={datasource}
      />
      <Modal
        destroyOnClose
        title={inputType === 'create' ? '创建页面' : '编辑页面'}
        visible={visible}
        onOk={handleOk}
        okText="确定"
        cancelText="取消"
        onCancel={handleCancel}
      >
        <Form
          preserve={false}
          form={form}
          {...layout}
          initialValues={{
            'pageStatus': true,
          }}
        >
          <Form.Item
            label="页面名称"
            name="pageName"
            rules={[{ required: true, message: '请输入页面名称' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="页面备注"
            name="pageDescription"
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="页面状态"
            name="pageStatus"
            valuePropName="checked"
          >
            <Switch />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
}

export default PageManage