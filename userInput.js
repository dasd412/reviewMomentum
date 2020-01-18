const form=document.querySelector(".js-input"),
input=form.querySelector("input"),
greetings=document.querySelector(".greetings");


const USER_LS="currentUser";

function getUser(){
  return localStorage.getItem(USER_LS);
}

function greeting(){
greetings.innerHTML=`Hello, ${getUser()}`;
}

function askForName(){
  form.addEventListener("submit",handleSubmit);

}

function handleSubmit(event){
  event.preventDefault();
  const name=input.value;

setName(name);
greeting();

}

function setName(name){
localStorage.setItem(USER_LS,name);
}

function init(){

if(getUser()===null){

askForName();
}
else{
greeting();

}

}

init();
