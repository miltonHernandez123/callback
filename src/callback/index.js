function sum (num1,num2){
    return num1 +num2;
}

function calc( num1,num2,callback){
    return callback(num1, num2);
}

console.log(calc(2,2,sum));

setTimeout (function (){
    console.log("hello world");
} ,5000);

function getting(name){
    console.log (`hola ${name}`);
}

setTimeout(getting,1000,"lo logra señor");

