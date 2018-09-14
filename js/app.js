'use strict';

var userName = prompt('What is your name?');
alert('Welcome ' + userName + '!');


// I need to create a variable that keeps track of correct answers.



// This is how we want to strucutre the next four questions:
// We want to write questions that only give back yes or no responses
// We want provide alerts to let peopole know that they were right or wrong because we then simiply move to the next question
// We also want to provide console logs that let us know what the user provided in their answers. 
var response = prompt('Is Hiwot from Ethiopia?');
if(response.toLowerCase() === 'yes'|| response.toLowerCase() === 'y'){
  console.log('User guessed correct!');
  alert(userName + ' geat job! Yes, I am from Ethiopia');
}
else {
  console.log('User guessed incorrectly' + response);
  alert('Sorry, you\'re answer is wrong. I am from Ethiopia!');
}



// follow the structure from above
var ageResponse = prompt('Is Hiwot\'s favorite color green?');
if(ageResponse.toLowerCase() === 'no' || ageResponse.toLowerCase() === 'n'){ // alwways put the right answer in the if
  console.log('you are eligible to work!!!');
  alert('You were right!!!');
}
else { // always put the wrong answer in the else
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



var counter = 0;
var maxTries = 3;
var FavNumber = 13;
for(var i = 0; i <= 4; i++){
  var tries = prompt('what is my fav number? choose between 0 & 20');
  counter+= 1;
  if(counter> maxTries){
    alert('you have reached your maximum tries.');
    break;
  }
  if(tries === FavNumber){
    alert('you won!!!');
    break;
  } 
}

var brandCounter = 0;
var maxTriesBrand = 6;
var favBrand = 'Gucci';
for(i=0;i<=7;i++){
    
  tries= prompt('what is my brand?');
  brandCounter += 1;
  if(brandCounter> maxTriesBrand){
    alert('you have reached your maximum tries.');
    break;
  }
  if(tries === favBrand){
    alert('you won!!!');
    break;
  } 
}
