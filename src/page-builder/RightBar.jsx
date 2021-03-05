import { Card } from 'antd';
import styles from './leftbar.module.scss'

const RightBar = () => {

  return (
    <div className={styles['left-bar']}>
      <Card
        title="属性区域"
        className={styles['card']}
      >
        属性区域
      </Card>
    </div>
  )
};

export default RightBar