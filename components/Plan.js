import styles from './Plan.module.css';

// 常量
const ITEM_CONTENT = [
  {
    title: '智能语音平台',
    content:
      '华来智能语音平台通过先进AI算法，对企业提供有效地进行数据管理和分析、可视化图谱构建及对话管理、算法选择和优化、模型训练等服务。',
    id: 't1'
  },
  {
    title: '企业知识图谱构建',
    content:
      '华来企业知识图谱构建服务，提供基于ToB业务场景和特定需求构建企业私有知识图谱，并提供高效的企业级数据应用，全程专业保持企业数据安全。',
    id: 't2'
  },
  {
    title: '智能对话平台',
    content:
      '华来智能对话平台提供声纹识别、语义理解、对话图谱构建、对话管理和语音合成输出的完整技术服务和企业级应用。',
    id: 't3'
  }
];

// 细分组件
const PlanItem = ({ idx, detail }) => (
  <div className={`${styles.plan_item} ${styles['bg' + idx]}`}>
      <h5>{detail.title}</h5>
      <div className={styles.content}>
        {/* <img src={`./static/plan-bg${idx}.png`} alt="流程图" /> */}
        <img alt="流程图" />
        <p>{detail.content}</p>
    </div>
  </div>
);

// 模块
const Plan = () => (
  <div>
    {ITEM_CONTENT.map((item, idx) => (
      <PlanItem idx={idx + 1} detail={item} key={idx} />
    ))}
  </div>
);

export default Plan;
