import React, { useState } from 'react';
import { Command } from '../types';

interface CommandInputProps {
  onCommand: (command: Command) => void;
}

const CommandInput: React.FC<CommandInputProps> = ({ onCommand }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const command = input.toLowerCase().trim() as Command;
    if (['feed', 'play', 'rest', 'status'].includes(command)) {
      onCommand(command);
      setInput('');
    } else {
      alert('Invalid command. Try "feed", "play", "rest", or "status".');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter command (feed, play, rest, status)"
        className="w-full p-2 border rounded"
      />
      <button type="submit" className="mt-2 bg-blue-500 text-white p-2 rounded w-full">
        Submit
      </button>
    </form>
  );
};

export default CommandInput;
