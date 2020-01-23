const form=document.querySelector(".js-input")
, input=form.querySelector("input")
, greetings=document.querySelector(".greetings");


const USER_LS="currentUser",
SHOWING_ON="showing";


function getUser(){
return localStorage.getItem(USER_LS);
}

function addUser(){
    form.classList.add(SHOWING_ON);
form.addEventListener("submit",handleSubmit);
}

function handleSubmit(event){
    event.preventDefault();
    const value=input.value;
    setUser(value);
    greetingUser();
}

function setUser(user){
    localStorage.setItem(USER_LS,user);
}

function greetingUser(){
    form.classList.remove(SHOWING_ON);
    greetings.classList.add(SHOWING_ON);
    greetings.innerHTML=`Hello, ${getUser()}`;

}
function init(){
const user=getUser();

if(user===null){
addUser();

}

else{
    greetingUser();
}


}

init();