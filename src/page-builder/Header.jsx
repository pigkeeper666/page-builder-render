import { PageHeader, Button } from 'antd';
import styles from './header.module.scss'

const Header = () => (
  <div className={styles['header']}>
    <PageHeader
      onBack={() => null}
      title="前端页面搭建器"
      subTitle="Page Builder"
      extra={[
        <Button key="3">预览</Button>,
        <Button key="2">发布</Button>,
        <Button key="1" type="primary">
          保存
        </Button>,
      ]}
    />
  </div>
);

export default Header