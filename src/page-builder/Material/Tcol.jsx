
const Tcol = (props) => {
  const { children, style, ...others } = props
  return (
    <div
     style={{...style}}
     {...others}
    >
      {children}
    </div>
  )
}

export default Tcol