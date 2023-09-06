/*
The boot code is represented as a text file with one instruction per line of text. Each instruction consists of an operation (acc, jmp, or nop) and an argument (a signed number like +4 or -20).

acc increases or decreases a single global value called the accumulator by the value given in the argument. For example, acc +7 would increase the accumulator by 7. The accumulator starts at 0. 

jmp jumps to a new instruction relative to itself. The next instruction to execute is found using the argument as an offset from the jmp instruction; for example, jmp +2 would skip the next instruction, jmp +1 would continue to the instruction immediately below it, and jmp -20 would cause the instruction 20 lines above to be executed next.

nop stands for No OPeration - it does nothing. The instruction immediately below it is executed next.
For example, consider the following program:

nop +0
acc +1
jmp +4
acc +3
jmp -3
acc -99
acc +1
jmp -4
acc +6
These instructions are visited in this order:

nop +0  | 1
acc +1  | 2, 8(!)
jmp +4  | 3
acc +3  | 6
jmp -3  | 7
acc -99 |
acc +1  | 4
jmp -4  | 5
acc +6  |
First, the nop +0 does nothing. Then, the accumulator is increased from 0 to 1 (acc +1) and jmp +4 sets the next instruction to the other acc +1 near the bottom. After it increases the accumulator from 1 to 2, jmp -4 executes, setting the next instruction to the only acc +3. It sets the accumulator to 5, and jmp -3 causes the program to continue back at the first acc +1.

This is an infinite loop: with this sequence of jumps, the program will run forever. The moment the program tries to run any instruction a second time, you know it will never terminate.

Immediately before the program would run an instruction a second time, the value in the accumulator is 5.

Run your copy of the boot code. Immediately before any instruction is executed a second time, what value is in the accumulator?
*/

const fs = require('fs');

try{
    const data = fs.readFileSync('./bellwork/Daily JS Challenge_Day 11_Input.txt', 'utf8').split('\r\n').map(x => {
        let parts = x.split(' ');
        if(parts[1].split('+')[0] === ""){
            parts[1] = ["+", parts[1].split('+')[1]]
            return [parts[0], ...parts[1]];
        }else{
            parts[1] = ["-", parts[1].split('-')[1]]
            return [parts[0], ...parts[1]];
        }
    });
    let runCode = [];
    let accumulator = 0;
    let i = 0;
    while(!runCode.includes(data[i])){
        if(data[i].includes("nop")){
            runCode.push(data[i]);
            i++;
        }else if(data[i].includes("acc")){
            runCode.push(data[i]);
            if(data[i].includes("+")) accumulator += Number(data[i][2])
            else accumulator -= Number(data[i][2]);
            i++;
        }else if(data[i].includes("jmp")){
            runCode.push(data[i]);
            if(data[i].includes("+")) i += Number(data[i][2]);
            else i -= Number(data[i][2]);
        }
    }
    console.log(accumulator)
}catch(e){
    console.error(e);
}