// Code your solutions in this file
function writeCards(names, typeOfGift) {
    let i = 0;
    let sentence = [];
    while (i < names.length) {
      sentence.push(`Thank you, ${names[i]}, for the wonderful ${typeOfGift} gift!`) ;
      i++; 
    }
   
    return sentence;
  }

  function countDown(number) {
    while (number > -1 ) {

        console.log(number)
        number -= 1;
      }
  }