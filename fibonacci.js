//See => https://www.rapidtables.com/math/number/fibonacci.html

function sumFibs(num) {
    
    let fibNums = [];
    let fbNum = num;
    let fb1 = 0;
    let fb2 = 1;
    
    if (num === 1){
        return 1;
    }
    else if (num > 1) {
        for (let x = 0; x < num; x++) {
            fbNum = fb1 + fb2;
            fb2 = fb1;
            fb1 = fbNum;
            fibNums.push(fbNum);
        }
        let oddFibNums = fibNums.filter(item => (
                                    item <= num && item % 2 != 0))
                                    .reduce((a, b) => a + b, 0);
                                    
        return oddFibNums;
    }
}
console.log(sumFibs(75025));