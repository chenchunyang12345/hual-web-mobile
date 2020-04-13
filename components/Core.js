import Link from 'next/link';
import styles from './Core.module.css';

// 常量
const DESC = ['智能语音', '企业知识图谱构建', '智能对话平台'];

const CardItem = ({ content, idx }) => (
  <div className={styles.cardItem}>
    <img
      src={`./static/tec_bg${idx}.png`}
      className={styles[`bg${idx}`]}
      alt="技术logo"
    />
    <p>{content}</p>
    <Link href={`${process.env.path.nav2}#t${idx}`}>
      <a className="more_btn">
        查看更多
      </a>
    </Link>
  </div>
);

// 整体
const Core = () => (
  <div className={styles.core}>
    {DESC.map((item, idx) => (
      <CardItem content={item} idx={idx + 1} key={idx} />
    ))}
  </div>
);

export default Core;
