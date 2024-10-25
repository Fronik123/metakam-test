import React, { FC, useState } from "react";
import styles from "./Product.module.css";

//radix
import * as Toolbar from "@radix-ui/react-toolbar";

//image
import img1 from "../../assets/shoes/rebbok-1.jpg";
import img2 from "../../assets/shoes/rebbok-2.jpg";
import img3 from "../../assets/shoes/rebbok-3.jpg";
import img4 from "../../assets/shoes/rebbok-4.jpg";
import img5 from "../../assets/shoes/rebbok-5.jpg";
import favorit from "../../assets/favorites.svg";
import cart from "../../assets/cart.svg";
import deliver from "../../assets/deliver.svg";
import returnProduct from "../../assets/return-product.svg";
import dot from "../../assets/dot.svg";

//component
import DialogSize from "../dialog-size/DialogSize";
import SelectSize from "../select-size/SelectSize";

const Product: FC = () => {
  const img = [img1, img2, img3, img4, img5];

  const [activeImage, setActiveImage] = useState(img[0]);

  return (
    <div className={styles.wrapperProduct}>
      <div className={styles.wrapperNameClother}>
        <p>Clothes and shoes</p>
        <img src={dot} alt="" />
        <p>Shoes</p>
        <img src={dot} alt="" />
        <p>Reebok</p>
      </div>

      <div className={styles.innerProduct}>
        <div className={styles.showProduct}>
          <img src={activeImage} alt="shoes" />

          <div className={styles.imgProduct}>
            {img.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`shoes ${index + 1}`}
                className={`${styles.shoes} ${
                  activeImage === img ? `${styles.active}` : ""
                }`}
                onClick={() => setActiveImage(img)}
              />
            ))}
          </div>
        </div>

        <div className={styles.wrapperInfoProduct}>
          <div className={styles.wrapperCompanyName}>
            <div className={styles.innerCompanyName}>
              <img
                src={require("../../assets/shoes/logo-shoes.png")}
                alt="logo"
                width={20}
                height={20}
              />

              <p>Reebok</p>
            </div>

            <p className={styles.seriesShoes}>HR132434R00-.-8</p>
          </div>

          <h2>Shoes Reebok Classic Leather</h2>

          <p className={styles.descriptionShoes}>
            The Reebok Classic collection features a combination of coated
            leather and textile material. The lightweight, comfortable design is
            ideal for everyday wear.
          </p>

          <p className={styles.price}>$149.00</p>

          <DialogSize />

          <SelectSize />

          <Toolbar.Root
            className={styles.wrapperToolBar}
            aria-label="Formatting options"
          >
            <Toolbar.Button className={styles.addCart}>
              <img src={cart} alt="" width={20} height={20} />
              <p>Add to cart</p>
            </Toolbar.Button>

            <Toolbar.Button className={styles.favoritCar}>
              <img src={favorit} alt="" width={20} height={20} />
            </Toolbar.Button>
          </Toolbar.Root>

          <div className={styles.wrapperDelivery}>
            <img src={deliver} alt="" />
            <p>Free delivery on orders over $30</p>
          </div>

          <div className={styles.wrapperDelivery}>
            <img src={returnProduct} alt="" />
            <p>30 days for return</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
