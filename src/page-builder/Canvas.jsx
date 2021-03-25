import React, { useState, useEffect } from 'react'
import { Card } from 'antd';
import { DeleteOutlined, FullscreenOutlined } from '@ant-design/icons';
import { ReactSortable } from "react-sortablejs";
import { materialMap } from './mock'
import eventEmitter from '../Event'
import styles from './canvas.module.scss'

// 在list中找到id为targetId的item，将其children属性设为replaceContent
const searchAndReplace = (originArr, targetId, replaceContent) => {
  if (!targetId) {
    return replaceContent
  }
  const arr = [].concat(originArr)
  for (let i = 0 ; i < arr.length; i++) {
    const item = arr[i]
    if (item.id === targetId) {
      item.children = replaceContent
      return arr
    }
    if (item.children) {
      searchAndReplace(item.children, targetId, replaceContent)
    }
  }
  return arr
}

// 在list中找到id为targetId的item，将其attr属性设为replaceContent
const updateAttr = (originArr, targetId, replaceContent) => {
  const arr = [].concat(originArr)
  for (let i = 0 ; i < arr.length; i++) {
    const item = arr[i]
    if (item.id === targetId) {
      item.attr = replaceContent
      return arr
    }
    if (item.children) {
      updateAttr(item.children, targetId, replaceContent)
    }
  }
  return arr
}

const deleteItem = (originArr, targetId) => {
  const arr = [].concat(originArr)
  const rst = []
  for (let i = 0 ; i < arr.length; i++) {
    const item = arr[i]
    if (item.id === targetId) {
      continue
    }
    if (item.children) {
      const afterDelete = deleteItem(item.children, targetId)
      item.children = afterDelete
    }
    rst.push(item)
  }
  return rst
} 

const Canvas = (props) => {
  const [list, setList] = useState([]);
  const [currentChosenItem, setCurrentChosenItem] = useState({})

  useEffect(() => {
    const handler = (params) => {
      const { id } = currentChosenItem
      const finalList = updateAttr(list, id, params.attr)
      setList(finalList)
    }
    eventEmitter.on('attribute-change', handler)
    return () => {
      eventEmitter.off('attribute-change', handler)
    }
  }, [list, currentChosenItem])


  const handleSetList = (partList, parentId) => {
    const finalList = searchAndReplace(list, parentId, partList)
    setList(finalList)
  }

  // 选中Item
  const handleChosen = (evt, obj, parentId) => {
    // 阻止冒泡
    if (evt.stopPropagation) {
      evt.stopPropagation()
    }
    setCurrentChosenItem(obj)
    eventEmitter.emit('item-chosen', obj)
  }

  // 删除Item
  const handleDelete = (evt, obj) => {
    // 阻止冒泡
    if (evt.stopPropagation) {
      evt.stopPropagation()
    }
    setList(deleteItem(list, obj.id))
    setCurrentChosenItem(obj)
    eventEmitter.emit('item-chosen', {})
  }

  // 递归渲染组件
  const renderComponent = (arr) => {
    return (
      arr?.map(item => {
        const Component = materialMap[item.name]
        const isChosen = item.id === currentChosenItem.id
        const injetctParentId = item.id
        if (!item.children) {
          return (
            <Component
              onClick={(evt) => handleChosen(evt, item, injetctParentId)}
              className={isChosen ? styles['chosen-item'] : ''}
              {...item.attr}
              key={item.id}
            />
          )
        }
        return (
            <Component
              key={item.id}
              onClick={(evt) => handleChosen(evt, item, injetctParentId)}
              className={isChosen ? styles['chosen-item'] : ''}
              {...item.attr}
            >
              <ReactSortable
                list={item.children || []}
                className={styles['inherit-min-height']}
                setList={(newList) => handleSetList(newList, injetctParentId)}
                group='groupName'
                fallbackOnBody
                invertSwap
              >
                {renderComponent(item.children)}
              </ReactSortable>
            </Component>
        )
      })
    )
  }

  const renderTitle = () => {
    return (
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <span>预览</span>
        <div>
          <span className={styles['tool-icon']} onClick={(evt) => handleDelete(evt, currentChosenItem)}><DeleteOutlined /></span>
          <span className={styles['tool-icon']}><FullscreenOutlined /></span>
        </div>
      </div>
    )
  }

  return (
    <div className={styles['full-height']}>
      <Card
        title={renderTitle()}
        bodyStyle={{height: '100%'}}
        className={styles['full-height']}
      >
        <ReactSortable
          list={list}
          className={styles['full-height']}
          setList={(newList) => handleSetList(newList, undefined)}
          group='groupName'
          fallbackOnBody
          invertSwap
        >
          {renderComponent(list)}
        </ReactSortable>
      </Card>
    </div>

  )
};

export default Canvas