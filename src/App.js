import React, { useState } from 'react';

const ColorToggle = () => {
    // Используем state для хранения цвета каждого квадрата
    const [square1Color, setSquare1Color] = useState('red');
    const [square2Color, setSquare2Color] = useState('blue');

    // Функция для обработки клика и изменения цветов квадратов
    const handleSquareClick = (squareNumber) => {
        if (squareNumber === 1) {
            // Меняем цвет первого квадрата
            setSquare1Color(square1Color === 'red' ? 'blue' : 'red');
        } else if (squareNumber === 2) {
            // Меняем цвет второго квадрата
            setSquare2Color(square2Color === 'blue' ? 'red' : 'blue');
        }
    };

    return (
        <div>
            <div
                style={{
                    width: '100px',
                    height: '100px',
                    backgroundColor: square1Color,
                    margin: '10px',
                    display: 'inline-block',
                    cursor: 'pointer',
                }}
                onClick={() => handleSquareClick(1)}
            ></div>
            <div
                style={{
                    width: '100px',
                    height: '100px',
                    backgroundColor: square2Color,
                    margin: '10px',
                    display: 'inline-block',
                    cursor: 'pointer',
                }}
                onClick={() => handleSquareClick(2)}
            ></div>
        </div>
    );
};

export default ColorToggle;
