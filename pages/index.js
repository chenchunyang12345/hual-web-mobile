import { Component } from 'react';
import Link from 'next/link';
import Layout from '../layout/layout';
import MySwiper from '../components/MySwiper';
import ProCards from '../components/ProCards';
import Partner from '../components/Partner';
import Core from '../components/Core';
import styles from './index.module.css';

class Home extends Component {

  render() {
    return (
      <Layout title="华来知识">
        {/* 轮播图 */}
        <MySwiper />
        {/* 导航 */}
        <div className={styles.head_nav}>
          <ul>
            <li>
              <Link href="/technology">
                <a>核心与技术</a>
              </Link>
            </li>
            <li></li>
            <li>
              <Link href="/product">
                <a>产品服务</a>
              </Link>
            </li>
            <li></li>
            <li>
              <Link href="/about">
                <a>关于我们</a>
              </Link>
            </li>
          </ul>
        </div>
        {/* 核心技术 */}
        <div className={styles.tec}>
          <h4>核心技术</h4>
          <Core />
        </div>
        {/* 服务和产品展示 */}
        <div className="pro">
          <h4>服务和产品展示</h4>
          <ProCards />
        </div>
        {/* 优质客户 */}
        <div className="cli">
          <h4>优质客户</h4>
          <Partner />
        </div>
      </Layout>
    );
  }
}

export default Home;
