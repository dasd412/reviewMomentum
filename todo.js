const toDoForm=document.querySelector(".js-toDoForm"),
toDoInput=toDoForm.querySelector("input"),
toDoList=document.querySelector(".js-toDoList");

const TODOS_LS=`toDos`;

let toDoArray=[];

function loadToDos(){
const load=localStorage.getItem(TODOS_LS);
if(load!==null){
const parsedToDos=JSON.parse(load);

parsedToDos.forEach(function(toDo){
  paintToDo(toDo.text);
} );

}


}

function saveToDos(){
  localStorage.setItem(TODOS_LS,JSON.stringify(toDoArray));
}

function paintToDo(text){
const li=document.createElement("li");
const delButton=document.createElement("button");
delButton.innerHTML="X";
delButton.addEventListener("click",deleteToDo);
const span=document.createElement("span");
const newId=toDoArray.length+1;

span.innerText=text;
li.appendChild(span);
li.appendChild(delButton);
li.id=newId;

toDoList.appendChild(li);

const toDoObj={
  text:text,
  id:newId
  
};

toDoArray.push(toDoObj);
saveToDos();
}

function handleSumbitToDo(event){
event.preventDefault();
const currentValue=toDoInput.value;
paintToDo(currentValue);
toDoInput.value="";
}

function init(){
  loadToDos();
  toDoForm.addEventListener("submit",handleSumbitToDo);
}

init();

function deleteToDo(event){
const btn=event.target;
const li=btn.parentNode;
toDoList.removeChild(li);
const cleanToDos=toDoArray.filter(function (toDo){
  return toDo.id!==parseInt(li.id);
});
toDoArray=cleanToDos;
saveToDos();
}

function filterFn(toDo){
return toDo.id===1;
}