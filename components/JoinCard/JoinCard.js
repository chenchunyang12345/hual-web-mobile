import React, { Component } from "react";
import styles from "./JoinCard.module.css";
class JoinCard extends Component {
  render() {
    return (
      <div>
        <div className={`${styles.card} card-hover`}>
          <div className={styles.title_text1}>
            <p>{this.props.text1}</p>
          </div>
          <img className={styles.portrait} src={this.props.portrait} alt="" />
          <div className={styles.title_text2}>
            <p>{this.props.text2}</p>
          </div>
          <div className={`${styles.button_into} button_into`}>
            <a
              className={`button_into_a ${styles.button_into_a}`}
              href={this.props.url}
              target="_blank"
            >
              {this.props.buttonName}
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default JoinCard;
