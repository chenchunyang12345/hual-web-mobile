import { Component } from 'react';
import styles from './Nav.module.css';
import NavContent from './NavContent';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navVisible: false, // 导航菜单的显隐
    };
  }

  handleClick = () => {
    this.setState({
      navVisible: !this.state.navVisible,
    });
  };

  render() {
    let { navVisible } = this.state;
    return (
      <>
        {/* 实际的dom */}
        <div className={styles.nav_wrap}>
          <h1>
            <a href="/" className={styles.nav_logo}>
              华来知识
            </a>
          </h1>
          <div className={styles.nav_icon_wrap} onClick={this.handleClick}>
            <div className={styles.nav_icon}></div>
          </div>
          {navVisible ? <NavContent /> : null}
        </div>
        {/* 占位的dom */}
        <div className={styles.nav_placeholder}></div>
      </>
    );
  }
}

export default Nav;
