import React, { useState } from 'react';

export interface IProviderProps {
  children?: any;
}

const appContextDefaultValue = {
  gameState: -1,
  setGameState: (gameState: number) => {},
  result: '',
  setResult: (result: string) => {},
  keyPhrase: '',
  setKeyPhrase: (keyPhrase: string) => {}
}

export const RootContext = React.createContext(appContextDefaultValue);

export default (props: IProviderProps) => {
  const [gameState, setGameState] = useState(appContextDefaultValue.gameState);
  const [result, setResult] = useState(appContextDefaultValue.result);
  const [keyPhrase, setKeyPhrase] = useState(appContextDefaultValue.keyPhrase);

  return (
    <RootContext.Provider
      value={{
        gameState,
        setGameState,
        result,
        setResult,
        keyPhrase,
        setKeyPhrase,
      }}
    >
      {props.children}
    </RootContext.Provider>
  );
};
