const {MSGS} = require('../model/Constants');
const Validate = require('../controller/Validate');
const VAL = new Validate();

const MissionUtils = require('@woowacourse/mission-utils');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    let value = 0;
    MissionUtils.Console.readLine((`${MSGS.GET_BRIDGE_LENGTH }`),(len) => {
      VAL.checkBridgeLength(len);
      MissionUtils.Console.print(`${len}`);
      value = parseInt(len);
    })
    return value
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    let command = '';
    MissionUtils.Console.readLine((`${MSGS.GET_MOVE_COMMAND }`),(cmd) => {
      VAL.checkCommand(cmd);
      MissionUtils.Console.print(`${cmd}`);
      command = cmd;
    })
    return command;
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
