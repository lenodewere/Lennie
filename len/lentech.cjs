/* LENNIE */
/* LENNIE */
async function dBinary(str) {
var newBin = str.split(" ")
var binCode = []
for (i = 0; i < newBin.length; i++) {
    binCode.push(String.fromCharCode(parseInt(newBin[i], 2)))
  }
return binCode.join("")
}
/* LENNIE */
async function eBinary(str = ''){    
let res = ''
res = str.split('').map(char => {       
return char.charCodeAt(0).toString(2);  
 }).join(' ')
return res
}
/* LENNIE */
module.exports = { dBinary, eBinary }
/* LENNIE */
/* LENNIE */
/* LENNIE */
/* LENNIE */
