import { Button as Bt } from 'antd'

const Button = (props) => {
  const { value, ...others } = props
  return (
    <Bt {...others}>
      {value}
    </Bt>
  )
}

export default Button