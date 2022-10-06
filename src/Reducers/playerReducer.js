export const playerReducer = (state, action) => {
  if (action.type === 'GAME_STARTED') {
    return { ...state, gameStarted: true };
  }

  if (action.type === 'FIRST_MOVE') {
    return {
      ...state,
      moveA: action.payload.value,
      firstMove: true,
      currId: action.payload.id,
      gameStarted: true,
    };
  }
  if (action.type === 'SECOND_MOVE') {
    return {
      ...state,
      moveB: action.payload,
      secondMove: true,
      movesComplete: true,
      playerMoves: state.playerMoves + 1,
    };
  }

  if (action.type === 'PAIRS') {
    const newItems = [...state.pairs, action.payloadA, action.payloadB].map(
      Number
    );

    return {
      ...state,
      pairs: newItems,
      moveA: null,
      moveB: null,
      firstMove: false,
      secondMove: false,
      movesComplete: false,
    };
  }

  if (action.type === 'NOT_PAIRS') {
    return {
      ...state,
      moveA: null,
      moveB: null,
      firstMove: false,
      secondMove: false,
      movesComplete: false,
      currId: null,
    };
  }

  if (action.type === 'GAME_OVER') {
    return { ...state, gameOver: true, gameStarted: false };
  }

  return state;
};
