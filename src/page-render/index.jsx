import { useState, useEffect } from 'react'
import { materialMap } from '../page-builder/mock'
import { useHistory } from "react-router-dom";

const PageRender = (props) => {
  const { list } = props
  // const [list, setList] = useState([])
  const history = useHistory()
  const pageId = history.location.state.pageId

  // useEffect(() => {
  //   request.post('/api/getJson', {
  //     pageId,
  //   })
  //     .then((res) => {
  //       console.log(res.data)
  //       const arr = JSON.parse(res?.data?.pageJson)
  //       setList(arr || [])
  //     })
  //     .catch((err) => message.error('出错了'))
  // }, [pageId])

  // 递归渲染组件
  const renderComponent = (arr) => {
    return (
      arr?.map(item => {
        const Component = materialMap[item.name]
        if (!item.children) {
          return (
            <Component
              {...item.attr}
              key={item.id}
            />
          )
        }
        return (
            <Component
              key={item.id}
              {...item.attr}
            >
              {renderComponent(item.children)}
            </Component>
        )
      })
    )
  }
  return (
    <div style={{width: '100%', boxSizing:'border-box'}}>
      {renderComponent(list) || null}
    </div>
  )
}

export default PageRender