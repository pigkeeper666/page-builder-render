import { Card } from 'antd';
import styles from './leftbar.module.scss'

const Canvas = () => {

  return (
    <div className={styles['left-bar']}>
      <Card
        className={styles['card']}
      >
        画布区域
      </Card>
    </div>
  )
};

export default Canvas