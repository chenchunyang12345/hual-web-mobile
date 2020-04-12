import styles from './Partner.module.css';

const Item = ({ idx }) => (
  <div className={`${styles.item} ${styles[`bg${idx}`]}`}>
    logo图
  </div>
);

const Partner = () => (
  <div className={styles.partner}>
      <Item idx={1} />
      <Item idx={2} />
      <Item idx={3} />
      <Item idx={4} />
      <Item idx={5} />
      <Item idx={6} />
      <Item idx={7} />
      <Item idx={8} />
      <Item idx={9} />
      <Item idx={10} />
      <Item idx={11} />
      <Item idx={12} />
  </div>
);

export default Partner;
