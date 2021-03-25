
import { Input } from 'antd';
const WrappedInput = (props) => {
  const {label, attr, editor, handleChange, ...others } = props
  return (
    <div>
      <div>{label}</div>
      <Input
        defaultValue={attr[editor.attrName]}
        onChange={(evt) => handleChange(evt, editor.attrName)}
      />
    </div>
  )
}
export default WrappedInput