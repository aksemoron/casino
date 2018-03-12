export const dealCards = (player) => {
  return {
    type: 'DEAL',
    player
  };
};

export const hitCard = (player) => {
  return {
    type: 'HIT',
    player
  };
};
