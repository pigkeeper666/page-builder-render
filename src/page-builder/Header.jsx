import { PageHeader, Button } from 'antd';
import { useHistory } from "react-router-dom";
import eventEmitter from '../Event'
import styles from './Header.module.scss'

const Header = () => {
  const history = useHistory()
  return (
    <div className={styles['header']}>
      <PageHeader
        onBack={() => history.goBack()}
        title="前端页面搭建器"
        subTitle="Page Builder formed by MrPiggy"
        extra={[
          <Button key="3" onClick={() => eventEmitter.emit('preview')}>预览</Button>,
          <Button key="2">发布</Button>,
          <Button key="1" type="primary" onClick={() => eventEmitter.emit('save')}>
            保存
          </Button>,
        ]}
      />
    </div>
    )
  };

export default Header