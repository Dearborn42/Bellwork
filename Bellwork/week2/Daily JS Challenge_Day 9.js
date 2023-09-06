const fs = require('fs');

try{
    const data = fs.readFileSync('Daily JS Challenge_Day 9_Input.txt', 'utf8').split('\r\n');
    let groups = [];
    let group = [];

    for (let i = 0; i < data.length; i++) {
        if (data[i] != '') {
            group.push(data[i].split(''));
        } else {
            groups.push(group);
            group = [];
        }
    }
// =------------------------------------------
    groups = groups.map(x => {
        return x.flatMap(y => {return y});
    })

    let totalCount = 0;
    groups.map(x =>{
        let pastLetters = [];
        for(let i=0; i<x.length; i++) {
            if(!pastLetters.includes(x[i])){
                totalCount++;
                pastLetters.push(x[i]);
            }
        }
    })

    console.log(totalCount);
}catch(e){
    console.error(e);
}
