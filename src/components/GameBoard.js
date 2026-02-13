import React from "react";

/**
 * Компонент ігрового поля з сіткою дірок для гри Whac-A-Mole
 *
 * Відображає сітку дірок, де з'являються кроти. При кліку на активну дірку
 * викликається колбек onHit з індексом дірки.
 *
 * @component
 * @param {Object} props - Пропси компонента
 * @param {number} props.moleIndex - Індекс дірки де зараз крот
 * @param {Function} props.onHit - Колбек при кліку на дірку. Приймає індекс дірки
 * @param {number} [props.totalHoles=9] - Загальна кількість дірок на полі
 * @param {number} [props.cols=3] - Кількість колонок в сітці
 *
 * @returns {JSX.Element} Ігрове поле з дірками
 *
 * @example
 * <GameBoard
 *   moleIndex={5}
 *   onHit={(index) => console.log('Clicked hole:', index)}
 * />
 *
 * @example
 * <GameBoard
 *   moleIndex={8}
 *   onHit={handleMoleHit}
 *   totalHoles={16}
 *   cols={4}
 * />
 */
const GameBoard = ({ moleIndex, onHit, totalHoles = 9, cols = 3 }) => {
    const gridStyle = {
        display: "grid",
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
        gap: "12px",
        width: `${cols * 120}px`,
        maxWidth: "100%",
        margin: "0 auto",
    };
    return (
        <div className="game-board" style={gridStyle}>
            {Array.from({ length: totalHoles }).map((_, i) => (
                <div
                    key={i}
                    className={`hole ${moleIndex === i ? "active" : ""}`}
                    onClick={() => onHit(i)}
                    style={{ aspectRatio: "1 / 1" }}>
                    <div className="mole" />
                </div>
            ))}
        </div>
    );
};
export default GameBoard;