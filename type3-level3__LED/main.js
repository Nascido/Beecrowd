
var input = require('fs').readFileSync('inputs.txt', 'utf8');
var lines = input.trim().split('\n');

let n = lines[0]; 

if (n>2000){n = 2000}

let i;
const ledsNumbers = [6, 2, 5, 5, 4, 5, 6, 4, 7, 6] ;

for (i=1;i<=n;i++){
    const number = lines[i].toString();
    const size = number.length;
    let j, ledSum=0;

    for (j=0;j<size;j++){
        const digit = parseInt(number[j]);
        ledSum += ledsNumbers[digit];

    }
    
    console.log(ledSum + " leds");
}
