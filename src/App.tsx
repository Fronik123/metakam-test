import React, { FC } from "react";
import styles from "./App.module.css";

//component
import Header from "./component/header/Header";
import Navigation from "./component/navigation/Navigation";
import Product from "./component/product/Product";

const App: FC = () => {
  return (
    <div className={styles.wrapper}>
      <Header></Header>
      <Navigation></Navigation>
      <Product></Product>
    </div>
  );
};

export default App;
