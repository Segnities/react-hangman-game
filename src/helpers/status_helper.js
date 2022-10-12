export const checkWin = (correct, wrong, word) => {
  let status = 'win';

  const wordArray = word.split("");

  for (let letter of wordArray) {
    if (!correct.includes(letter)) {
      status = "";
    }
  }

  if (wrong.length === 6) {
    status = 'lose';
  }

  return status;
};
