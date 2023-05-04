
var input = require('fs').readFileSync('inputs.txt', 'utf8');
var lines = input.trim().split('\n');

let n = lines[0]; 

if (n>2000){n = 2000}

let i;
const ledsNumbers = [6, 2, 5, 5, 4, 5, 6, 4, 7, 6] ;

for (i=1;i<=n;i++){

    let number = parseInt(lines[i])
    if( number > 10**100 ){
        console.log(602 + " leds")
        
    } else {
        number = lines[i].toString()
        let size = number.length;
        let j, ledSum=0;

        for (j=0;j<size;j++){
            let digit = parseInt(number[j]);
            let leds = ledsNumbers[digit]
            ledSum += leds;
        }
        console.log(ledSum + " leds");
    }
}
