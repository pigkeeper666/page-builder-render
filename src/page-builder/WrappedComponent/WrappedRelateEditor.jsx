
import { Input } from 'antd';
const WrappedRelateEditor = (props) => {
  const { label, attr, editor, handleChange } = props
  const { when } = editor

  const judge = () => {
    let flag = false
    when.forEach((item => {
      const { key, value } = item
      if (attr[key] === value) {
        flag = true
      }
    }))
    return flag
  }

  return judge() && (
    <div>
      <div>{label}:</div>
      <Input
        defaultValue={attr[editor.attrName]}
        onChange={(evt) => handleChange(evt.target.value, editor.attrName)}
      />
    </div>
  )
}
export default WrappedRelateEditor