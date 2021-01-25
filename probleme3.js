const turn = 4;

const twoDimensionArray = (turn) => {
  let tempValue = 0;
  for (let i = 0; i < turn; i++) {
    const display = [];
    for (let j = 0; j < i + 1; j++) {
      tempValue += 1;
      display.push(tempValue);
    }
    console.log(display.join(" "));
  }
};

twoDimensionArray(turn);
