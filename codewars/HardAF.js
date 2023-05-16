function squareSums(n) {
  function isSquare(num) {
    const root = Math.sqrt(num);
    return root ** 2 === num;
  }

  function generateSequence(seq, used) {
    if (seq.length === n) {
      return seq;
    }

    const last = seq[seq.length - 1];
    for (let i = 1; i <= n; i++) {
      if (!used.has(i) && isSquare(last + i)) {
        used.add(i);
        const result = generateSequence([...seq, i], used);
        if (result !== null) {
          return result;
        }
        used.delete(i);
      }
    }

    return null;
  }

  return generateSequence([1], new Set([1]));
}

function squareSumsRow(n) {
  return squareSums(n).join(" ");
}

console.log(squareSumsRow(19)); // expected output: "9 7 2 14 11 5 4 12 13 3 6 10 15 1 8"
