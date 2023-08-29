const fs = require('fs');

try{
    const data = fs.readFileSync('Daily JS Challenge_Day 8_Input.txt', 'utf8').split('\r\n')
    const [row, column] =[data.map(x => x.substring(0, 7)), data.map(x => x.substring(7))];
    let gridPos = row.map((y, i) => (y.split('').reduce((start, char) => (start << 1) + (char === 'B'), 0) * 8) + column[i].split('').reduce((start, char) => (start << 1) + (char === 'R'), 0));
    let highest = Math.max(...gridPos);
    console.log(highest);
}
catch{

}