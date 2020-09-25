import React, { useState, useEffect, useContext } from 'react';
import HangmanComponent from './Hangman';
import UsedLetterBoardComponent from './UsedLetterBoard';
import { RootContext } from '../providers/Context';

let stringArray: string[] = [];

const Game = () => {
  const rootContext = useContext(RootContext);
  const [usedLetters, setUsedLetters] = useState(stringArray);
  const [choosingLetter, setChoosingLetter] = useState('');
  const [keyPhraseArray, setKeyPhraseArray] = useState(stringArray);
  const [resultPhraseArray, setResultPhraseArray] = useState(stringArray);

  // Set the result and gameState (global) based on the gameState (local)
  useEffect(() => {
      console.log(rootContext.gameState)
    switch (rootContext.gameState) {
      case 7: {
        rootContext.setResult('You loose!!!');
        rootContext.setGameState(-1);
        break;
      }
      default: {
        rootContext.setResult('');
      }
    }
  }, [rootContext]);

  // User will win if there is no more guest letters
  useEffect(() => {
    if (
      resultPhraseArray &&
      resultPhraseArray.length > 0 &&
      !resultPhraseArray.includes('_')
    ) {
      rootContext.setResult('You win!!!');
      rootContext.setGameState(-1);
    }
  }, [resultPhraseArray, rootContext]);

  // Convert guest letters to '_' and space to '-'
  useEffect(() => {
    if(keyPhraseArray && keyPhraseArray.length > 0) {
      keyPhraseArray.forEach((e) => {
        if (e !== ' ') {
          setResultPhraseArray((resultPhraseArray) => [
            ...resultPhraseArray,
            '_',
          ]);
        } else {
          setResultPhraseArray((resultPhraseArray) => [
            ...resultPhraseArray,
            '-',
          ]);
        }
      });
    }
  }, [keyPhraseArray]);

  // Convert guest phrase to array of letters
  useEffect(() => {
    if (rootContext.keyPhrase) {
      setKeyPhraseArray(rootContext.keyPhrase.split(''));
    }
  }, [rootContext.keyPhrase]);

  // Only allow 1 letter when choosing
  useEffect(() => {
    if (choosingLetter && choosingLetter.length > 1) {
      setChoosingLetter((choosingLetter) => choosingLetter[1]);
    }
  }, [choosingLetter]);

  // Handle the input value from the form
  const inputHandle = (e: any) => {
    const { name, value } = e.target;
    if (name === 'letter') {
      if (value.charCodeAt(0) >= 65 && value.charCodeAt(0) <= 90) {
        setChoosingLetter(value.toLowerCase());
      }
    }
  };

  // Handle key press event
  const onKeyPressed = (e: any) => {
    // if the keyPressed from a => z
    if (e.keyCode >= 65 && e.keyCode <= 90) {
      setChoosingLetter(e.key.toLowerCase());
    }
    // if the keyPressed is 'Enter'
    if (e.keyCode === 13) {
      onSubmit();
    }
  };

  // Handle the submit button
  const onSubmit = () => {
    // if choosing letter is not null or empty
    if (choosingLetter && choosingLetter !== '') {
      // if there is at least 1 letter in the answer than add it to usedLetter array and convert guested letter to the result
      if (!usedLetters.includes(choosingLetter.toUpperCase())) {
        setUsedLetters((usedLetters) => [
          ...usedLetters,
          choosingLetter.toUpperCase(),
        ]);
        if (keyPhraseArray.includes(choosingLetter)) {
          const _resultPhraseArray = [...resultPhraseArray];
          for (let idx = keyPhraseArray.length - 1; idx >= 0; --idx) {
            if (keyPhraseArray[idx] === choosingLetter) {
              _resultPhraseArray[idx] = choosingLetter.toUpperCase();
            }
          }
          setResultPhraseArray(_resultPhraseArray);
        } else {
          // If the guested letter is missed then change the gameState
          rootContext.setGameState(++rootContext.gameState);
        }
      }
      // if choosen letter is submited then empty the input value
      setChoosingLetter('');
    }
  };
  return (
    <div onKeyDown={onKeyPressed} tabIndex={0}>
      <HangmanComponent gameState={rootContext.gameState}/>
      <p className="result">{resultPhraseArray && resultPhraseArray.join(' ')}</p>
      <UsedLetterBoardComponent usedLetters={usedLetters} />
      <div className="mt-1">
        <input
          type="text"
          value={choosingLetter || ''}
          name="letter"
          placeholder="Choose 1 letter"
          onChange={inputHandle}
        />
        <button onClick={onSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default Game;
