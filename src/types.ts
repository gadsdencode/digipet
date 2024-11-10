export interface PetState {
  name: string;
  mood: number;
  hunger: number;
  energy: number;
  fun: number;
}

export type Command = 'feed' | 'play' | 'rest' | 'status';
