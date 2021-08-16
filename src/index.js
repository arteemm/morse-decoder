const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  let narr = expr.split('');
  let arr = [];
  let str = '';

      x:for (let i = 0; i <= narr.length -1; i++) {
      if (i < 10 ) {
          str += narr[i]; 
      } else {
          arr.push(str);
          narr.splice(0, 10);
          str = '';
          i = -1;
          if (narr.length <= 10) {
              str = narr.join('');
              arr.push(str);
              break;
      }
          continue x;
      }
   }

  arr = arr.map(function(item) {
      let r = item.indexOf('1');
      item = item.split('').splice(r, ).join('');
      return item;
  })
   let tere = '11';
  let tochka = '10';
  
  arr = arr.map(function(item) {
      let strin = '';
      if(item === '*') {
          return item;
      }
      for (let p = 1; p <= item.length - 1; p += 2) {
          if(item[p] === '0') {
              strin += '.';
          } else {
              strin += '-';
          }
      }
      return item = strin;
  })
  let word = '';
  for (let r = 0; r <= arr.length - 1; r++) {
       if (arr[r] === '*') {
              word += ' ';
          }
      for(let key in MORSE_TABLE) {
         
          if(arr[r] == key) {
              word += MORSE_TABLE[key];
      } 
  }
}
  return word;
}

module.exports = {
    decode
}