import React from "react";
import { createPortal } from "react-dom";

/**
 * Базовий компонент модального вікна
 *
 * @component
 * @param {Object} props - Пропси компонента
 * @param {React.ReactNode} props.children - Контент який буде відображено в модалі
 * @returns {React.ReactPortal} Portal з модальним вікном
 *
 * @example
 * <Modal>
 *   <h1>Заголовок</h1>
 *   <p>Текст модалу</p>
 * </Modal>
 */
const Modal = ({ children }) => {
    return createPortal(
        <div className="modal">
            {children}
        </div>,
        document.body
    );
};
export default Modal;