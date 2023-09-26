/******************************
 * YOUR CODE GOES RIGHT HERE! *
 ******************************/

function isItLong(longString){
  if(longString.length > 20)
    return "That's a long string!"

}

 function isItMedium(regString){
  if(regString.length >=10 && regString.length <=20)
    return "That's a regular sized string!"
 } 

 function isItShort(smallString){
  if(smallString.length >=10)
  return "That's not a small string!"
  if(smallString.length <10)
  return "That's a small string!"
 }

 function howLongIsMyString(howLong){
  if(howLong.length >20)
  return "That's a long string!"
  if(howLong.length <=20 && howLong.length >=10)
  return "That's a regular sized string!"
  if(howLong.length <=10)
  return "That's a small string!"
 }

   function instructorHeight(instructor){
    if(instructor ==='Colin')
    return 62
    else if(instructor ==='Mesuara')
    return 69
  
        return "I don't know that instructor!"
  
   }


 
    
  



 






/**********************************
 *      OUR CODE GOES BELOW.      *
 * THIS IS FOR INTERNAL USE ONLY. *
 * DO NOT ADD OR CHANGE ANYTHING! *
 **********************************/

if (typeof isItLong === 'undefined') {
  isItLong = undefined;
}

if (typeof isItMedium === 'undefined') {
  isItMedium = undefined;
}

if (typeof isItShort === 'undefined') {
  isItShort = undefined;
}

if (typeof howLongIsMyString === 'undefined') {
  howLongIsMyString = undefined;
}

if (typeof instructorHeight === 'undefined') {
  instructorHeight = undefined;
}


module.exports = {
  isItLong,
  isItMedium,
  isItShort,
  howLongIsMyString,
  instructorHeight,
}