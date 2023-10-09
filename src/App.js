const StartGame = require('./view/StartGame');

class App {
  play() {
    const game = new StartGame();
  }
}

module.exports = App;
