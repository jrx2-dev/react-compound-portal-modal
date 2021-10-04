import { useContext } from "react";

import styles from "./ModalContent.module.scss";

import { ModalContext } from "../Modal";

interface ModalContentProps {
  text?: string;
}

const ModalContent: React.FC<ModalContentProps> = (props): JSX.Element => {
  const { text, children } = props;

  const value = useContext(ModalContext);
  if (!value) {
    throw new Error(
      "ModalContent needs to be rendered inside Modal component!"
    );
  }

  const { showModal } = value;

  return (
    <>
      {showModal && (
        <div className={styles.modalContentContainer}>
          {text && <div className={styles.modalContentText}>{text}</div>}
          {children && children}
        </div>
      )}
    </>
  );
};

export default ModalContent;
