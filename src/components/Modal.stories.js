import React from 'react';
import Modal from './Modal';

export default {
    title: 'Components/Modal',
    component: Modal,
    tags: ['autodocs'],
};

export const Default = () => {
    return (
        <div>
            {/* Тимчасовий стиль для Storybook */}
            <style>{`
                .modal {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(0, 0, 0, 0.5);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 9999;
                }
            `}</style>

            <Modal>
                <div style={{ padding: '20px', background: 'white', borderRadius: '8px' }}>
                    <h2>Default Modal</h2>
                    <p>Це базовий приклад модального вікна.</p>
                    <button style={{ padding: '10px 20px', marginTop: '10px' }}>
                        OK
                    </button>
                </div>
            </Modal>
        </div>
    );
};

export const SimpleMessage = () => {
    return (
        <div>
            <style>{`
                .modal {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(0, 0, 0, 0.5);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 9999;
                }
            `}</style>

            <Modal>
                <div style={{
                    padding: '20px',
                    background: 'white',
                    borderRadius: '8px',
                    maxWidth: '300px',
                    textAlign: 'center'
                }}>
                    <div style={{ fontSize: '48px', marginBottom: '10px' }}>✅</div>
                    <p>Дію виконано успішно!</p>
                </div>
            </Modal>
        </div>
    );
};