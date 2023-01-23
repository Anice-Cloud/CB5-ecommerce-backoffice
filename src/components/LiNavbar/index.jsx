import styles from "./styles.module.scss";
const LiNavbar = ({ label, icon }) => {
  return (
    <li className={styles.main}>
      <div className={styles.icon}>{icon}</div>
      <div className={styles.label}>{label}</div>
    </li>
  );
};

export default LiNavbar;
