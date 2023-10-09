const { MSGS,NAMES }  = require('../model/Constants');
const InputView = require('./InputView');
const OutputView = require('./OutputView');
const BridgeMaker = require('../BridgeMaker');
const MissionUtils = require('@woowacourse/mission-utils');
const RandomNumber = require('../BridgeRandomNumberGenerator');
const Controller = require('../controller/Controller');

class StartGame {
    constructor() {
        this.CON = new Controller();
        this.startGame();
        this.getBridgeLength();
        this.getMove();
    }
    startGame(){
        MissionUtils.Console.print(`${MSGS.START_GAME}`);
        MissionUtils.Console.print(`${MSGS.GET_BRIDGE_LENGTH}`);
    }
    getBridgeLength(){
        NAMES.BRIDGE_LENGTH = InputView.readBridgeSize();
        NAMES.BRIDGE = BridgeMaker.makeBridge(NAMES.BRIDGE_LENGTH , RandomNumber.generate );
    }
    getMove() {
        MissionUtils.Console.print(`${MSGS.GET_MOVE_COMMAND}`);
        NAMES.PLAYER_COMMAND.push(InputView.readMoving());
        this.CON.makingMatrix(NAMES.BRIDGE,NAMES.PLAYER_COMMAND) ? this.#succeedCase() : this.#failedCase();
    }
    
    #succeedCase() {
        /**
         * getMove() 를 호출 => BRIDGE.length === PLAYER_COMMAND.length 가 될 때 까지
         * 됐을 경우 성공여부 표시 및 시도한 횟수 표시
         * 우선 게임 종료
         */
        // NAMES.BRIDGE.length === NAMES.PLAYER_COMMAND ? console.log('게임 종료') : this.getMove();
        
        if (NAMES.PLAYER_COMMAND.length === NAMES.BRIDGE.length) this.#succeedEnd();
        if (NAMES.PLAYER_COMMAND.length !== NAMES.BRIDGE.length) this.getMove();
    }

    #succeedEnd() {
        MissionUtils.Console.print(`${MSGS.GAME_END}`);
        OutputView.printResult();
        MissionUtils.Console.print(`${MSGS.IS_SUCCESS} ${MSGS.SUCCESS}`);
        MissionUtils.Console.print(`${MSGS.TIMES} ${NAMES.TIMES}`);
    }

    #failedCase() {
        /**
         * 사용자에게 재 게임 여부 판별해야함
         * R(재시작),Q(종료)
         */
    }
}

module.exports = StartGame; 