import React from "react";
import Modal from "./Modal";

/**
 * Модальне вікно завершення гри
 *
 * @component
 * @param {Object} props - Пропси компонента
 * @param {number} props.score - Фінальний рахунок гравця
 * @param {Function} props.onRestart - Колбек для перезапуску гри з тією ж складністю
 * @param {Function} props.onSelectDifficulty - Колбек для переходу до вибору складності
 * @returns {JSX.Element} Модальне вікно з результатами гри
 *
 * @example
 * <EndGameModal
 *   score={25}
 *   onRestart={() => startNewGame()}
 *   onSelectDifficulty={() => goToMenu()}
 * />
 */
const EndGameModal = ({ score, onRestart, onSelectDifficulty }) => {
    return (
        <Modal>
            <div className="result-box">
                <h2>Гру завершено!</h2>
                <p>Ваш рахунок: {score}</p>
                <button className="btn" onClick={onRestart}>Спробувати ще раз</button>
                <button className="btn" onClick={onSelectDifficulty}>Вибір складності</button>
            </div>
        </Modal>
    );
};
export default EndGameModal;