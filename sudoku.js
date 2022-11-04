// This cases are used for sudoku killer game.
const num = new Array();

const arr_sum = (arr) => {
  return arr.reduce((pre, cur) => {
    pre+= cur;
    return pre;
  }, 0)
}

// Used recursive function for sudoku killer sum
const sudoku = (sum, cnt, c, lim) => {
  if (cnt == lim){
    if (sum == arr_sum(num)){
      console.log(`${sum} = ${num}`);
    }
    return;
  }
  for (let i = c; i < 10; i++){
    num[cnt] = i;
    sudoku(sum, cnt+1, i+1, lim);
  }
}

for (let l = 1; l < 10; l ++)
  for (let k = 1; k <= 45; k ++)
    sudoku(k,0,1,l);

// created by Hu Zheng
