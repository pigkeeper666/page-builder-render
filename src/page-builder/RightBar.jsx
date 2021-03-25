import { useEffect, useState } from 'react'
import { Card, Button, Input } from 'antd';
import { mockData } from './mock'
import { EDITOR_MAP } from './WrappedComponent'
import eventEmitter from '../Event'
import styles from './leftbar.module.scss'

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

  const setAttributes = (evt, attrName, isStyle) => {
    const { attr } = currentComponent
    const copy = Object.assign(currentComponent, {})
    if (isStyle) {
      const { style } = attr
      copy.attr = {
        ...attr,
        style: {
          ...style,
          [attrName]: evt.target.value
        }
      }
    } else {
      copy.attr = {
        ...attr,
        [attrName]: evt.target.value,
      }
    }
    eventEmitter.emit('attribute-change', copy)
  }

  const renderEditor = () => {
    const { editor, attr } = currentComponent
    if (editor && Array.isArray(editor)) {
      return (
        <div key={currentComponent.id}>
          <h4>{currentComponent.name}</h4>
          {
            editor.map(item => {
              const Component = EDITOR_MAP[item.type]
              return (
                <div key={`${currentComponent.id}${item.attrName}`}>
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
        title="属性区域"
        className={styles['card']}
      >
        {renderEditor()}
        {JSON.stringify(currentComponent)}
      </Card>
    </div>
  )
};

export default RightBar