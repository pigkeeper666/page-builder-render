import { useEffect, useState } from 'react'
import { Card } from 'antd';
import { EDITOR_MAP } from './WrappedComponent'
import eventEmitter from '../Event'
import styles from './Leftbar.module.scss'

const RightBar = (props) => {
  const [currentComponent, setCurrentComponent] = useState({})

  useEffect(() => {
    eventEmitter.on('item-chosen', handler)
    return () => {
      eventEmitter.off('item-chosen', handler)
    }
  }, [])

  const handler = (params) => {
    setCurrentComponent(params)
  }

  const setAttributes = (val, attrName, isStyle) => {
    const { attr } = currentComponent
    const copy = {...currentComponent}
    if (isStyle) {
      const { style } = attr
      copy.attr = {
        ...attr,
        style: {
          ...style,
          [attrName]: val
        }
      }
    } else {
      copy.attr = {
        ...attr,
        [attrName]: val,
      }
    }
    setCurrentComponent(copy)
    eventEmitter.emit('attribute-change', copy)
  }

  const renderEditor = () => {
    const { editor, attr } = currentComponent
    if (editor && Array.isArray(editor)) {
      return (
        <div key={currentComponent.id}>
          {
            editor.map(item => {
              const Component = EDITOR_MAP[item.type]
              return (
                <div
                  key={`${currentComponent.id}${item.attrName}`}
                  style={{ marginBottom: 10 }}
                >
                  <Component
                    label={item.label}
                    attr={attr}
                    editor={item}
                    handleChange={setAttributes}
                  />
                </div>
              )
            })
          }
        </div>
      )
    }
    return <div>暂无数据</div>
  }

  return (
    <div className={styles['left-bar']}>
      <Card
        title={currentComponent?.name || "属性区域"}
        bodyStyle={{padding: 12, overflow: 'scroll', height: 'calc(100% - 58px)'}}
        className={styles['card']}
      >
        {renderEditor()}
        {/* {JSON.stringify(currentComponent)} */}
      </Card>
    </div>
  )
};

export default RightBar