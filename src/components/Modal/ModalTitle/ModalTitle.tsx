import { useContext } from "react";

import styles from "./ModalTitle.module.scss";

import { ModalContext } from "../Modal";
import CloseIcon from "../../icons/CloseIcon/CloseIcon";

interface ModalTitleProps {
  title?: string;
}

const ModalTitle: React.FC<ModalTitleProps> = (props): JSX.Element => {
  const { title, children } = props;

  const value = useContext(ModalContext);
  if (!value) {
    throw new Error("ModalTitle needs to be rendered inside Modal component!");
  }

  const { showModal, onClose, clickBackdropClose } = value;

  return (
    <>
      {showModal && (
        <div className={styles.modalTitleContainer}>
          {title && <span className={styles.modalTitleText}>{title}</span>}
          {children && children}
          {(!clickBackdropClose && onClose) && (
            <div className={styles.modalTitleCloseButtonContainer}>
              <button
                onClick={onClose}
                className={styles.modalTitleCloseButton}
              >
                <CloseIcon className={styles.modalTitleClosButtonIcon} />
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ModalTitle;
