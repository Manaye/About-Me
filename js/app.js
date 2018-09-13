'use strict';

var response = prompt('Are you married?');
if(response.toLowerCase() === 'yes'|| response.toLowerCase() === 'y'){
  console.log('where enjoy your honeymoon?');
  alert('Where you enjoy your honeymoon?');
}
else {
  console.log('then you are a single....!!!');
}

var ageResponse = prompt('Are you 18 years old or older?');
if(ageResponse.toLowerCase() === 'yes' || ageResponse.toUpperCase() === 'Y'){
  console.log('you are eligible to work!!!');
  alert('Are you 18 years old or older?');
  
}
else {
  console.log('grow up kiddo!!!');
}

var something = prompt('did you see something in the sky?');
if(something.toUpperCase() === 'yes'|| something.toUpperCase() === 'Y'){
  console.log('i am not imagining!!!');
  alert('did you see something in the sky?');
}
else {
  console.log('i guess i am imagining things!!!');
}


var movies = prompt('Have you seen Beauty and the Beast?');
if(movies.toLowerCase() === 'no' || movies.toUpperCase()==='NO' ){
  console.log('ohh u miss it!!');
  alert('Have you seen Beauty and the Beast?');
}
else if(movies.toLowerCase() === 'yes' ||movies.toUpperCase()==='Y'){
  console.log('ohh Me too what a nice movie !!');
}
else {
  console.log('answer yes or no please!!!');
}

var coding = prompt('do you love coding?');
if(coding.toLowerCase() === 'yes' || coding.toUpperCase() === 'Y'){
  console.log('You might get good job');
}
else {
  console.log('may be you should find something that you love and be good.');
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
