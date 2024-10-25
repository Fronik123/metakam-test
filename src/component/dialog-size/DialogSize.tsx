import React, { FC } from "react";
import styles from "./DialogSize.module.css";
import * as Dialog from "@radix-ui/react-dialog";

const DialogSize: FC = () => {
  const nameCountry = ["size CM", "size UK", "size EU", "size US"];
  const sizeShoes = [
    { cm: "22", uk: "23", eu: "55", us: "99" },
    { cm: "3", uk: "3", eu: "6", us: "22" },
    { cm: "3", uk: "23", eu: "43", us: "33" },
  ];
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className={styles.sizeChart}>Size guide</button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className={styles.dialogOverlay} />

        <Dialog.Content className={styles.dialogContent}>
          <Dialog.Title className={styles.dialogTitle}>Size guide</Dialog.Title>

          <Dialog.Description className={styles.dialogDescription}>
            Shoe size guide: universal table
          </Dialog.Description>

          <table className={styles.wrapperTable}>
            <thead>
              <tr>
                {nameCountry.map((name, index) => (
                  <th>{name}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {sizeShoes.map((size, index) => (
                <tr key={index}>
                  <td>{size.cm}</td>
                  <td>{size.uk}</td>
                  <td>{size.eu}</td>
                  <td>{size.us}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <Dialog.Close asChild>
            <button className={styles.closeDialog} aria-label="Close">
              X
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default DialogSize;
