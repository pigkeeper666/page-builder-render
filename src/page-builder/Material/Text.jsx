

const Text = (props) => {
  const { style, value, ...others } = props
  return (
    <span style={{...style}} {...others}>{value}</span>
  )
}

export default Text