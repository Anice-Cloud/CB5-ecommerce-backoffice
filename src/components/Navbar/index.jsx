import styles from "./styles.module.scss";
import { navBarLinks } from "./../../constants/navbar.js";
import LiNavbar from "./../LiNavbar";

const NavBar = () => {
  return (
    <ul className={styles.main}>
      {navBarLinks.map((item, index) => (
        <LiNavbar icon={item.icon} key={item.id} label={item.label} />
      ))}
    </ul>
  );
};

export default NavBar;
