import { useContext } from "react";

import styles from "./ModalButtons.module.scss";

import { ModalContext } from "../Modal";

interface ModalButtonsProps {
  handleOk?: () => void;
  okText?: string;
  showCancel?: boolean;
  handleCancel?: () => void;
  cancelText?: string;
}

const ModalButtons: React.FC<ModalButtonsProps> = (props): JSX.Element => {
  const { handleOk, okText, showCancel, handleCancel, cancelText, children } =
    props;

  const value = useContext(ModalContext);
  if (!value) {
    throw new Error(
      "ModalButtons needs to be rendered inside Modal component!"
    );
  }

  const { showModal, onClose } = value;

  return (
    <>
      {showModal && (
        <div className={styles.modalButtonsContainer}>
          {children && children}
          {handleOk && (
            <button
              className={[styles.modalButtonOk, styles.modalButton].join(" ")}
              onClick={handleOk}
            >
              {okText ? okText : "Accept"}
            </button>
          )}
          {(handleCancel || (showCancel && onClose)) && (
            <button
              className={[styles.modalButtonCancel, styles.modalButton].join(
                " "
              )}
              onClick={handleCancel || onClose}
            >
              {cancelText ? cancelText : "Cancel"}
            </button>
          )}
        </div>
      )}
    </>
  );
};

export default ModalButtons;
