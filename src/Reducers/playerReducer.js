export const playerReducer = (state, action) => {
  console.log(action);
  if (action.type === 'FIRST_MOVE') {
    return {
      ...state,
      moveA: action.payload.value,
      firstMove: true,
      currId: action.payload.id,
      gameStarted: true,
      // playerMoves: state.playerMoves + 1,
      idPairs: [...state.idPairs, action.payload.id],
    };
  }
  if (action.type === 'SECOND_MOVE') {
    return {
      ...state,
      moveB: action.payload.value,
      currId: action.payload.id,
      secondMove: true,
      movesComplete: true,
      playerMoves: state.playerMoves + 1,
      idPairs: [...state.idPairs, action.payload.id],
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
      idPairs: [],
    };
  }

  if (action.type === 'PAIRS') {
    const newItems = [...state.pairs, action.payloadA, action.payloadB];
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

  if (action.type === 'GAME_OVER') {
    return { ...state, gameOver: true, gameStarted: false };
  }

  return state;
};
