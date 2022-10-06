export const playerReducer = (state, action) => {
  if (action.type === 'FIRST_MOVE') {
    return {
      ...state,
      moveA: action.payload.value,
      firstMove: true,
      currId: action.payload.id,
    };
  }
  if (action.type === 'SECOND_MOVE') {
    return {
      ...state,
      moveB: action.payload,
      secondMove: true,
      movesComplete: true,
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

  return state;
};
