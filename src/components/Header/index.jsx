import logo from "../../assets/img/logoShop.svg"
import styles from "./styles.module.scss";

const Header = () => {
  return (
    <div className={styles.main}>
      <div className={styles.logo}>
        <img src={logo} alt="" /> <h2><span className={styles.headLetter}>E</span>-<span className={styles.logoText}>commerce</span></h2>
        
      </div>

    </div>
  );
};

export default Header;
