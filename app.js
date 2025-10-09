
const inputTask = document.getElementById("taskInput");
const btnAddTask = document.getElementById("bttnAddTask");
const taskList = document.getElementById("taskList");
const btnDeleteTask = document.getElementById("bttnDeleteTask");


//Event adding a task
btnAddTask.addEventListener("click", () => {
  const taskText = inputTask.value.trim();
    if(taskText !== ""){
    const li = document.createElement("li");
    //Agregamos clase para estilo
    li.classList.add("taskItem"); 
    // Crear el texto
    const span = document.createElement("span");
    span.textContent = taskText;
    //Agregar botón para eliminar tarea
    const newButtonDelteTask = document.createElement('button');
    newButtonDelteTask.textContent = "✖️";
    newButtonDelteTask.classList.add("deleteBtn");
    //Agregar botón para marcar la tarea como hecha
    const newButtonTaskCompleted = document.createElement('button');
    newButtonTaskCompleted.textContent = "✔️";
    newButtonTaskCompleted.classList.add("checkedBtn");
    // Agregar evento al botón de eliminar tarea
    newButtonDelteTask.addEventListener("click", () => {
    li.remove(); // elimina sólo esta tarea
  });


  // Agregar todo al li
  li.appendChild(span);
  li.appendChild(newButtonDelteTask);
  li.appendChild(newButtonTaskCompleted);

  // Agregar el li al ul
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
