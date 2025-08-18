//This was my first approach. It works too.
function convertToRoman(num) {
  if (! Number.isInteger(num) || num>3999 || num<=0 ) {
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

let  padStr = num.toString().padStart(4,'0');
thouConverted = romanThousands[padStr[0]] 
hunConverted = romanHundreds[padStr[1]]
tensConverted=romanTens[padStr[2]]
onesConverted=romanOnes[padStr[3]]

let sum = `${thouConverted}${hunConverted}${tensConverted}${onesConverted}` ;
console.log(sum) 
return sum;
}
}
convertToRoman(-4);
convertToRoman(3999); 
convertToRoman(98); 
