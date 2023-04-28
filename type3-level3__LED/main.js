
var input = require('fs').readFileSync('inputs.txt', 'utf8');
var lines = input.trim().split('\n');

let n = lines[0]; 
let i;
const ledsNumbers = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                     [6, 2, 5, 5, 4, 5, 6, 4, 7, 6]] ;

for (i=1;i<=n;i++){
    const number = lines[i].toString();

    const size = number.length;
    let j, ledSum=0;

    for (j=0;j<size;j++){

        const digit = parseInt(number[j]);
        const posi = ledsNumbers[0].indexOf(digit);
        ledSum += parseInt(ledsNumbers[1][posi]);

    }
    console.log(ledSum + " leds");
}
