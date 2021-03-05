import { Card, Popover, Avatar } from 'antd';
import { AntDesignOutlined } from '@ant-design/icons';
import styles from './materialCard.module.scss'

const { Meta } = Card

const MaterialCard = (props) => {
  return (
    <Card
      className={styles['material-card']}
      size="small"
    >
      <Meta
        description="用于输入内容，是表单元素"
        avatar={
          <Avatar style={{backgroundColor: '#1890ff'}} icon={<AntDesignOutlined />} />
        }
        title={
          <>
            <span className={styles['card-title']}>
              <span>输入框</span>
              <Popover
                content={
                  <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                  />
                }
                placement="right"
              >
                <span className={styles['preview']}>预览</span>
              </Popover>
            </span>
          </>
        }
      />
    </Card>
    
  )
}

export default MaterialCard