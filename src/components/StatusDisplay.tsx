import React from 'react';
import { PetState } from '../types';

interface StatusDisplayProps {
  pet: PetState;
}

const StatusDisplay: React.FC<StatusDisplayProps> = ({ pet }) => {
  return (
    <div className="mt-4 p-4 bg-white rounded shadow">
      <h3 className="text-xl font-bold mb-2">Pet Status</h3>
      <div className="grid grid-cols-2 gap-2">
        <div>Mood: {pet.mood}</div>
        <div>Hunger: {pet.hunger}</div>
        <div>Energy: {pet.energy}</div>
        <div>Fun: {pet.fun}</div>
      </div>
    </div>
  );
};

export default StatusDisplay;
