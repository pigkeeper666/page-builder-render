
import { Radio } from 'antd';
import { useState } from 'react';

const radioStyle = {
  display: 'block',
  height: '30px',
  lineHeight: '30px',
};

const WrappedEnumEditor = (props) => {
  const {label, attr, editor, handleChange} = props
  const { datasource } = editor
  const [curr, setCurr] = useState(attr[editor.attrName])
  const onChange = e => {
    const val = e.target.value
    setCurr(val);
    handleChange(val, editor.attrName)
  };

  return (
    <div>
      <div>{label}:</div>
      <Radio.Group onChange={onChange} value={curr}>
        {datasource.map((item) => (
          <div key={item.key}>
            <Radio value={item.key} style={radioStyle}>{item.name}</Radio>
          </div>
        ))}
      </Radio.Group>
    </div>
  )
}
export default WrappedEnumEditor