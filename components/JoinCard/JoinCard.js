import React, { Component } from "react";
import styles from "./JoinCard.module.css";
class JoinCard extends Component {
  componentDidMount() {
    /* 加入我们 */
    let buttonInto = document.querySelectorAll(".button_into");
    let button_into_a = document.querySelectorAll(".button_into_a");
    let join_card = document.querySelectorAll(".join_card");
    buttonInto.forEach((item, index) => {
      item.addEventListener("touchstart", () => {
        item.className = item.className + " " + "button_into_hover";
        button_into_a[index].className =
          button_into_a[index].className + " " + "button_into_hover_a";
        join_card[index].className =
          join_card[index].className + " " + "card-hover";
      });
      item.addEventListener("touchend", () => {
        item.className = item.className.split(" button_into_hover").join("");
        button_into_a[index].className = button_into_a[index].className
          .split(" button_into_hover_a")
          .join("");
        join_card[index].className = join_card[index].className
          .split(" card-hover")
          .join("");
      });
    });
  }
  render() {
    return (
      <div className={`${styles.card} join_card`}>
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
    );
  }
}

export default JoinCard;
