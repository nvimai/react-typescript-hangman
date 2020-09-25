import React from 'react';

const gameStates = [
  'img/blank.png',
  'img/head.png',
  'img/body.png',
  'img/left-arm.png',
  'img/right-arm.png',
  'img/left-leg.png',
  'img/right-leg.png',
  'img/animated.gif',
];

// Display the image based on the gameState
const Hangman = (props: any) => {
  return (
    <div>
      <img src={gameStates[props.gameState]} alt="dead hangman" />
    </div>
  );
};

export default Hangman;
