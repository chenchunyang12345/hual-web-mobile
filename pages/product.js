import React, { Component } from "react";
import Layout from "../layout/layout";
import styles from "./product.module.css";

class Product extends Component {
  render() {
    return (
      <Layout title="华来知识 - 产品与服务">
        <div className={styles.jishu}>
          <p className={styles.jishu_title}>华来知识</p>
          <p className={styles.jishu_text}>产品与服务</p>
        </div>
        <div className={styles.context_item}>
          <div className={styles.context_text}>
            <div className="anchor" id="p1"></div>
            <p className={styles.text_title}>AI培训</p>
            <p className={styles.text_container}>
              实战课程：先进AI 客户模拟方案，还原真实销售实战场景
              <br />
              <br />
              真实训练：7级AI情绪模拟，训练过程中动态变化，沉浸式培训体验
              <br />
              <br />
              导师点评：优秀销售案例构建知识图谱;逐句AI点评分析,提供标准话术指导
              <br />
              <br />
              高效&成本低：APP/PC随时练习，极大降低“导师1vs1”培训成本
            </p>
          </div>
          <img
            className={styles.context_img}
            src="./static/sales-manager-giving-advice-his-260nw-529008256.png"
            alt=""
          />
        </div>
        <div className={styles.context_item}>
          <img
            className={styles.context_img}
            src="./static/happy-senior-old-family-couple-260nw-1437231725.png"
            alt=""
          />
          <div className={styles.context_text}>
            <div className="anchor" id="p2"></div>
            <p className={styles.text_title}>保险行业知识化解决方案</p>
            <p className={styles.text_container}>
              智能投保解决方案：医疗知识图谱支撑轻量级保险投保预分析，有效降低从业人员医疗知识和投保要求理解成本
              <br />
              <br />
              智能理赔解决方案：保险知识图谱支撑信息推理，有效提高从业人员业务反馈速度，提高客户满意度
              <br />
              <br />
              智能产品解决方案：丰富全面保险知识智能管理系统，提高业务专业性，轻松获取客户信任
            </p>
          </div>
        </div>
        <div className={styles.context_item}>
          <div className={styles.context_text}>
            <div className="anchor" id="p3"></div>
            <p className={styles.text_title}>AI客服解决方案</p>
            <p className={styles.text_container}>
              多渠道入口：在线客服、人工客服、公众号、小程序、呼叫中心等多渠道统一管理和应对
              <br />
              <br />
              客户画像：形成客户画像，根据客户画像优化回答策略，提供更优质更精准的回答
              <br />
              <br />
              人机协同服务：NLP文本算法辅助，语义分析、问题分类，提高人工客服效率
              <br />
              <br />
              自动应答机器人：基于知识图谱、意图理解的智能问答机器人
            </p>
          </div>
          <img
            className={styles.context_img}
            src="./static/编组 2.png"
            alt=""
          />
        </div>
        <div className={`${styles.context_item} ${styles.marginBottom}`}>
          <img
            className={styles.context_img}
            src="./static/编组 5.png"
            alt=""
          />
          <div className={styles.context_text}>
            <div className="anchor" id="p4"></div>
            <p className={styles.text_title}>E-HR解决方案</p>
            <p className={styles.text_container}>
              人力管理系统：知识图谱支撑的员工问题解答，一键直达式考勤、查询、申请等业务办理
              <br />
              <br />
              人机协同服务：最大限度节约HR时间和精力，多入口对接，智能通知，智能推送，HR智能化办公
              <br />
              <br />
              企业员工画像：基于企业数据分析的企业员工画像，最优质的员工服务与员工分析
            </p>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Product;
