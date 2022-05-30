var input = [];

for (let i = 2; i <=process.argv.length; i++){
    input[i-2] = process.argv[i];
}



function printLCSubStr(arr)
{
    var n = arr.length;
    var s = arr[0];
    var len = s.length;
    var res = "";

    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j <= len; j++) {
            var stem = s.substring(i,j);
            var k = 1;
            for (k = 1; k < n; k++) {
                if (!arr[k].includes(stem)) {
                    break;
                }
            }
        }
        if (k===n && res.length < stem.length){
            res = stem;
        }
    }
    return res;
}



console.log(printLCSubStr(input));


