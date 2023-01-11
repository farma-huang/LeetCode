/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  let str = '';
  let tStr = '';
  let stack = [];
  let subStack = [];
  // "3[a2[c]]"

  for (let i = 0; i < s.length; i++) {
    if (s[i] === ']') {
      let c = null;
      let multi = [];
      while (1) {
        c = stack.pop();
        if (c === '[') {
          while (Number.isInteger(parseInt(stack[stack.length - 1], 10))) {
            multi.push(parseInt(stack.pop(), 10));
          }
          break;
        } else {
          subStack.push(c);
        }
      }
      subStack.reverse();
      let times = multi.reverse().reduce((a, b) => a * 10 + b);
      for (let j = 0; j < times; j++) {
        stack = stack.concat(subStack);
      }
      subStack = [];
    } else {
      stack.push(s[i]);
    }
  }

  return stack.join("");
};

console.log(decodeString("100[leetcode]"));
// console.log(decodeString("3[a]2[bc]"));
// console.log(decodeString("3[a2[c]]"));
// console.log(decodeString("2[abc]3[cd]ef"));
