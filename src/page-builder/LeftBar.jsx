import { useState } from 'react'
import { Card } from 'antd';
import MateialList from './MaterialList'
import Outline from './Outline'
import styles from './Leftbar.module.scss'

const tabList = [
  {
    key: 'material',
    tab: '物料',
  },
  {
    key: 'outline',
    tab: '大纲',
  },
];


const LeftBar = () => {
  const [activeTab, setActiveTab] = useState('material')
  
  const handleTabChange = (key) => {
    setActiveTab(key)
  }

  return (
    <div className={styles['left-bar']}>
      <Card
        className={styles['card']}
        tabList={tabList}
        headStyle={{fontSize: 8, height: 58}}
        bodyStyle={{padding: 5, overflow: 'scroll', height: 'calc(100% - 48px)'}}
        tabProps={{
          centered: true,
        }}
        activeTabKey={activeTab}
        onTabChange={handleTabChange}
      >
        {
          activeTab === 'material'
          ? <MateialList />
          : <Outline />
        }
      </Card>
    </div>
  )
};

export default LeftBar