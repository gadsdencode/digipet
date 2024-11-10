import React, { useState } from 'react';

interface GameProps {
  onGameEnd: (result: 'win' | 'lose' | 'draw') => void;
}

const Game: React.FC<GameProps> = ({ onGameEnd }) => {
  const [playerChoice, setPlayerChoice] = useState<string | null>(null);
  const [petChoice, setPetChoice] = useState<string | null>(null);
  const [result, setResult] = useState<string | null>(null);

  const choices = ['rock', 'paper', 'scissors'];

  const play = (choice: string) => {
    const petChoice = choices[Math.floor(Math.random() * choices.length)];
    setPlayerChoice(choice);
    setPetChoice(petChoice);

    if (choice === petChoice) {
      setResult('It\'s a draw!');
      onGameEnd('draw');
    } else if (
      (choice === 'rock' && petChoice === 'scissors') ||
      (choice === 'paper' && petChoice === 'rock') ||
      (choice === 'scissors' && petChoice === 'paper')
    ) {
      setResult('You win!');
      onGameEnd('win');
    } else {
      setResult('Pet wins!');
      onGameEnd('lose');
    }
  };

  return (
    <div className="mt-4 p-4 bg-white rounded shadow">
      <h3 className="text-xl font-bold mb-2">Rock Paper Scissors</h3>
      <div className="flex justify-around mb-4">
        {choices.map((choice) => (
          <button
            key={choice}
            onClick={() => play(choice)}
            className="bg-blue-500 text-white p-2 rounded"
          >
            {choice}
          </button>
        ))}
      </div>
      {playerChoice && petChoice && (
        <div className="text-center">
          <p>You chose: {playerChoice}</p>
          <p>Pet chose: {petChoice}</p>
          <p className="font-bold mt-2">{result}</p>
        </div>
      )}
    </div>
  );
};

export default Game;
