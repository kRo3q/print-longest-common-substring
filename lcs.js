function printLCSubStr(X,Y,m,n)
{

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
        console.log("\n");
        return;
    }

    let resultStr = "";


    while (LCSuff[row][col] != 0) {
        resultStr = X[row-1] + resultStr;
        --len;
        row--;
        col--;
    }

   console.log(resultStr);
}
 

let X = process.argv[2];
let Y = process.argv[3];
let m = X.length;
let n = Y.length;
printLCSubStr(X, Y, m, n);