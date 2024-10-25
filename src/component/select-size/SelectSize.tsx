import React, { FC } from "react";
import styles from "./SelectSize.module.css";
import * as Select from "@radix-ui/react-select";
import { ChevronDownIcon } from "@radix-ui/react-icons";

type selectItem = {
  value: string;
  children: React.ReactNode;
  className?: any;
  disabled?: boolean;
};

const SelectSize: FC = () => {
  return (
    <Select.Root>
      <Select.Trigger className={styles.selectTrigger} aria-label="Size">
        <Select.Value placeholder="Choose size" />

        <Select.Icon className={styles.selectIcon}>
          <ChevronDownIcon />
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content className={styles.selectContent}>
          <Select.Viewport className={styles.selectViewport}>
            <Select.Group>
              <Select.Label className={styles.selectLabel}>Size</Select.Label>

              <SelectItem value="xs">CM</SelectItem>
              <SelectItem value="s">US</SelectItem>
              <SelectItem value="m" disabled>
                EU
              </SelectItem>
              <SelectItem value="l">UK</SelectItem>
            </Select.Group>
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};

const SelectItem = React.forwardRef<HTMLDivElement, selectItem>(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <Select.Item
        className={`${styles.selectItem} ${className || ""}`}
        {...props}
        ref={forwardedRef}
      >
        <Select.ItemText>{children}</Select.ItemText>
      </Select.Item>
    );
  }
);

export default SelectSize;
