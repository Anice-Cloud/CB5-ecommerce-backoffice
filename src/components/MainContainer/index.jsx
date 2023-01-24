import { useState } from "react";
import Categories from "../Categories";
import Home from "../Home";
import Navbar from "../Navbar";
import styles from "./styles.module.scss";

const MainContainer = () => {
  const[route, setRoute] = useState ("categories") //valore iniziale

  return (
    <div className={styles.main}>
      <div className={styles.sxColumn}>
{/* qui passiamo lo stato di cambiamento al componente <Navbar/>(N.B. va passato anche nel componente stesso <Navbar/>)
      padre di <li> */}
        <Navbar setRoute={setRoute}/> 
      </div>
      <div className={styles.dxColumn}>
        {route === "home" && <Home/>}
        {route === "categories" && <Categories/>}
        {route === "products" && <div>Products</div>}
        {route === "orders" && <div>Orders</div>}
        {route === "users" && <div>Users</div>}
        </div>
    </div>
  );
};

export default MainContainer;
