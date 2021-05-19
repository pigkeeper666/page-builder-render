
import { Switch } from 'antd';
import { useState } from 'react';

const radioStyle = {
  display: 'block',
  height: '30px',
  lineHeight: '30px',
};

const WrappedEnumEditor = (props) => {
  const {label, attr, editor, handleChange} = props
  const onChange = checked => {
    handleChange(checked, editor.attrName)
  };

  return (
    <div>
      <div>{label}:</div>
      <Switch defaultChecked={attr[editor.attrName]} onChange={onChange} />
    </div>
  )
}
export default WrappedEnumEditor