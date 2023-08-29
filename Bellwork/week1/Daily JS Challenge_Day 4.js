
// Before you leave, the Elves in accounting just need you to fix your expense report (your puzzle input); apparently, something isn't quite adding up.

// Specifically, they need you to find the two entries that sum to 2020 and then multiply those two numbers together.

// For example, suppose your expense report contained the following:

// 1721
// 979
// 366
// 299
// 675
// 1456
// In this list, the two entries that sum to 2020 are 1721 and 299. Multiplying them together produces 1721 * 299 = 514579, so the correct answer is 514579.

// Of course, your expense report is much larger. Find the two entries that sum to 2020; what do you get if you multiply them together?


const fs = require('fs');

try {
    const data = fs.readFileSync('Daily JS Challenge_Day 4_Input.txt', 'utf8').split('\n').map(line => line.replace('\r', '')).map(x => parseInt(x, 10));
    let num1 =0; 
    let num2 = 0;
    for(let i=0; i<data.length; i++){
        for(let j=0; j<data.length; j++){
            if(data[i] + data[j] === 2020){
                num1 = data[j];
                num2 = data[i];
            }
        }
    }
    console.log(num1, num2)
    console.log(num1 * num2);
}
catch(err){
    console.log(err);
}