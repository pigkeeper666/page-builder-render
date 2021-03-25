
import { Input } from 'antd';

const WrappedStyleEditor = (props) => {
  const { attr, editor, handleChange, ...others } = props
  const { childAttr } = editor
  const { style } = attr

  return childAttr?.map(item => (
    <div key={item.attrName}>
      <div>{item.label}</div>
      <Input
        defaultValue={style[item.attrName]}
        onChange={(evt) => handleChange(evt, item.attrName, true)}
      />
    </div>
  ))
}
export default WrappedStyleEditor