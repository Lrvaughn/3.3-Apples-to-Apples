import input from 'input';
const correct = "yes";
const answer = await input.text ("is 2+2=4")

if (correct== answer) { 
    console.log("correct")
 } else {
     console.log ("false")
 }