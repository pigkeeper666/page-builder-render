import { useState } from 'react'
import { Form, Input, Button, Space } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

const WrappedMutiEditor = (props) => {
  const { label, attr, editor, handleChange } = props
  const { keys } = editor
  const [lines, setLines] = useState(attr[editor.attrName] || [])

  // 加一行
  const add = () => {
    setLines(lines.concat({}))
  }
  // 减一行
  // const remove = (index) => {
  //   console.log('index', index)
  //   const copy = [].concat(lines)
  //   copy[index] = {}
  //   setLines(copy)
  // }

  const handle = (value, index, k) => {
    const copy = [].concat(lines)
    copy[index][k] = value
    setLines(copy)
    handleChange(copy, editor.attrName)
  }

  return (
    <div>
      <div>{label}:</div>
      {lines?.map(((vals, index) => (
        <Space style={{ display: 'flex', marginBottom: 8 }} align="baseline" key={`line-${index}`}>
          {
            keys?.map(k => (
              <Input defaultValue={vals[k]} key={`${index}-${k}`} onChange={(e) => handle(e.target.value, index, k)}/>
            ))
          }
          {/* <MinusCircleOutlined onClick={() => remove(index)} /> */}
        </Space> 
      )))
      }

      <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
        Add field
      </Button>
    </div>
  )
}
export default WrappedMutiEditor