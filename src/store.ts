import { create } from 'zustand';
import { PetState, Command } from './types';

interface PetStore {
  pet: PetState;
  feed: () => void;
  play: () => void;
  rest: () => void;
  checkStatus: () => PetState;
  executeCommand: (command: Command) => void;
}

const calculateMood = (pet: PetState): number => {
  let moodChange = 0;
  if (pet.hunger > 70) moodChange -= 2;
  if (pet.hunger < 30) moodChange += 1;
  if (pet.energy < 30) moodChange -= 2;
  if (pet.energy > 70) moodChange += 1;
  if (pet.fun < 30) moodChange -= 1;
  if (pet.fun > 70) moodChange += 2;
  
  return Math.max(0, Math.min(100, pet.mood + moodChange));
};

export const usePetStore = create<PetStore>((set, get) => ({
  pet: {
    name: 'Buddy',
    mood: 50,
    hunger: 50,
    energy: 50,
    fun: 50,
  },
  feed: () => set((state) => {
    const newHunger = Math.max(0, state.pet.hunger - 20);
    const newEnergy = Math.min(100, state.pet.energy + 5);
    const newPet = { ...state.pet, hunger: newHunger, energy: newEnergy };
    return { pet: { ...newPet, mood: calculateMood(newPet) } };
  }),
  play: () => set((state) => {
    const newFun = Math.min(100, state.pet.fun + 20);
    const newEnergy = Math.max(0, state.pet.energy - 15);
    const newHunger = Math.min(100, state.pet.hunger + 10);
    const newPet = { ...state.pet, fun: newFun, energy: newEnergy, hunger: newHunger };
    return { pet: { ...newPet, mood: calculateMood(newPet) } };
  }),
  rest: () => set((state) => {
    const newEnergy = Math.min(100, state.pet.energy + 30);
    const newFun = Math.max(0, state.pet.fun - 10);
    const newPet = { ...state.pet, energy: newEnergy, fun: newFun };
    return { pet: { ...newPet, mood: calculateMood(newPet) } };
  }),
  checkStatus: () => get().pet,
  executeCommand: (command: Command) => {
    switch (command) {
      case 'feed':
        get().feed();
        break;
      case 'play':
        get().play();
        break;
      case 'rest':
        get().rest();
        break;
      case 'status':
        get().checkStatus();
        break;
    }
  },
}));
