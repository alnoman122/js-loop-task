
/***

"I will invest at least 6 hrs every single day 
for next 60 days!" this message 60 times. So display this.

 */

let day =6;
while(day <= 60)
{
console.log("I will invest at least 6 hrs every single day for next 60 days!");
day++;
}
/***
Subtask-1:
Find all the odd numbers from 61 to 100.
 */
/***
Subtask-2:
Find all the even numbers from 78 to 98.
 */

 let oddNumbers =[];
 for(let i = 61; i <= 100; i++){
    if (i % 2 !==0){
    console.log(i)}}


    let  evenNum =[];
    for (let p = 78; p <= 98; p++){
        if (p % 2  === 0)
        {
            console.log(p);
        }
    }

/***
Subtask-1:
Display sum of all the odd numbers from 81 to 131.
 */
/***
Subtask-2:
Display sum of all the even numbers from 206 to 311.
 */

let sumOdd = 0;
for ( let i = 81; i <= 131; i++){
if (i % 2 !==0){
    sumOdd += i;
    }}
console.log(sumOdd);
    
   let sumEven = 0;
    for (let p = 206; p<=311; p++)
    {
        if(p % 2 === 0){
            sumEven += p;
        }
    }
console.log(sumEven);