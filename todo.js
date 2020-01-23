const toDoForm=document.querySelector(".js-toDoForm"),
toDoInput =toDoForm.querySelector("input"),
toDoList=document.querySelector(".js-toDoList");

const TODOS_LS="toDos";
let toDos=[];

function handleSubmit(event){
    event.preventDefault();

    const currentValue=toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = " ";
}

function paintToDo(value){
    const li=document.createElement("li");
    const delBtn=document.createElement("button");
    const span=document.createElement("span");
    const newId=toDos.length+1;

delBtn.innerText="x";
delBtn.addEventListener("click",deleteToDo);
span.innerText=value;
li.appendChild(delBtn);
li.appendChild(span);
li.id=newId;

toDoList.appendChild(li);

const toDoObj={
    text:value,
    id:newId

};

toDos.push(toDoObj);
saveToDos();
}

function deleteToDo(event){

    const btn=event.target;
    const li=btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos=toDos.filter(function(toDo){

        return toDo.id!==parseInt(li.id);
    });

    toDos=cleanToDos;
    saveToDos();
}

function saveToDos(){
    localStorage.setItem(TODOS_LS,JSON.stringify(toDos));
}

function init(){
loadToDos();
toDoForm.addEventListener("submit",handleSubmit);
}

function loadToDos(){
const loaded=localStorage.getItem(TODOS_LS);

if(loaded!==null){
const parsed=JSON.parse(loaded);
parsed.forEach(function(toDo){
    paintToDo(toDo.text);
});

}

}

init();
