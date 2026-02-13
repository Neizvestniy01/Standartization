import React, { useState, useEffect } from 'react';
import GameBoard from './GameBoard';

export default {
    title: 'Components/GameBoard',
    component: GameBoard,
    tags: ['autodocs'],
    argTypes: {
        totalHoles: {
            control: { type: 'select' },
            options: [9, 16, 25],
            description: 'Загальна кількість дірок',
        },
        cols: {
            control: { type: 'select' },
            options: [3, 4, 5],
            description: 'Кількість колонок',
        },
    },
};

export const Static = () => {
    return (
        <div>
            <style>{`
                .game-board {
                    padding: 20px;
                }
                .hole {
                    width: 100%;
                    height: 100%;
                    background: #8B4513;
                    border-radius: 50%;
                    position: relative;
                    cursor: pointer;
                    border: 4px solid #654321;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .hole.active .mole {
                    display: block;
                }
                .mole {
                    display: none;
                    width: 60%;
                    height: 60%;
                    background: #D2691E;
                    border-radius: 50%;
                    animation: popUp 0.3s;
                }
                @keyframes popUp {
                    0% { transform: scale(0); }
                    100% { transform: scale(1); }
                }
            `}</style>
            <GameBoard
                moleIndex={-1}
                totalHoles={9}
                cols={3}
                onHit={(index) => console.log('Clicked hole:', index)}
            />
        </div>
    );
};

export const AnimatedGame = () => {
    const [moleIndex, setMoleIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setMoleIndex(Math.floor(Math.random() * 9));
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <style>{`
                .game-board {
                    padding: 20px;
                }
                .hole {
                    width: 100%;
                    height: 100%;
                    background: #8B4513;
                    border-radius: 50%;
                    position: relative;
                    cursor: pointer;
                    border: 4px solid #654321;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .hole.active .mole {
                    display: block;
                }
                .mole {
                    display: none;
                    width: 60%;
                    height: 60%;
                    background: #D2691E;
                    border-radius: 50%;
                    animation: popUp 0.3s;
                }
                @keyframes popUp {
                    0% { transform: scale(0); }
                    100% { transform: scale(1); }
                }
            `}</style>
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <p>Крот з'являється кожну секунду! Спробуй влучити 🎯</p>
            </div>
            <GameBoard
                moleIndex={moleIndex}
                totalHoles={9}
                cols={3}
                onHit={(index) => {
                    if (index === moleIndex) {
                        console.log('Hit!');
                    } else {
                        console.log('Miss!');
                    }
                }}
            />
        </div>
    );
};