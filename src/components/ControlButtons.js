import React from "react";

/**
 * Компонент кнопок управління грою
 *
 * @component
 * @param {Object} props - Пропси компонента
 * @param {Function} props.onEnd - Колбек при натисканні кнопки завершення гри
 * @returns {JSX.Element} Панель з кнопками управління
 *
 * @example
 * <ControlButtons onEnd={() => endGame()} />
 */
const ControlButtons = ({ onEnd }) => {
    return (
        <div className="controls">
            <button className="btn danger" onClick={onEnd}>
                Закінчити гру
            </button>
        </div>
    );
};
export default ControlButtons;