const fs = require('fs');

function bags(list1, list2, check){
    let returnList = new Set(list2);
    list1.forEach(x => {
        list2.map(y => {
            if(x.includes(y)){
                returnList.add(x.match(/\w+\s+\w+(?=\s+bags\b)/)[0]);
            }
        })
    })
    if(returnList.size === check){
        return 1;
    }else{
        return returnList;
    }
}

try{
    const data = fs.readFileSync('./bellwork/Daily JS Challenge_Day 10_Input.txt', 'utf8').split('\r\n');
    let bagsContainingGold = new Set();
    let remaining = [];
    data.forEach(x => {
        if(x.includes("shiny gold bag")){
            if(x.match(/\w+\s+\w+(?=\s+bags\b)/)[0]!="shiny gold"){
                bagsContainingGold.add(x.match(/\w+\s+\w+(?=\s+bags\b)/)[0]);
            }
        }else{
            remaining.push(x);
        }
    })

    while(bags(remaining, [...bagsContainingGold], bagsContainingGold.size) != 1){
        bagsContainingGold = bags(remaining, [...bagsContainingGold], bagsContainingGold.size);
    }
    
    totalBags = bagsContainingGold.size;
    console.log(totalBags);
}catch(e){
    console.error(e);
}