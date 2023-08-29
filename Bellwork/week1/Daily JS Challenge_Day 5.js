const fs = require('fs');

try {
    const data = fs.readFileSync('Daily JS Challenge_Day 4_Input.txt', 'utf8').split('\n').map(line => line.replace('\r', '')).map(x => parseInt(x, 10));
    let num1 =0; 
    let num2 = 0;
    let num3 = 0;
    for(let i=0; i<data.length; i++){
        for(let j=0; j<data.length; j++){
            for(let k=0; k<data.length; k++){
                if(data[i] + data[j] + data[k] === 2020){
                num1 = data[j];
                num2 = data[i];
                num3 = data[k];
            }
            }
        }
    }
    let multiply = num1 * num2 * num3;
    console.log(multiply);
}
catch(err){
    console.log(err);
}

/* NEW JS CHALLENGE Part 1 *******

Your flight departs in a few days from the coastal airport; the easiest way down to the coast from here is via toboggan.

The shopkeeper at the North Pole Toboggan Rental Shop is having a bad day. "Something's wrong with our computers; we can't log in!" You ask if you can take a look.

Their password database seems to be a little corrupted: some of the passwords wouldn't have been allowed by the Official Toboggan Corporate Policy that was in effect when they were chosen.

To try to debug the problem, they have created a list (your puzzle input) of passwords (according to the corrupted database) and the corporate policy when that password was set.

For example, suppose you have the following list:

1-3 a: abcde
1-3 b: cdefg
2-9 c: ccccccccc
Each line gives the password policy and then the password. The password policy indicates the lowest and highest number of times a given letter must appear for the password to be valid. For example, 1-3 a means that the password must contain a at least 1 time and at most 3 times.

In the above example, 2 passwords are valid. The middle password, cdefg, is not; it contains no instances of b, but needs at least 1. The first and third passwords are valid: they contain one a or nine c, both within the limits of their respective policies.

How many passwords are valid according to their policies? */
try{
    const passwordList = fs.readFileSync('Daily JS Challenge_Day 5_Input.txt', 'utf8').split('\n').map(line => line.replace('\r', '')).map(line => {
        const parts = line.split(":");
        const password = parts[1].trim().replace(/\s+/g, '');
        return [parts[0], password]
    })
    let totalValid = 0;
    passwordList.filter(x => {
        const [policy, password] = x;
        const [letter] = policy.split(" ")[1];
        const [min, max] = policy.split(" ")[0].split("-").map(x => parseInt(x, 10));
        const occurrences = password.split('').filter(char => char === letter).length;
        if(occurrences >= min && occurrences <= max){
            totalValid++;
        }
    })
    console.log(totalValid);
}
catch{
    console.log("Error reading file");
}