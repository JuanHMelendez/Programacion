

// Función para agregar una nueva tarea
function addTask() {
  var taskInput = document.getElementById("taskInput");   //  captura el input  el elemento  
  var taskList = document.getElementById("taskList");    //captura el id de ul
  
  if (taskInput.value !== "") {
    var task = document.createElement("li");
    task.innerHTML = '<input type="checkbox" onchange="toggleTask(this)">' + taskInput.value +
                     '<button class="boton-eli" onclick="deleteTask(this)">Eliminar</button>';
    taskList.appendChild(task);
    
    taskInput.value = "";
  }
}

// Función para marcar o desmarcar una tarea como completada
function toggleTask(checkbox) {
  var task = checkbox.parentNode;
  
  if (checkbox.checked) {                 //checked  es el booleano  de checkbox
    task.classList.add("completed");
  } else {
    task.classList.remove("completed");
  }
}

// Función para eliminar una tarea
function deleteTask(button) {
  var task = button.parentNode;
  var taskList = task.parentNode;
  taskList.removeChild(task);
}
