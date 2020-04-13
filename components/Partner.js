import styles from './Partner.module.css';

const Partner = () => (
  <div className={styles.partner}>
    {
      new Array(12).fill(1).map((item, idx) => (
        <div key={idx}>
          <img 
            className={styles[`bg${idx + 1}`]}
            src={`./static/company/${idx + 1}.png`}
            alt="公司logo" 
          />
        </div>
      ))
    }
  </div>
);

export default Partner;
