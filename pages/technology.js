import Layout from '../layout/layout';
import Plan from '../components/Plan';
import Ability from '../components/Ability';
import styles from './technology.module.css';

const Technology = () => (
  <Layout title="华来知识 - 核心与技术">
    {/* 核心技术方案 */}
    <div className="area1">
      <h4>核心技术方案</h4>
      <Plan />
    </div>
    {/* 技术能力 */}
    <div className="area2">
      <h4>技术能力</h4>
      <Ability />
    </div>
  </Layout>
);

export default Technology;
