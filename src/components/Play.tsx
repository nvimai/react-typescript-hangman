import React, { useContext } from 'react';
import phrases from '../phrases.json';
import { RootContext } from '../providers/Context';

const Play = () => {
  const rootContext = useContext(RootContext);

  // Start the game
  const start = (e: any) => {
    e.preventDefault();
    randomPhrase();
  };

  // Random the phrase from the pharses.json
  const randomPhrase = () => {
    rootContext.setKeyPhrase(phrases[Math.floor(Math.random() * phrases.length)]);
    rootContext.setGameState(0);
  };
  return (
    <div>
      <button onClick={start}>{rootContext.result !== '' ? 'Replay' : 'Start'}</button>
    </div>
  );
};

export default Play;
