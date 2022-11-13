// console.log("This is a console window");
// var userName=prompt("Whuts your name ?");
// alert("Welcome "+userName+" to minion talks");


// btnTranslate.addEventListener("click",function translator(){
//     console.log("hi you clicked");
// })

var btnTranslate=document.querySelector("#btn-translate");
var txtInput=document.querySelector("#txt-input");
var outputdiv=document.querySelector("#output");

//wire fetch call in the app
const serverurl="https://api.funtranslations.com/translate/shakespeare.json";
function geturl(text){
    return serverurl +"?text="+text;
}
function errorHandler(error){
    console.log("error");
    alert("you have faced some server timeout error");
}
function translator(){
    // console.log(txtInput.value);
    //  outputdiv.innerText="translated:"+ txtInput.value;
    var usertext = txtInput.value;
    fetch(geturl(usertext)).then(response => response.json()).then(json=>{
        var translated=json.contents.translated;
        outputdiv.innerText=translated;
    })
    .catch(errorHandler);
}

btnTranslate.addEventListener("click",translator);

