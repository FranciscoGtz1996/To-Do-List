
const inputTask = document.getElementById("taskInput");
const btnAddTask = document.getElementById("bttnAddTask");
const taskList = document.getElementById("taskList");
const btnDeleteTask = document.getElementById("bttnDeleteTask");
const bttnDeleteOneTask = document.getElementById("bttnDeleteOneTask");

//Event adding a task
btnAddTask.addEventListener("click", () => {
  const taskText = inputTask.value.trim();
    if(taskText !== ""){
    const li = document.createElement("li");
    li.textContent = taskText;
    taskList.appendChild(li);
    const newButton = document.createElement('button');
    newButton.textContent = "❌";
    newButton.classList.add("deleteBtn");
      // Agregar evento al botón de eliminar
  newButton.addEventListener("click", () => {
    li.remove(); // elimina sólo esta tarea
  });

  // Agregar el botón dentro del li
  li.appendChild(newButton);

  // Agregar el li a la lista
  taskList.appendChild(li);
    inputTask.value = ""; // limpiar input
    document.getElementById("tasksAdded").style.visibility = 'visible';
  }
});

//Event deleting all tasks
btnDeleteTask.addEventListener("click", () => {
   if(taskList){
    taskList.remove();
    document.getElementById("tasksAdded").style.visibility = 'hidden';
   } else {
    alert('Element not found.');
   }
});
