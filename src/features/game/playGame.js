const getSlots = () => {
  const reels = [
    ['cherry', 'lemon', 'apple', 'lemon', 'banana', 'lemon', 'lemon'],
    ['lemon', 'apple', 'lemon', 'cherry', 'apple', 'banana', 'lemon'],
    ['lemon', 'apple', 'lemon', 'apple', 'cherry', 'banana', 'lemon'],
  ];

  const slotes = {};
  const displaySlotes = [];

  for (let i = 0; i < reels.length; i += 1) {
    const ramdom = Math.floor((Math.random() * 7));
    const slote = reels[i][ramdom];

    if (!slotes[slote]) {
      slotes[slote] = 0;
    }

    displaySlotes.push(slote);
    slotes[slote] += 1;
  }

  return { slotes, displaySlotes };
};

const getPuntuation = (reels) => {
  let result = 0;
  const puntuation = {
    'cherry-3': 50,
    'cherry-2': 40,
    'apple-3': 20,
    'apple-2': 10,
    'banana-3': 15,
    'banana-2': 5,
    'lemon-3': 3,
  };

  Object.entries(reels).forEach(
    ([k, v]) => {
      const key = `${k}-${v}`;
      if (puntuation[key] > result) {
        result = puntuation[key];
      }
    },
  );

  return result;
};

const playGame = () => {
  const { slotes, displaySlotes } = getSlots();
  const puntuation = getPuntuation(slotes);

  return { puntuation, displaySlotes };
};

export default playGame;
