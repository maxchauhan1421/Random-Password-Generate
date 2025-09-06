var PasswordBox = document.querySelector('#Password');
var button = document.querySelector('#btn');
var Character = 12;
var copy = document.querySelector('#copy');
console.log(copy);


    var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    var number = '0123456789';
    var symbol = '@#%^&*()_+-}{[]></-';

    var allChar = upperCase + lowerCase + number + symbol;

function PasswordGenerate(){
    var Password = '';
    Password += upperCase[Math.floor(Math.random() * upperCase.length)];
    Password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    Password += number[Math.floor(Math.random() * number.length)];
    Password += symbol[Math.floor(Math.random() * symbol.length)];

    while(Character > Password.length){
        Password += allChar[Math.floor(Math.random()* allChar.length)];
    }
     PasswordBox.value = Password;
}
function copyPassword(){
    
   navigator.clipboard.writeText(PasswordBox.value);
}
button.addEventListener('click',PasswordGenerate);
copy.addEventListener('click',copyPassword);