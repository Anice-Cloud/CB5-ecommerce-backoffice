import Navbar from "../Navbar";
import styles from "./styles.module.scss";

const MainContainer = () => {
  return (
    <div className={styles.main}>
      <div className={styles.sxColumn}>
        <Navbar />
      </div>
      <div className={styles.dxColumn}></div>
    </div>
  );
};

export default MainContainer;
