const { MSGS,NAMES }  = require('../model/Constants');
const OutputView = require('../view/OutputView');

class Controller {
    makingMatrix = (result,command) => {
        let flag = true;
        NAMES.BRIDGE_STATUS = [[],[]];
        command.map((cmd,idx) => {
            if (result[idx] === cmd) this.successBuildMatrix(cmd); return true;
            // if (result[idx] !== cmd) this.failBuildMatrix(cmd); this.printMap();
        })
        OutputView.printMap();
        return flag;
      }
    
      successBuildMatrix = (cmd) => {
        switch(cmd) {
          case 'U' : NAMES.BRIDGE_STATUS[0].push('O'); NAMES.BRIDGE_STATUS[1].push(' '); break;
          case 'D' : NAMES.BRIDGE_STATUS[1].push('O'); NAMES.BRIDGE_STATUS[0].push(' '); break;
        }
      }
    
    
      failBuildMatrix(cmd) {
    
      }

}

module.exports = Controller;