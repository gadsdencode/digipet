import React from 'react';
import { PetState } from '../types';

interface PetDisplayProps {
  pet: PetState;
}

const PetDisplay: React.FC<PetDisplayProps> = ({ pet }) => {
  const getMoodEmoji = () => {
    if (pet.mood > 80) return '😄';
    if (pet.mood > 60) return '🙂';
    if (pet.mood > 40) return '😐';
    if (pet.mood > 20) return '🙁';
    return '😢';
  };

  return (
    <div className="text-center">
      <div className="text-9xl mb-4">{getMoodEmoji()}</div>
      <h2 className="text-2xl font-bold mb-2">{pet.name}</h2>
      <p>Mood: {pet.mood}</p>
      <p>Hunger: {pet.hunger}</p>
      <p>Energy: {pet.energy}</p>
      <p>Fun: {pet.fun}</p>
    </div>
  );
};

export default PetDisplay;
