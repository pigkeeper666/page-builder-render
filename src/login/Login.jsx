import { Divider} from 'antd';
import LoginCard from './LoginCard'
// import pic from './ira_gallery.png'
// import icon from './icon.png'
// import pic from '../../public/ira_gallery.png'
// import icon from '../../public/icon.png'
import styles from './Login.module.scss'

const Login = (props) => {
  return (
    <div className={styles['container']}>
      <div className={styles['content']}>
          <img src="http://1.15.135.140:3005/images/ira_gallery.png" alt="pic" height="90%"></img>
          <LoginCard/>
      </div>
      <div className={styles['footer']}>
        <img src="http://1.15.135.140:3005/images/icon.png" height={72} alt="pic"/>
        <span className={styles['title']}>前端页面搭建器</span>
        <div className={styles['bottom-text']}>
          <span>物料组件库</span>
          <Divider type="vertical" />
          <span>脚手架说明</span>
          <Divider type="vertical" />
          <span>包管理支持</span>
          <Divider type="vertical" />
          <span>联系开发者</span>
        </div>
      </div>
    </div>
  )
}

export default Login