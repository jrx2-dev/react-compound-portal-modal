import React, { createContext, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

import styles from "./Modal.module.scss";

interface ModalProps {
  onClose: () => void;
  showModal: boolean;
  clickBackdropClose?: boolean;
}

type ModalContextType = ModalProps | undefined;

export const ModalContext = createContext<ModalContextType>(undefined);

const Modal: React.FC<ModalProps> = (props): JSX.Element => {
  const ref = useRef<HTMLDivElement>(null);

  const { children, showModal, onClose, clickBackdropClose } = props;

  useEffect(() => {
    const checkIfClickedOutside = (e: MouseEvent) => {
      if (
        showModal &&
        clickBackdropClose &&
        ref.current &&
        !ref.current.contains(e.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [showModal]);

  return ReactDOM.createPortal(
        showModal && (
          <div className={styles.modalBackdrop}>
            <ModalContext.Provider
              value={{ showModal, onClose, clickBackdropClose }}
            >
              <div ref={ref} className={styles.modalRoot}>
                <div className={styles.modalChildrenContainer}>{children}</div>
              </div>
            </ModalContext.Provider>
          </div>
        ),
        document.getElementById("portal") as Element
      )
};

export default Modal;
