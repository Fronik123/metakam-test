import React, { FC } from "react";
import styles from "./Header.module.css";

//img
import favorites from "../../assets/favorites.svg";
import cart from "../../assets/cart.svg";
import search from "../../assets/search.svg";
import person from "../../assets/icon-person.jpg";

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <h1>
        <a href="https://metakam.ua" target="_blank" rel="noreferrer">
          M
        </a>
      </h1>

      <div className={styles.wrapperSearch}>
        <img className={styles.imgSearch} src={search} alt="" />
        <input
          className={styles.searchProduct}
          type="text"
          placeholder="Search"
        />
      </div>

      <div className={styles.wrapperInfo}>
        <div className={styles.innerInfo}>
          <img src={cart} alt="cart" height={20} width={20} />
          <p>Cart</p>
        </div>

        <div className={styles.innerInfo}>
          <img src={favorites} alt="favorites" height={20} width={20} />
          <p>Favorites</p>
        </div>

        <div className={styles.personIcon}>
          <img src={person} alt="person" height={50} width={50} />
        </div>
      </div>
    </header>
  );
};

export default Header;
