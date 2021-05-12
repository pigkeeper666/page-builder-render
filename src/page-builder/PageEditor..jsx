import Header from './Header'
import LeftBar from './LeftBar'
import Canvas from './Canvas'
import RightBar from './RightBar'
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';
import styles from './PageEditor.module.scss';

function App() {
  return (
    <div className={styles['outside-container']}>
      <Row className={styles['up-part']}>
        <Col span={24}>
          <Header />
        </Col>
      </Row>
      <Row
        className={styles['bottom-part']}
        gutter={8}
      >
        <Col span={4} className={styles['bottom-col']}>
          <LeftBar />
        </Col>
        <Col span={16} className={styles['bottom-col']}>
          <Canvas />
        </Col>
        <Col span={4} className={styles['bottom-col']}>
          <RightBar />
        </Col>
      </Row>
    </div>
  );
}

export default App;