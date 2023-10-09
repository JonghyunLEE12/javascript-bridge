const MSGS = {
    START_GAME : '다리 건너기 게임을 시작합니다.',
    GET_BRIDGE_LENGTH : '다리의 길이를 입력해주세요.',
    GET_MOVE_COMMAND : '이동할 칸을 선택해주세요. (위: U, 아래: D)',
    GAME_END : '최종 게임 결과',
    IS_SUCCESS : '게임 성공 여부:',
    SUCCESS : '성공',
    TIMES : '총 시도한 횟수:'
}

const NAMES = {
    TIMES : 1,
    BRIDGE : [],
    BRIDGE_LENGTH : 0,
    PLAYER_COMMAND : [],
    BRIDGE_STATUS : [[],[]],
}

// const BRIDGE_STATUS = [
//     [],[]
// ]

module.exports = { MSGS, NAMES }