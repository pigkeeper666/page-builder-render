const Container = (props) => {
  // 插槽
  const { children, style, ...otherProps } = props
  return (
    <div
      style={{ ...style }}
      {...otherProps}
    >
      {children}
    </div>
  )
}

export default Container