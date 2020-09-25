import React, { useContext } from 'react';
import './styles.css';
import PlayComponent from './components/Play';
import GameComponent from './components/Game';
import { RootContext } from './providers/Context';

const App = () => {
  const rootContext = useContext(RootContext);

  return (
    <div className="App">
      {rootContext.gameState >= 0 && <GameComponent />}
      {rootContext.gameState === -1 && (
        <>
          <div className="title">
            <h1>Write a Hangman App!</h1>
            <h2
              className={`result ${
                rootContext.result.includes('win') ? 'win' : ''
              }`}
            >
              {rootContext.result}
            </h2>
            <img src="img/animated.gif" alt="dead hangman" />
            <PlayComponent />
          </div>
          <ul>
            <li>
              Never played hangman? See{' '}
              <a href="https://en.wikipedia.org/wiki/Hangman_(game)">
                Wikipedia
              </a>{' '}
              for how to play.
            </li>
            <li>
              See <code>mockups</code> folder for loose program mockup
            </li>
            <li>
              Pick a random phrase from <code>phrases.json</code>
            </li>
            <li>
              Allow user to type letters (on click buttons) until they guess the
              phrase or the man dies (i.e. 6 wrong letters)
            </li>
            <li>
              Make use of the <code>img</code> folder, if you wish (or not)
            </li>
            <li>
              Use modern industry best practices. Yes: hooks, context. No: class
              components, Redux.
            </li>
            <li>
              Write some tests (optional, but if you do use
              react/testing-library)
            </li>
            <li>
              Don't worry <i>too</i> much about how it looks (unless you want
              to)
            </li>
            <li>
              <b>Make sure it's playable!</b> Can you win? Can you loose?
            </li>
            <li>Be creative and have fun!</li>
          </ul>
        </>
      )}
    </div>
  );
};

export default App;
