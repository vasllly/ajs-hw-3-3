import Character from './domain.mjs';

class Game {
  start() {
    console.log('game started');
  }
}

class GameSavingData {
  //
}

function readGameSaving() {
  //
}

function writeGameSaving() {
  //
}

export { GameSavingData, readGameSaving as loadGame, writeGameSaving as saveGame };
export default Game;
