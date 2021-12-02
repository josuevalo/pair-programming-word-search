//PAIR PROGRAMMING - WORDSEARCH - JOSUE AREVALO & EMILY WATERS

const wordSearch = (letters, word) => { 
    if (letters === []) {
        return false
    }

    let transposed = transpose(letters)
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }

    const verticaljoin = transposed.map(ls2 => ls2.join(''))
    for (l of verticaljoin) {
        if (l.includes(word)) return true
    }

    return false
}

const transpose = function(matrix) {
    const resultArr = [];
    let rowArr = [];
    let arrLength = matrix.length;
      
    for (let index in matrix[0]) {
      for (const element of matrix) {
        rowArr.push(element[index]);
      }
      resultArr.push(rowArr);
      rowArr = [];
    }
    return resultArr;
  };

wordSearch([
    ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
    ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
    ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
    ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
    ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
    ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
    ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
  ], 'FRANK')

module.exports = wordSearch

