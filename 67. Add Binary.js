/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
 var addBinary = function(a, b) {
    let aArr = a.split("").reverse().map(num => parseInt(num, 10));
    let bArr = b.split("").reverse().map(num => parseInt(num, 10));
    let aLength = aArr.length;
    let bLength = bArr.length;
    let leng = aLength > bLength ? aLength : bLength;
    let sum = [];

    if (aLength > bLength) {
        for (let i = 1; i <= aLength - bLength; i++) {
            bArr.push(0);
        }
    } else {
        for (let i = 1; i <= bLength - aLength; i++) {
            aArr.push(0);
        }
    }

    for (let i = 0; i < leng; i++) {
        curr = (sum[i] || 0) + aArr[i] + bArr[i];

        if (curr >= 2) {
            sum[i] = curr % 2;
            sum.push(1);
        } else {
            sum[i] = curr;
        }
    }

    return sum.reverse().join("");
};

console.log(addBinary("1010", "1011"));