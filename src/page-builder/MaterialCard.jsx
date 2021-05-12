import { Card, Popover, Avatar } from 'antd';
import { AntDesignOutlined } from '@ant-design/icons';
import styles from './MaterialCard.module.scss'

const { Meta } = Card

const MaterialCard = (props) => {
  const { json } = props
  return (
    <Card
      className={styles['material-card']}
      style={{ marginBottom: 8}}
      size="small"
    >
      <Meta
        description={json.description}
        avatar={
          <Avatar style={{backgroundColor: '#1890ff'}} icon={<AntDesignOutlined />} />
        }
        title={
          <>
            <span className={styles['card-title']}>
              <span>
                {json.name}
              </span>
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