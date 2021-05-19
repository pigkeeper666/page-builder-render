import { useState, useEffect } from 'react'
import eventEmitter from '../Event'
import debounce from "lodash/debounce";
import { v4 as uuidv4 } from 'uuid';
import { Tree, Button } from 'antd'

const { TreeNode } = Tree
const Outline = () => {

  const [data, setData] = useState([])
  const [expand, setExpand] = useState(true)

  const addTitle = (originArr, targetId) => {
    const arr = [].concat(originArr)
    for (let i = 0 ; i < arr.length; i++) {
      const item = arr[i]
      item.title = item.name
      item.key = item.id
      if (item.children) {
        item.children =addTitle(item.children, targetId)
      }
    }
    return arr
  }

  // 事件注册
  useEffect(() => {
    const setFormatData = (dt) => {
      setData(addTitle(dt))
    }
    // 防抖
    const handler = debounce(setFormatData, 150)
    eventEmitter.on('list-change', handler)
    eventEmitter.emit('get-list')
    return () => eventEmitter.off('list-change', handler)
  }, [])

  const handleSelect = (selectedKeys, selectedNodes, node) => {
    eventEmitter.emit('outline-select', selectedKeys[0])
  }

  const loop = data =>
      data.map(item => {
        if (item.children) {
          return (
            <TreeNode key={item.id} title={item.name}>
              {loop(item.children)}
            </TreeNode>
          );
        }
        return <TreeNode key={item.id} title={item.name} />;
      });

  return ( 
    <div >
      <Tree 
        treeData={data}
        defaultExpandAll
        onSelect={handleSelect}
      >
        {/* {loop(data)} */}
      </Tree>
    </div>
  );
}

  

export default Outline