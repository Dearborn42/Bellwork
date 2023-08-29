let paygrade = 7
let level = 9
let salary = 1
let first = paygrade == 7 ? level>=0 &&level<=8? salary*1.05 : salary*1.04 :  salary*1.06


let value = 0;
let increase = 0 
let break_even=0
let decrease = 0;
let second = value > 0 ? ++increase : value == 0 ? ++break_even : ++decrease


let text = "Andrew".split('');
let capa = 0;
let lettera = 0;
let total = 0;
for(let i=0; i<text.length; i++){
    let result = text[i] == "A" ? capa++ : text[i] == "a"? lettera++ : total++
}

let date = new Date().getDay()
let day = date == 0? "Sunday" : date == 1? "Monday" : date == 2? "Tuesday": date == 3? "Wednesday": date == 4? "Thursday": date == 5? "Friday": date == 6 ? "Saturday": "Day does not exist"