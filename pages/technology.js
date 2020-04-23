import Layout from '../layout/layout';
import Plan from '../components/Plan';
import Ability from '../components/Ability';
import styles from './technology.module.css';

const Technology = () => (
  <Layout title="华来知识 - 核心与技术">
    {/* banner */}
    <div className={styles.tec_banner}>
      <p>华来面向各类企业建立人工智能驱动的知识体系</p>
      <p>提供包括自然语言处理、知识图谱、数据挖掘、机器学习、情感分析、对话管理等核心技术</p>
    </div>
    {/* 核心技术方案 */}
    <div>
      <Plan />
    </div>
    {/* 技术能力 */}
    <div>
      <h4>技术能力</h4>
      <Ability />
    </div>
  </Layout>
);

export default Technology;
