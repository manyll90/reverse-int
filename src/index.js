module.exports = function reverse (n) {
    n = Math.abs(n) + ""
    let reverseStr = "";
    for (let i = 0; i < n.length; i ++) {
      reverseStr = n[i] + reverseStr;
      /*console.log(reverseStr);*/
    }
    return Number(reverseStr);
}
