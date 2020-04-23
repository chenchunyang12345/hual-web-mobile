import React, { Component } from "react";
import styles from "./Footer.module.css";
import Link from "next/link";

class Footer extends Component {
  componentDidMount() {
    let mailLink = Array.prototype.slice.call(
      document.querySelectorAll(".mail_link")
    );
    mailLink.forEach((item, index) => {
      item.addEventListener("touchstart", () => {
        item.className = item.className + " " + "mail_link_hover";
      });
      item.addEventListener("touchend", () => {
        item.className = item.className.split(" mail_link_hover").join("");
      });
    });
  }
  render() {
    return (
      <div className={styles.footer}>
        <div className={styles.logo}>
          <a href="/"></a>
        </div>
        <p className={styles.introduce_text}>
          行业领先的AI语音语音技术服务提供商。
          <br />
          致力于利用知识图谱、语义理解技术，结合行业数据，
          打造行业智能生态环境，为企业AI创新赋能。
          <a
            href="http://www.beian.miit.gov.cn"
            target="_blank"
            className={styles.gov}
          >
            京ICP备19007763
          </a>
        </p>

        <div className={styles.explain}>
          <div className={styles.core}>
            <div className={styles.headline}>
              <Link href={`${process.env.path.nav2}`}>
                <a>核心技术</a>
              </Link>
            </div>
            <div className={styles.content}>
              <Link href={`${process.env.path.nav2}#t1`}>
                <a className={styles.subhead}>智能语音平台</a>
              </Link>
              <Link href={`${process.env.path.nav2}#t2`}>
                <a className={styles.subhead}>企业知识图谱构建</a>
              </Link>
              <Link href={`${process.env.path.nav2}#t3`}>
                <a className={styles.subhead}>智能对话平台</a>
              </Link>
            </div>
          </div>
          <div className={styles.core}>
            <div className={styles.headline}>
              <Link href={`${process.env.path.nav3}`}>
                <a>产品与服务</a>
              </Link>
            </div>
            <div className={styles.content}>
              <Link href={`${process.env.path.nav3}#p1`}>
                <a className={styles.subhead}>AI培训</a>
              </Link>
              <Link href={`${process.env.path.nav3}#p2`}>
                <a className={styles.subhead}>保险行业知识化解决方案</a>
              </Link>
              <Link href={`${process.env.path.nav3}#p3`}>
                <a className={styles.subhead}>ai客服服务方案</a>
              </Link>
              <Link href={`${process.env.path.nav3}#p4`}>
                <a className={styles.subhead}>EHR</a>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.contact}>
          <div className={styles.headline}>
            <Link href={`${process.env.path.nav4}`}>
              <a>联系我们</a>
            </Link>
          </div>
          <div className={styles.container}>
            <p className={styles.subhead}>
              媒体垂询
              <br />
              <a
                href="Mailto:media@hual.ai"
                className={`${styles.mail_link} mail_link`}
              >
                media@hual.ai
              </a>
            </p>
            <p className={`${styles.subhead} ${styles.marginLeft}`}>
              商务合作
              <br />
              <a
                href="Mailto:business@hual.ai"
                className={`${styles.mail_link} mail_link`}
              >
                business@hual.ai
              </a>
            </p>
            <p className={`${styles.subhead} ${styles.marginLeft}`}>
              市场合作
              <br />
              <a
                href="Mailto:mkt@hual.ai"
                className={`${styles.mail_link} mail_link`}
              >
                mkt@hual.ai
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
