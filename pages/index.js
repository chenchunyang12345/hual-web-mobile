import { Component } from 'react';
// import Swiper from 'swiper/js/swiper.min';
import Layout from '../layout/layout';
// import ProCards from '../components/ProCards';
// import Partner from '../components/Partner';
// import Core from '../components/Core';
import styles from './index.module.css';

class Home extends Component {

  render() {
    return (
      <Layout title="华来知识">
        {/* 轮播图 */}
        {/* <div className="swiper-container">
          <div className="swiper-wrapper">
            <div className="swiper-slide item1">
              <div className="inner">
                <h3>华来科技</h3>
                <p>行业领先的AI语音语音技术服务提供商</p>
                <p>
                  致力于利用知识图谱、语义理解技术，结合行业数据，打造行业智能生态环境，为企业AI创新赋能。
                </p>
              </div>
            </div>
            <div className="swiper-slide item2">
              <div className="inner">
                <h3>华来科技</h3>
                <p>成熟的ToB AI解决方案</p>
                <ul>
                  <li>智能语义平台</li>
                  <li>智能对话系统</li>
                  <li>企业知识图谱构建</li>
                  <li>声纹识别管理和应用平台</li>
                </ul>
              </div>
            </div>
            <div className="swiper-slide item3">
              <div className="inner">
                <h3>华来科技</h3>
                <p>扎实技术底蕴，与众多行业一线企业合作</p>
                <p>
                  为招商银行、泰康人寿、国家电网、谷歌、腾讯、阿里巴巴等数家企业提供技术解决方案
                </p>
              </div>
            </div>
          </div>
          <div className="swiper-pagination"></div>
        </div> */}
        <div className="inner">
          {/* 核心技术 */}
          <div className="tec">
            <h4>核心技术</h4>
            {/* <Core /> */}
          </div>
          {/* 服务和产品展示 */}
          <div className="pro">
            <h4>服务和产品展示</h4>
            {/* <ProCards /> */}
          </div>
          {/* 优质客户 */}
          <div className="cli">
            <h4>优质客户</h4>
            {/* <Partner /> */}
          </div>
        </div>
      </Layout>
    );
  }
}

export default Home;
