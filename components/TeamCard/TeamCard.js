import React, { Component } from "react";
import styles from "./TeamCard.module.css";
class TeamCard extends Component {
  componentDidMount() {
    /* 创始团队 */
    let teamItem = document.querySelectorAll(".team_item");
    teamItem.forEach((item, index) => {
      item.addEventListener("touchstart", () => {
        item.className = item.className + " " + "team_item_hover";
      });
      item.addEventListener("touchend", () => {
        item.className = item.className.split(" team_item_hover").join("");
      });
    });
  }
  /* 换行 中间加"@$" */
  renderBr = (text) => {
    let result = text.split("@$");
    if (result) {
      return (
        <>
          {result.map((item, index) => {
            return (
              <p key={index}>
                {item}
                <br />
              </p>
            );
          })}
        </>
      );
    }

    return <>{text}</>;
  };
  render() {
    return (
      <div>
        <div className={`team_item ${styles.card}`}>
          <img className={styles.portrait} src={this.props.portrait} alt="" />
          <div className={`${styles.name} ${styles.public_text}`}>
            <p>{this.props.name}</p>
          </div>
          <div className={`${styles.professor} ${styles.public_text}`}>
            <p>{this.props.professor}</p>
          </div>
          <div className={styles.position}>
            {this.renderBr(this.props.position)}
          </div>
        </div>
      </div>
    );
  }
}

export default TeamCard;
