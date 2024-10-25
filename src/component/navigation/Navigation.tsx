import React, { FC } from "react";
import styles from "./Navigation.module.css";
import * as Menubar from "@radix-ui/react-menubar";

const Navigation: FC = () => {
  return (
    <div className={styles.wrapperNavigation}>
      <Menubar.Root className={styles.menubarRoot}>
        <Menubar.Menu>
          <Menubar.Trigger className={styles.menubarTrigger}>
            Women
          </Menubar.Trigger>

          <Menubar.Portal>
            <Menubar.Content className={styles.menuContent}>
              <Menubar.Item className={styles.menuItem}>Cloth</Menubar.Item>
              <Menubar.Separator className={styles.menubarSeparator} />
              <Menubar.Item className={styles.menuItem}>T-shirts</Menubar.Item>
              <Menubar.Item className={styles.menuItem}>Jeans</Menubar.Item>
              <Menubar.Item className={styles.menuItem} disabled>
                Phone
              </Menubar.Item>
            </Menubar.Content>
          </Menubar.Portal>
        </Menubar.Menu>

        <Menubar.Menu>
          <Menubar.Trigger className={styles.menubarTrigger}>
            Men
          </Menubar.Trigger>

          <Menubar.Portal>
            <Menubar.Content className={styles.menuContent}>
              <Menubar.Item className={styles.menuItem}>Cloth</Menubar.Item>
              <Menubar.Separator className={styles.menubarSeparator} />
              <Menubar.Item className={styles.menuItem}>T-shirts</Menubar.Item>
              <Menubar.Item className={styles.menuItem}>Jeans</Menubar.Item>
              <Menubar.Item className={styles.menuItem} disabled>
                Car
              </Menubar.Item>
            </Menubar.Content>
          </Menubar.Portal>
        </Menubar.Menu>

        <Menubar.Menu>
          <Menubar.Trigger className={styles.menubarTrigger}>
            Kids
          </Menubar.Trigger>

          <Menubar.Portal>
            <Menubar.Content className={styles.menuContent}>
              <Menubar.Item className={styles.menuItem}>Cloth</Menubar.Item>
              <Menubar.Separator className={styles.menubarSeparator} />
              <Menubar.Item className={styles.menuItem}>T-shirts</Menubar.Item>
              <Menubar.Item className={styles.menuItem} disabled>
                Toy
              </Menubar.Item>
              <Menubar.Item className={styles.menuItem}>Jeans</Menubar.Item>
            </Menubar.Content>
          </Menubar.Portal>
        </Menubar.Menu>

        <Menubar.Menu>
          <Menubar.Trigger className={styles.menubarTrigger}>
            Brands
          </Menubar.Trigger>

          <Menubar.Portal>
            <Menubar.Content className={styles.menuContent}>
              <Menubar.Item className={styles.menuItem}>Puma</Menubar.Item>
              <Menubar.Separator className={styles.menubarSeparator} />
              <Menubar.Item className={styles.menuItem}>Rebbok</Menubar.Item>
              <Menubar.Item className={styles.menuItem}>Nike</Menubar.Item>
            </Menubar.Content>
          </Menubar.Portal>
        </Menubar.Menu>

        <Menubar.Menu>
          <Menubar.Trigger className={styles.menubarTrigger}>
            New
          </Menubar.Trigger>

          <Menubar.Portal>
            <Menubar.Content className={styles.menuContent}>
              <Menubar.Item className={styles.menuItem}>Cloth</Menubar.Item>
              <Menubar.Separator className={styles.menubarSeparator} />
              <Menubar.Item className={styles.menuItem}>T-shirts</Menubar.Item>
              <Menubar.Item className={styles.menuItem}>Jeans</Menubar.Item>
            </Menubar.Content>
          </Menubar.Portal>
        </Menubar.Menu>
      </Menubar.Root>

      <hr className={styles.hr} />
    </div>
  );
};

export default Navigation;
