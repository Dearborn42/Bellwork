/*
Objective****************
In this challenge, we learn about JavaScript Dates. Check out the attached tutorial for more details.

Task****************
Given a date string,dateString , in the format MM/DD/YYYY, find and return the day name for that date. Each day name must be one of the following strings: Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, or Saturday. For example, the day name for the date 12/07/2016 is Wednesday.

Input Format****************
Locked stub code in the editor reads the following input from stdin:
The first line contains an integer, , denoting the number of dates to check.
Each line  of the  subsequent lines contains a date in MM/DD/YYYY format; each date denotes some  that is passed to the function.

Constraints****************
It is guaranteed that the input only consists of valid dates.

Output Format****************
The function must return a string denoting the day of the week corresponding to the date denoted by .

Sample Input 0

10/11/2009
11/10/2010
Sample Output 0

Sunday
Wednesday
Explanation 0

The function is called for the following  dates:
The date 10/11/2009 was a Sunday, so we return Sunday.
The date 11/10/2010 was a Wednesday, so we return Wednesday.
*/

function getDay(input) {
    input = input.split("/");
    let date = new Date(input[2], input[0] - 1, input[1]);
    let day = date.getDay();
    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    return days[day];
}
console.log(getDay("10/11/2009"));
console.log(getDay("11/10/2010"));
