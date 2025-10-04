
const inputTask = document.getElementById("taskInput");
const btnAddTask = document.getElementById("bttnAddTask");
const taskList = document.getElementById("taskList");
const btnDeleteTask = document.getElementById("bttnDeleteTask");

btnAddTask.addEventListener("click", () => {
  const taskText = inputTask.value.trim();
    if(taskText !== ""){
    const li = document.createElement("li");
    li.textContent = taskText;
    taskList.appendChild(li);
    inputTask.value = ""; // limpiar input
    document.getElementById("tasksAdded").style.visibility = 'visible';
  }
});

btnDeleteTask.addEventListener("click", () => {
   if(taskList){
    taskList.remove();
    document.getElementById("tasksAdded").style.visibility = 'hidden';
   } else {
    console.log('Element not found.');
   }
});
