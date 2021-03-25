import Header from './page-builder/Header'
import LeftBar from './page-builder/LeftBar'
import Canvas from './page-builder/Canvas'
import RightBar from './page-builder/RightBar'
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';
import styles from './App.module.scss';

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
        <Col span={4}>
          <LeftBar />
        </Col>
        <Col span={16}>
          <Canvas />
        </Col>
        <Col span={4}>
          <RightBar />
        </Col>
      </Row>
    </div>
  );
}

export default App;