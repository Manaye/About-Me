'use strict';

var userName = prompt('What is your name?');
alert('Welcome ' + userName + '!');

var response = prompt('Are you married?');
if(response.toLowerCase() === 'yes'|| response.toLowerCase() === 'y'){
  console.log('I hope you had a nice honeymoon');
  alert('I hope you had a nice honeymoon ' + userName);
}
else {
  console.log('then you are a single....!!!');
  alert('then you are a single....!!!');
}

var ageResponse = prompt('Are you 18 years old or older?');
if(ageResponse.toLowerCase() === 'yes' || ageResponse.toLowerCase() === 'y'){
  console.log('you are eligible to work!!!');
  alert('you are eligible to work!!!');
}
else {
  console.log('grow up kiddo!!!');
  alert('grow up kiddo!!!');
}

var something = prompt('did you see something in the sky?');
if(something.toUpperCase() === 'yes'|| something.toLowerCase() === 'y'){
  console.log('i am not imagining!!!');
  alert('i am not imagining!!!');
}
else {
  console.log('i guess i am imagining things!!!');
  alert('i guess i am imagining things!!!');
}


var movies = prompt('Have you seen Beauty and the Beast?');
if(movies.toLowerCase() === 'no' || movies.toLowerCase()==='n' ){
  console.log('ohh u miss it!!');
  alert('ohh u miss it!!');
}
else if(movies.toLowerCase() === 'yes' ||movies.toLowerCase()==='y'){
  console.log('ohh Me too what a nice movie !!');
  alert('ohh Me too what a nice movie !!');
}
else {
  console.log('answer yes or no please!!!');
  alert('answer yes or no please!!!');
}

var coding = prompt('do you love coding?');
if(coding.toLowerCase() === 'yes' || coding.toLowerCase() === 'y'){
  console.log('You might get good job');
  alert('You might get good job');
}
else {
  console.log('may be you should find something that you love and be good.');
  alert('may be you should find something that you love and be good.');
}

var guessNum = 4;
var myFavNum = 13;

while(guessNum > 0){
  var yourGuess = parseInt(prompt('what is my fav number?'));

  if (yourGuess === myFavNum) {
    alert('guess is correct');
    break;

  }
  if (yourGuess > myFavNum){
    alert('guess is too high');
  }
  if (yourGuess < myFavNum){
    alert('guess is too low');
  }
  
}

alert('guess out of time');


var brandCounter = 0;
var maxTriesBrand = 6;
var favBrand = 'Gucci';
for(var i = 0; i <= 7; i++){
    
  var tries = parseInt(prompt('what is my brand?'));
  brandCounter+= 1;
  if(brandCounter > maxTriesBrand){
    alert('you have reached your maximum tries.');
    break;

  }
  if(tries === favBrand){
    alert('you won!!!');
    
  } 
}
