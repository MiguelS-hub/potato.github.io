var generateBtn = document.querySelector('#generate');
var passwordText = document.querySelector('#password');
var nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialchars = ['!', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ' < ', '=', ' > ', ' ? ', '@', '[', ']', ' ^ ', '_', '`', '{', '|', '}', '~'];

var lowers = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var caps = [ "A", "B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]



let Choice = [];

let passwordUser = '';


//The beginning of the funtion
function writePassword() {
  passwordUser = '';


  var validation = prompt('How long is your password?'); //validation, so that the funtion only accepts password legnth of 8-128
  if (validation< 8 || validation > 128) {
    alert('length must be between 8 and 128');
    return;
  }

  var Capital = confirm('Do you want to include Upper Case?');
  var lower = confirm('Do you want to include lower case?');
  var num = confirm('Do you want to include numbers?');
  var specialchar = confirm('Do you want to to include speacial characters?');
  //  If statements
  if (!specialchar && !lower && !num && !Capital) { //validation for all imputs
    choice= alert('You must choose  atleast one character')
    return;
  }
  if (Capital) Choice = Choice.concat(caps); //the combination of the users choice and capital letters
  if (lower) Choice = Choice.concat(lowers);//the combination of the users choice and lower letters
  if (num) Choice = Choice.concat(nums);//the combination of the users choice and numbers
  if (specialchar) Choice = Choice.concat(specialchars);//the combination of the users choice and special characters
  
  while (passwordUser.length <= validation) { 
    var concat = Math.floor(Math.random() * Choice.length);
    var arrayofusers = Choice[concat];
    passwordUser += arrayofusers;
  }

  

  passwordText.value = passwordUser;
}

generateBtn.addEventListener('click', writePassword);
