
const Grid = (props) => {
  const { children, style, ...otherProps } = props
  return (
    <div
      style={{...style }}
      {...otherProps}
    >
      {children}
    </div>
  )
}

export default Grid