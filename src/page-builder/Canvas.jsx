import React, { useState, useEffect } from 'react'
import { Card, message, Drawer } from 'antd';
import { DeleteOutlined, FullscreenOutlined } from '@ant-design/icons';
import { useHistory } from "react-router-dom";
import { ReactSortable } from "react-sortablejs";
import { componentMap } from 'piggy-components'
import { PageRenderSDK } from 'piggy-page-render'
import request from '../request'
import eventEmitter from '../Event'
import styles from './Canvas.module.scss'

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
  const [previewVisible, setPreviewVisible] = useState(false)
  const [currentChosenItem, setCurrentChosenItem] = useState({})
  const history = useHistory()
  const pageId = history.location.state.pageId

  useEffect(() => {
    request.post('/api/getJson', {
      pageId,
    })
      .then((res) => {
        const arr = JSON.parse(res?.data?.pageJson)
        setList(arr || [])
      })
      .catch((err) => message.error('出错了'))
  }, [pageId])

  // 事件注册
  useEffect(() => {
    const attrHandler = (params) => {
      const { id } = currentChosenItem
      const finalList = updateAttr(list, id, params.attr)
      setList(finalList)
    }

    const saveHandler = () => {
      request.post('/api/saveJson', {
        pageId,
        json: JSON.stringify(list),
      })
        .then((res) => {
          message.success('保存成功')
        })
        .catch((err) => message.error('出错了'))
    }
  
    const previewHandler = () => {
      setPreviewVisible(true)
    }

    // 监听属性改变
    eventEmitter.on('attribute-change', attrHandler)
    // 监听按钮 传输数据
    eventEmitter.on('save', saveHandler)
    // 监听按钮 预览页面
    eventEmitter.on('preview', previewHandler)

    return () => {
      eventEmitter.off('attribute-change', attrHandler)
      eventEmitter.off('save', saveHandler)
    }
  }, [list, currentChosenItem, pageId])


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
        const Component = componentMap[item.name]
        const isChosen = item.id === currentChosenItem.id
        const injetctParentId = item.id
        if (!item.children) {
          return (
            <Component
              onClick={(evt) => handleChosen(evt, item, injetctParentId)}
              className={isChosen ? styles['chosen-item'] : ''}
              {...item.attr}
              key={item.id}
              mode="edit"
            />
          )
        }
        return (
            <Component
              key={item.id}
              onClick={(evt) => handleChosen(evt, item, injetctParentId)}
              className={isChosen ? styles['chosen-item'] : ''}
              mode="edit"
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
      <div
       style={{display: 'flex', justifyContent: 'space-between'}}
      >
        <span>拖拽画布</span>
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
        headStyle={{height: 58}}
        bodyStyle={{padding: 12, overflow: 'scroll', height: 'calc(100% - 58px)'}}
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
      <Drawer
        destroyOnClose
        title="页面预览"
        placement="bottom"
        closable={true}
        onClose={() => setPreviewVisible(false)}
        visible={previewVisible}
        height="90vh"
        key="bottom"
      >
        <PageRenderSDK list={list}/>
      </Drawer>
    </div>
  )
};

export default Canvas