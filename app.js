let upperset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerset  = "abcdefghijklmnopqrstuvwxyz";
let numberset = "1234567890";
let symbolset = "!@#$%&*?";

let passbox = document.getElementById("pass-box");
let totalchar = document.getElementById("pass-length")
let uppercase = document.getElementById("uppercase");
let lowercase = document.getElementById("lowercase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");

const getrandompass = (dataset)=>{
    return dataset[Math.floor(Math.random() * dataset.length)]
}

const generatepassword = (password = "") =>{
    if(uppercase.checked){
        password += getrandompass(upperset);
    }
    if(lowercase.checked){
        password += getrandompass(lowerset);
    }
    if(numbers.checked){
        password += getrandompass(numberset);
    }
    if(symbols.checked){
        password += getrandompass(symbolset);
    }
    if(password.length <= totalchar.value){
      return generatepassword(password);
    }
      
    passbox.innerText = validpassword(password, totalchar.value);
}
generatepassword();

document.getElementById("btn").addEventListener(
    "click",
function(){
    generatepassword();
}
)

function validpassword(password , value){
    if(password.length > value){
        let newpass = password.substring(0,value);
        return newpass;
    }
    else{
        return password;
    }
}

