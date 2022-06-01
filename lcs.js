function printLCSubStr(X,Y)
{
    var m = X.length;
    var n = Y.length;
    let LCSuff = new Array(m+1);
    let len = 0;
    let row = 0, col = 0;
    for (let i = 0; i <= m; i++) {
        LCSuff[i] = Array(n+1);
        for (let j = 0; j <= n; j++) {
            LCSuff[i][j]=0;   
            if (i == 0 || j == 0)
                LCSuff[i][j] = 0;

            else if (X[i-1] == Y[j-1]) {
                LCSuff[i][j] = LCSuff[i - 1][j - 1] + 1;
                if (len < LCSuff[i][j]) {
                    len = LCSuff[i][j];
                    row = i;
                    col = j;
                }
            }
            else
                LCSuff[i][j] = 0;
        }
    }
    if (len == 0) {
        return null;
    }
    let resultStr = "";
    while (LCSuff[row][col] != 0) {
        resultStr = X[row-1] + resultStr;
        --len;
        row--;
        col--;
    }
    return resultStr;
}

const arr = process.argv.slice(2);
if (arr.length < 2) {
    if (arr.length == 1) result = arr[0];
    else
    result = "\n";  
}
else
{var hold = 0;
var result = printLCSubStr(arr[hold], arr[1]);
}

if (arr.length > 2) {
    for (let i = 2; i < arr.length; i++) {
        tmp = printLCSubStr(arr[hold], arr[i]);
        if (tmp.length <= result.length) {result = tmp; hold = i} 
    }
}
if (result === null) console.log("\n")
else console.log(result);

