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
var guessCounter = 0;
while(guessNum > 0){
  var yourGuess = parseInt(prompt('what is my fav number?'));
  guessCounter++;
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
  if(guessCounter>3){
    alert('guess out of time');
    break;
  }
  
}


//var statesLived = ['washington', 'california', 'ohio', 'michigan','dallas', 'losangels'];
var statesHash ={};
statesHash['washington']='washington';
statesHash['california']='california';
statesHash['ohio']='ohio';
statesHash['michigan']='michigan';
statesHash['dallas']='dallas';
statesHash['losangels']='losangels';
statesHash['atlanta']='atlanta';

var stateTries=0;
var hashLen =Object.keys(statesHash).length;
//alert(hashLen);
var correct = 0;


  while(stateTries<hashLen){
      //for(var i=0; i<statesLived.length; i++){
      var guessState = prompt('which states did i live before?');
      stateTries++;
      // var normalizedSate = guessState.toLocaleLowerCase();
      //var i =0;
      //var state = statesHash[guessState];
      //alert(state);
      if(guessState in statesHash){
      //if(state!==guessState){
     correct++;
      alert('correct');
      //break;
      //correct++;
      //  break;
      }
      else{alert('wrong');}
      //stateTries++;
     // correct++; 
    }   
    alert( 'You got ' + correct + ' out of '+ stateTries + ' correct');
  
  
  
   




// while(stateTries<6){
//   var guess = prompt('which states did i live before?');
//   var r = guessState(guess);
//   stateTries++;
  
// }

