//This was my first approach. It works too.

function convertToRoman(num) {
  if (num>=3999) {
    console.log('Error. Type a number between 1-3999')
    return;
  }
  else {
const romanThousands = [ '',"M", "MM", "MMM"];
const romanHundreds  = ['', "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
const romanTens      = ['',"X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
const romanOnes      = ['',"I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

let thouConverted  = ''
let hunConverted  = ''
let tensConverted = ''
let onesConverted= ''

let passedValue = num; 
let  padStr = num.toString().padStart(4,'0');


if (passedValue >=1000){
  
 thouConverted = romanThousands[padStr[0]]
 
} 

if (passedValue >= 100) {
 hunConverted = romanHundreds[padStr[1]]
}

if (passedValue >= 10){
  tensConverted=romanTens[padStr[2]]

}
if (passedValue > 0){
  onesConverted=romanOnes[padStr[3]]
 

}

console.log(thouConverted+hunConverted+tensConverted+onesConverted)

}
} 
convertToRoman(98); 
