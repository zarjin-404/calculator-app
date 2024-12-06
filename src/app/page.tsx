'use client';

import { useState } from 'react';

export default function Calculator() {
  const [display, setDisplay] = useState('0');
  const [equation, setEquation] = useState('');

  const handleNumber = (number: string) => {
    if (display === '0') {
      setDisplay(number);
    } else {
      setDisplay(display + number);
    }
  };

  const handleOperator = (operator: string) => {
    setEquation(display + ' ' + operator + ' ');
    setDisplay('0');
  };

  const handleEqual = () => {
    const result = eval(equation + display);
    setDisplay(result.toString());
    setEquation('');
  };

  const handleClear = () => {
    setDisplay('0');
    setEquation('');
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="w-64 bg-gray-800 p-4 rounded-lg">
        <div className="bg-gray-700 p-4 mb-4 rounded">
          <div className="text-gray-400 text-sm h-6">{equation}</div>
          <div className="text-white text-2xl text-right">{display}</div>
        </div>

        <div className="grid grid-cols-4 gap-2">
          <button
            onClick={handleClear}
            className="col-span-2 bg-gray-600 text-white p-2 rounded hover:bg-gray-500"
          >
            AC
          </button>
          <button
            onClick={() => handleOperator('/')}
            className="bg-orange-500 text-white p-2 rounded hover:bg-orange-400"
          >
            ÷
          </button>
          <button
            onClick={() => handleOperator('*')}
            className="bg-orange-500 text-white p-2 rounded hover:bg-orange-400"
          >
            ×
          </button>

          {[7, 8, 9].map((num) => (
            <button
              key={num}
              onClick={() => handleNumber(num.toString())}
              className="bg-gray-600 text-white p-2 rounded hover:bg-gray-500"
            >
              {num}
            </button>
          ))}
          <button
            onClick={() => handleOperator('-')}
            className="bg-orange-500 text-white p-2 rounded hover:bg-orange-400"
          >
            -
          </button>

          {[4, 5, 6].map((num) => (
            <button
              key={num}
              onClick={() => handleNumber(num.toString())}
              className="bg-gray-600 text-white p-2 rounded hover:bg-gray-500"
            >
              {num}
            </button>
          ))}
          <button
            onClick={() => handleOperator('+')}
            className="bg-orange-500 text-white p-2 rounded hover:bg-orange-400"
          >
            +
          </button>

          {[1, 2, 3].map((num) => (
            <button
              key={num}
              onClick={() => handleNumber(num.toString())}
              className="bg-gray-600 text-white p-2 rounded hover:bg-gray-500"
            >
              {num}
            </button>
          ))}
          <button
            onClick={handleEqual}
            className="bg-orange-500 text-white p-2 rounded hover:bg-orange-400"
          >
            =
          </button>

          <button
            onClick={() => handleNumber('0')}
            className="col-span-2 bg-gray-600 text-white p-2 rounded hover:bg-gray-500"
          >
            0
          </button>
          <button
            onClick={() => handleNumber('.')}
            className="bg-gray-600 text-white p-2 rounded hover:bg-gray-500"
          >
            .
          </button>
        </div>
      </div>
    </div>
  );
}
