module.exports = function toReadable (number) {
  const numFrom0to19 = {
    0 : 'zero',
    1 : 'one',
    2 : 'two',
    3 : 'three', 
    4 : 'four',
    5 : 'five', 
    6 : 'six', 
    7 : 'seven', 
    8 : 'eight', 
    9 : 'nine', 
    10 : 'ten', 
    11 : 'eleven',
    12 : 'twelve', 13: 'thirteen', 
    14 : 'fourteen', 
    15 : 'fifteen',
    16 : 'sixteen', 
    17 : 'seventeen',
    18 : 'eighteen',
    19 : 'nineteen',
   }
   const numFrom10to19 = {
    0 : 'ten', 
    1 : 'eleven',
    2 : 'twelve', 
    3: 'thirteen', 
    4 : 'fourteen', 
    5 : 'fifteen',
    6 : 'sixteen', 
    7 : 'seventeen',
    8 : 'eighteen',
    9 : 'nineteen',
   }
   const numFrom20to99 = {
    2 : 'twenty',
    3 : 'thirty', 
    4 : 'forty',
    5 : 'fifty', 
    6 : 'sixty', 
    7 : 'seventy', 
    8 : 'eighty', 
    9 : 'ninety', 
   }
   if(number < 20){
    return numFrom0to19[number];
   }else if(number >= 20 && number <100){
      number = String(number).split('')
      if(number[1] === '0'){
        return numFrom20to99[number[0]];
      }
      return numFrom20to99[number[0]] + ' ' + numFrom0to19[number[1]];
   }else if(number >= 100){
      number = String(number).split('');
      if(number[1] === '0' && number[2] === '0'){
        return numFrom0to19[number[0]] + ' hundred'
      }
      if(number[1] === '1'){
        return numFrom0to19[number[0]] + ' hundred ' + numFrom10to19[number[2]];
      }
      if(number[2] === '0'){
        return numFrom0to19[number[0]] + ' hundred ' + numFrom20to99[number[1]];
      }
      if(number[1] === '0'){
        return numFrom0to19[number[0]] + ' hundred ' + numFrom0to19[number[2]];
      }
      
      return numFrom0to19[number[0]] + ' hundred ' + numFrom20to99[number[1]] + ' ' + numFrom0to19[number[2]];
   }
}
