
import { Input } from 'antd';

const WrappedStyleEditor = (props) => {
  const { attr, editor, handleChange } = props
  const { childAttr } = editor
  const { style } = attr

  return childAttr?.map(item => (
    <div key={item.attrName} style={{ marginBottom: 10 }}>
      <div>{item.label}</div>
      <Input
        defaultValue={style[item.attrName]}
        onChange={(evt) => handleChange(evt.target.value, item.attrName, true)}
      />
    </div>
  ))
}
export default WrappedStyleEditor
