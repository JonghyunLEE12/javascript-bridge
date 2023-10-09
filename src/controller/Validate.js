class Validate {
    checkBridgeLength = (number) => {
        if (isNaN(parseInt(number))) throw new Error("[ERROR]숫자로 입력해주세요.");
        if (parseInt(number) <= 2 || parseInt(number) >= 21) throw new Error("[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.");
    }

    checkCommand = (cmd) => {
        if (!cmd === 'U' || !cmd === 'D') throw new Error("[ERROR] U 와 D 값으로 입력해주세요.");
    }
}

module.exports = Validate;