// console.log("This is a console window");
// var userName=prompt("Whuts your name ?");
// alert("Welcome "+userName+" to minion talks");


// btnTranslate.addEventListener("click",function translator(){
//     console.log("hi you clicked");
// })
function translator(){
console.log("hi");
console.log(txtInput.value);
}
var btnTranslate=document.querySelector("#btn-translate");
var txtInput=document.querySelector("#txt-input");
btnTranslate.addEventListener("click",translator);