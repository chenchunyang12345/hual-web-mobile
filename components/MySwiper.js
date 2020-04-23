import { Component } from 'react';
import styles from './MySwiper.module.css';
import Swiper from 'swiper/js/swiper.min';

class MySwiper extends Component {
  componentDidMount() {
    new Swiper('.swiper-container', {
      loop: true,
      autoplay: true,
      pagination: {
        el: '.swiper-pagination',
      },
    });
  }

  render() {
    return (
      <div className={`${styles.container} swiper-container`}>
        <div className="swiper-wrapper">
          <div className={`${styles.item1} swiper-slide`}>
            <h3>华来知识</h3>
            <p>行业领先的AI语音技术服务提供商</p>
            <p>
              致力于利用知识图谱、语义理解技术，结合行业数据，打造行业智能生态环境，为企业AI创新赋能。
            </p>
          </div>
          <div className={`${styles.item2} swiper-slide`}>
            <h3>华来知识</h3>
            <p>成熟的ToB AI解决方案</p>
            <ul>
              <li>智能语音平台</li>
              <li>智能对话系统</li>
              <li>企业知识图谱构建</li>
              <li>声纹识别管理和应用平台</li>
            </ul>
          </div>
          <div className={`${styles.item3} swiper-slide`}>
            <h3>华来知识</h3>
            <p>扎实技术底蕴，与众多行业一线企业合作</p>
            <p>
              为招商银行、泰康人寿、国家电网、谷歌、腾讯、阿里巴巴等数家企业提供技术解决方案
            </p>
          </div>
        </div>
        <div className={`${styles.pagination} swiper-pagination`}></div>
      </div>
    );
  }
}

export default MySwiper;
