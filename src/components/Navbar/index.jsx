import styles from "./styles.module.scss";
import { navBarLinks } from "./../../constants/navbar.js";
import LiNavbar from "./../LiNavbar";

const NavBar = (setRoute) => {
  // setRoute che ci viene dal MAIN che contiene <Navbar/>
  return (
    <ul className={styles.main}>
      {navBarLinks.map((item, index) => (
        <LiNavbar
          setRoute={setRoute} // setRoute passato da <Navbar/> a <li> (N.B. va passato anche nel componente <LiNavbar/>)
          routeUrl={item.route} // routeUrl va passato anche nel componente <LiNavbar/>
          icon={item.icon} //icon va passato anche nel componente <LiNavbar/>
          key={item.id} //key va passato anche nel componente <LiNavbar/>
          label={item.label} //label va passato anche nel componente <LiNavbar/>
        />
      ))}
    </ul>
  );
};

export default NavBar;
