import React from "react";

/**
 * Компонент для відображення поточного рахунку та залишку часу
 *
 * @component
 * @param {Object} props - Пропси компонента
 * @param {number} props.score - Поточний рахунок гравця
 * @param {number} props.timeLeft - Залишок часу в секундах
 * @returns {JSX.Element} Панель з рахунком та таймером
 *
 * @example
 * <ScoreBoard score={0} timeLeft={30} />
 *
 * @example
 * <ScoreBoard score={15} timeLeft={12} />
 */
const ScoreBoard = ({ score, timeLeft }) => {
    return (
        <div className="score-board">
            <span>Рахунок: {score}</span>
            <span>Час: {timeLeft}s</span>
        </div>
    );
};
export default ScoreBoard;