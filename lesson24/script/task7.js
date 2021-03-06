let userNumber = prompt('Enter any number: ');
let firstTwoDigits = userNumber.substr(0, 2);
userNumber = userNumber.substr(2);
alert('New number is ' + userNumber + firstTwoDigits);