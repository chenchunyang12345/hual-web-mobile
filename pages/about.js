import React, { Component } from "react";
import Layout from "../layout/layout";
import styles from "./about.module.css";
import TeamCard from "../components/TeamCard/TeamCard";
import JoinCard from "../components/JoinCard/JoinCard";

class About extends Component {
  state = {
    teamitem: [
      {
        name: "朱小燕",
        professor: "清华计算机系教授 博导",
        position:
          "智能技术与系统国家重点实验室 主任@$北京市计算机学会 副理事长",
        portrait: "./static/图片1.png",
      },
      {
        name: "戴海生",
        professor: "清华大学 本硕博",
        position:
          "前IBM、联想、百度、京东 语音算法科学家@$百度联通智能客服系统、智慧法院 技术负责人",
        portrait: "./static/图片1(1).png",
      },
      {
        name: "郝宇",
        professor: "清华大学 本硕博",
        position:
          "加拿大IDRC与清华合作研发项目@$多项国家自然科学基金项目@$算法负责人",
        portrait: "./static/图片1(2).png",
      },
      {
        name: "代文韬",
        professor: "清华大学计算机系，本硕",
        position:
          "华来智能语义平台 系统架构师@$泰康智能机器人问答、舆情分析系统 技术负责人 ",
        portrait: "./static/图片1(3).png",
      },
      {
        name: "张钹",
        professor: "院士 清华计算机系教授",
        position: "前 智能技术与系统国家重点实验室 主任",
        portrait: "./static/图片1(4).png",
      },
      {
        name: "黄民烈",
        professor: "清华大学计算机系 本硕博 副教授",
        position: "多项国家自然科学基金项目，申请人，主要参与者",
        portrait: "./static/图片1(5).png",
      },
    ],
    joinitem: [
      {
        text1: "Boss直聘",
        portrait: "./static/boss.png",
        text2: "华来BOSS直聘招聘主页",
        buttonName: "进入平台",
        url: "/",
      },
      {
        text1: "拉钩",
        portrait: "./static/lagou.png",
        text2: "华来拉勾招聘主页",
        buttonName: "进入平台",
        url: "https://www.lagou.com/gongsi/478108.html",
      },
    ],
  };
  componentDidMount() {
    /* 企业荣誉 */
    let textPiece = document.querySelectorAll(".text_piece");

    let circularHover = document.querySelectorAll(".circular");
    let honorTextDate = document.querySelectorAll(".honor_text_date");

    textPiece.forEach((item, index) => {
      item.addEventListener("touchstart", () => {
        item.className = item.className + " " + "text_piece_hover";
        circularHover[index].className =
          circularHover[index].className + " " + "circular_hover";
        honorTextDate[index].className =
          honorTextDate[index].className + " " + "honor_text_date_hover";
      });
      item.addEventListener("touchend", () => {
        item.className = item.className.split(" text_piece_hover").join("");
        circularHover[index].className = circularHover[index].className
          .split(" circular_hover")
          .join("");
        honorTextDate[index].className = honorTextDate[index].className
          .split(" honor_text_date_hover")
          .join("");
      });
    });
  }
  render() {
    return (
      <Layout title="华来知识 - 关于我们">
        <div className={styles.jishu}>
          <p className={styles.jishu_title}>公司简介</p>
          <p className={styles.jishu_text}>
            华来知识立志于利用领先人工智能的科研技术，提供行业人
            <br />
            工智能技术相关解决方案，提供企业效率，缩减企业成本
          </p>
        </div>
        <p className={styles.title1}>我们是谁</p>
        <p className={styles.text1}>
          华来知识创立于2018年，由清华大学教授朱小燕、戴海生博士共同创办。核心技术团队来自清华大学智能技术与系统国家重点实验室及Google、腾讯、百度、搜狗等国内外知名机构及互联网企业，团队有长期的相关技术经验和积累，并已和多个知名企业开展合作。华来知识立志于利用知识图谱、语义理解技术，结合行业数据，打造行业智能生态环境，通过智能为企业赋能。
        </p>
        <p className={styles.title1}>创始团队</p>
        <div className={styles.team_content}>
          {/*    换行中间加 @$   */}
          {this.state.teamitem.map((item, index) => {
            return (
              <TeamCard
                name={item.name}
                professor={item.professor}
                position={item.position}
                portrait={item.portrait}
                key={index}
              />
            );
          })}
        </div>
        <div className={styles.honor_content}>
          <p className={styles.title1}>企业荣誉</p>
          <div className={`${styles.honor_item} ${styles.honor_item_one}`}>
            <div className={styles.honor_text}>
              <p
                className={`${styles.float_right} ${styles.public_title1} text_piece`}
              >
                情感文本内容识别和计算，实现对象相关内容的情感分布，该专利已被三星收购，三星市场部目前正应用该系统分析其产品的用户体验动态变化
                <br />
                <br />
                社交媒体问答数据的挖掘和应用能力持续提升，并与各B端客户合作应用到对话系统设计中，例如音乐查询、大众健康问答、餐饮对话等相关领域的查询和问答系统。
              </p>
            </div>
            <div className={styles.honor_center}>
              <div className={`${styles.circular} circular`}></div>
              <div
                className={`${styles.vertical} ${styles.honor_first_vertical}`}
              ></div>
            </div>
            <div className={styles.honor_text}>
              <p className={`${styles.honor_text_date} honor_text_date`}>
                2018-至今
              </p>
            </div>
          </div>

          <div className={styles.honor_item}>
            <div className={styles.honor_text}>
              <p
                className={`${styles.honor_text_date} honor_text_date ${styles.float_right}`}
              >
                2017
              </p>
            </div>
            <div className={styles.honor_center}>
              <div className={`${styles.circular} circular`}></div>
              <div
                className={`${styles.vertical} ${styles.honor_second_vertical}`}
              ></div>
            </div>
            <div className={styles.honor_text}>
              <p className={`${styles.public_title1} text_piece`}>
                <a>
                  ECM情绪化聊天机器人中国问世，被英国卫报报道，国家领导人参观访问
                </a>
                <br />
                <br />
                <a>朱小燕教授</a>
                带领清华大学搜狗搜索联合战队获得
                <a>NTCIR13-STC2评测比赛总排名第一名</a>
              </p>
            </div>
          </div>

          <div className={styles.honor_item}>
            <div className={styles.honor_text}>
              <p
                className={`${styles.float_right} ${styles.public_title1} text_piece`}
              >
                开始垂直领域问答/对话/交互系统研究，完成多个整体系统，并实施部署上线
              </p>
            </div>
            <div className={styles.honor_center}>
              <div className={`${styles.circular} circular`}></div>
              <div
                className={`${styles.vertical} ${styles.honor_third_vertical}`}
              ></div>
            </div>
            <div className={styles.honor_text}>
              <p className={`${styles.honor_text_date} honor_text_date`}>
                2012
              </p>
            </div>
          </div>

          <div className={styles.honor_item}>
            <div className={styles.honor_text}>
              <p
                className={`${styles.honor_text_date} honor_text_date ${styles.float_right}`}
              >
                2010
              </p>
            </div>
            <div className={styles.honor_center}>
              <div className={`${styles.circular} circular`}></div>
              <div
                className={`${styles.vertical} ${styles.honor_third_vertical}`}
              ></div>
            </div>
            <div className={styles.honor_text}>
              <p className={`${styles.public_title1} text_piece`}>
                <a>开始知识图谱的研究</a>
              </p>
            </div>
          </div>

          <div className={styles.honor_item}>
            <div className={styles.honor_text}>
              <p
                className={`${styles.float_right} ${styles.public_title1} text_piece`}
              >
                获得加拿大政府的国际开发研究中心（IDRC）的
                <a>首席科学家基金（IRCI）</a>
                资助的项目（5+2年，共100+30万加元），同时
                <a>朱小燕本人获得加拿大国际首席科学家称号。</a>
                <br />
                <br />
                开始研究<a>中文开放域无约束问答系统</a>
                ，完成趣答系统。该系统后来被科大讯飞收购
                <br />
                <br />
                国际竞赛获得第一
              </p>
            </div>
            <div className={styles.honor_center}>
              <div className={`${styles.circular} circular`}></div>
              <div
                className={`${styles.vertical} ${styles.honor_first_vertical}`}
              ></div>
            </div>
            <div className={styles.honor_text}>
              <p className={`${styles.honor_text_date} honor_text_date`}>
                2009
              </p>
            </div>
          </div>

          <div className={styles.honor_item}>
            <div className={styles.honor_text}>
              <p
                className={`${styles.honor_text_date} honor_text_date ${styles.float_right}`}
              >
                2007
              </p>
            </div>
            <div className={styles.honor_center}>
              <div className={`${styles.circular} circular`}></div>
              <div
                className={`${styles.vertical} ${styles.honor_third_vertical}`}
              ></div>
            </div>
            <div className={styles.honor_text}>
              <p className={`${styles.public_title1} text_piece`}>
                <a>国际竞赛获得第一</a>
              </p>
            </div>
          </div>

          <div className={styles.honor_item}>
            <div className={styles.honor_text}>
              <p
                className={`${styles.float_right} ${styles.public_title1} text_piece`}
              >
                <a> 蛋白质名词实体识别国际竞赛第一名</a>
                ，算法曾转让（license）给了美国生物信息研究中心NCBI（National
                Center for Biotechnology Information）
                <br />
                <br />
                完成基于Google的<a>原型系统QUANTA，达到当时最好水平</a>
              </p>
            </div>
            <div className={styles.honor_center}>
              <div className={`${styles.circular} circular`}></div>
              <div
                className={`${styles.vertical} ${styles.honor_fourth_vertical}`}
              ></div>
            </div>
            <div className={styles.honor_text}>
              <p className={`${styles.honor_text_date} honor_text_date`}>
                2006
              </p>
            </div>
          </div>

          <div className={styles.honor_item}>
            <div className={styles.honor_text}>
              <p
                className={`${styles.honor_text_date} honor_text_date ${styles.float_right}`}
              >
                2005
              </p>
            </div>
            <div className={styles.honor_center}>
              <div className={`${styles.circular} circular`}></div>
            </div>
            <div className={styles.honor_text}>
              <p className={`${styles.public_title1} text_piece`}>
                开始研究基于信息距离理论的开放域事实性问答系统
              </p>
            </div>
          </div>
        </div>
        <p className={styles.title1}>加入我们</p>
        <div className={styles.card_join}>
          {this.state.joinitem.map((item, index) => {
            return (
              <JoinCard
                text1={item.text1}
                portrait={item.portrait}
                text2={item.text2}
                buttonName={item.buttonName}
                url={item.url}
                key={index}
                onclick={() => {
                  console.log(65465465);
                }}
              />
            );
          })}
        </div>
        <p className={styles.title1}>联系我们，了解更多详细信息</p>
        <div className={styles.contact_button}>
          <a href="Mailto:business@hual.ai">联系我们</a>
        </div>
      </Layout>
    );
  }
}

export default About;
