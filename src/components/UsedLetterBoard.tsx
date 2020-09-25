import React from 'react';

// Display the usedLetters
const UsedLetterBoard = (props: any) => {
  return (
    <div className="usedLetter">
      <h2>Used Letter Board</h2>
      <p>{props.usedLetters ? props.usedLetters.join(', ') : ''}</p>
    </div>
  );
};

export default UsedLetterBoard;
