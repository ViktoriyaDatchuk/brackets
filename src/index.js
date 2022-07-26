module.exports = function check(str, bracketsConfig) {
  let array = str.split('');
  let stek = [];
  let yes = true;

  for (let i = 0; i < array.length; i++) {
    for (let brackets of bracketsConfig) {
      if (array[i] === brackets[0] && array[i] !== brackets[1]) {
        stek.push(array[i]);
      } else if (array[i] === brackets[0] && array[i] === brackets[1] && yes === true) {
          stek.push(array[i]);
          yes = false;
        } else if (array[i] === brackets[0] && array[i] === brackets[1] && yes === false && stek[stek.length - 1] === brackets[1]) {
          yes = true;
          stek.pop();
        } else if (array[i] === brackets[1] && stek[stek.length - 1] === brackets[0]) {
          stek.pop();
        } else if (array[i] === brackets[1] && !stek.length) return false;
    }
  }

  if (!stek.length && yes) return true;

  return false;
}
