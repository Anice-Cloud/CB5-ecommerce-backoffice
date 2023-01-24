import styles from "./styles.module.scss";

const LiNavbar = ({ label, icon, setRoute, routeUrl }) => {
  return (
    // al click cambio URL: route corrispondente all'item del menu !!!non funziona
    <li onClick={() => setRoute(routeUrl)} className={styles.main}> 
      <div className={styles.icon}>{icon}</div>
      <div className={styles.label}>{label}</div>
    </li>
  );
};

export default LiNavbar;
