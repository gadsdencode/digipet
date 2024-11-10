import React from 'react';
import { usePetStore } from './store';
import PetDisplay from './components/PetDisplay';
import CommandInput from './components/CommandInput';
import StatusDisplay from './components/StatusDisplay';
import Game from './components/Game';

const App: React.FC = () => {
  const { pet, executeCommand, play } = usePetStore();

  const handleGameEnd = (result: 'win' | 'lose' | 'draw') => {
    if (result === 'win') {
      play();
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Digital Pet Companion</h1>
      <PetDisplay pet={pet} />
      <CommandInput onCommand={executeCommand} />
      <StatusDisplay pet={pet} />
      <Game onGameEnd={handleGameEnd} />
    </div>
  );
};

export default App;
