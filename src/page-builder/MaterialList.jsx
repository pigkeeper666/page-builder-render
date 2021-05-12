import { useState } from 'react'
import MaterialCard from './MaterialCard'
import { ReactSortable } from "react-sortablejs";
import { wholeComponentInfo } from 'piggy-components'
import { v4 as uuidv4 } from 'uuid';

const MaterialList = (props) => {
  // 将组件的id全部改变一次
  const changeId = (children) => {
    if (children) {
      children.forEach(child => {
        if (child.children) {
          changeId(child.children)
        }
        child.id = uuidv4()
      })
    } 
  }

  // 改变组件的id
  const handleClone = (currentItem, evt) => {
    currentItem.id = uuidv4()
    changeId(currentItem.children)
    return currentItem
  }

  const [state, setState] = useState(wholeComponentInfo.map(i => handleClone(i)));

  return (
    <div>
      <ReactSortable
        list={state}
        setList={setState}
        group={{
            name: 'groupName',
            pull: 'clone',
            put: false,
        }}
        clone={handleClone}
      >
        {state.map((item) => (
          <div key={item.id}><MaterialCard json={item}/></div>
        ))}
      </ReactSortable>
    </div>
  );
}


export default MaterialList