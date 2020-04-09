import React, { Component } from "react";
import styles from "./TeamCard.module.css";
class TeamCard extends Component {
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
