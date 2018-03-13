export const startGame = (cards) => {
  return {
    type: 'START_GAME',
    payload: cards
  };
};
