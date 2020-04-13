import { Component } from 'react';
import Link from 'next/link';
import styles from './ProCards.module.css';

// 常量
const CONTENT = [
  {
    title: 'AI培训',
    desc: '模拟保险销售真实工作场景\n实现从入门到职业能力全面掌握'
  },
  {
    title: '保险行业知识化解决方案',
    desc: '为保险行业提供知识化智能化辅助\n降低从业门槛，提高成单率'
  },
  {
    title: 'ai客服服务方案',
    desc: '快速响应，高效率，7*24小时在线\n多渠道智能客服'
  },
  {
    title: 'EHR',
    desc: '智能化人力知识管理和服务\n提高人力资源管理效率\n高效员工问题解答'
  }
];

// 单个卡片
class Card extends Component {

  componentDidMount() {
    // 该页面中所有的具有more_btn类名的都会加上这些事件
    let btns = [...document.querySelectorAll(".more_btn")];
    btns.forEach(item => {
      item.addEventListener("touchstart", () => {
        item.className = 'more_btn button_into_hover button_into_hover_a button_into_hover_border';
      });
      item.addEventListener("touchend", () => {
        item.className = 'more_btn';
      });
    })
  }

  render() {
    let { content, idx } = this.props;
    return (
      <div className={`${styles.card} ${styles[`bg${idx}`]}`}>
        <p className={styles.card_title}>{content.title}</p>
        <p className={styles.card_desc}>{content.desc}</p>
        <Link href={`${process.env.path.nav3}#p${idx}`}>
          <a className="more_btn">
            了解更多
          </a>
        </Link>
      </div>
    )
  }
}

// 整体
const ProCards = () => (
  <div className={styles.cards_container}>
    {CONTENT.map((item, idx) => (
      <Card content={item} idx={idx + 1} key={idx} />
    ))}
  </div>
);

export default ProCards;
