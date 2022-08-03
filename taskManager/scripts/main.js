var starIcon = "fa-solid fa-star";
var ExclamationIcon = "fa-solid fa-circle-exclamation";
var isImportant = false;

function toggleImportant() {
  console.log("Task Manager Page");

 // $("#iImportant").removeClass(starIcon);
 // $("#iImportant").addClass(ExclamationIcon);

  if (!isImportant) {
    //change to important
    $("#iImportant").removeClass(starIcon).addClass(ExclamationIcon); // add and remove icon classes
    isImportant = true;
  }
   else {
    //change to non important
    $("#iImportant").removeClass(ExclamationIcon).addClass(starIcon); // add and remove icon classes
    isImportant = false;
  }
}

function saveTask() {
  console.log("Saving Task!");

  let title = $("#txtTitle").val();
  let description = $("#txtDescription").val();
  let DueDate = $("#selDueDate").val();
  let color = $("#selColor").val();
  let emoji = $("#selEmoji").val();
  let location = $("#txtLocation").val();
  let status = $("#selStatus").val();
  let notifications = $("#chkNotification").prop("checked");

  let task = new Task(
    isImportant,
    title,
    DueDate,
    description,
    color,
    emoji,
    location,
    status,
    notifications
  );
// send the task to server
$.ajax({
  type: "POST",
  url: "https://fsdiapi.azurewebsites.net/api/tasks/",
  data: JSON. stringify(task),
  contentType:"application/json",

  success: function(res) {
    console.log("Server says", res);
  },
  error: function(errorDetails) {
    console.log("Error saving tasks", errorDetails);
  }
})





  displayTask(task);
}
function displayTask(task) {
  let syntax =`<div class="task">
  <i class="fa-regular fa-star"></i>
  
  
  <div class="info">
  <h5>${task.title}</h5>
  <p>${task.description}</p>
  </div>

  <label class="location">${task.location}</label>
  <label class="date">${task.dueDate}</label>
  <label class="status">${task.status}</label>
  </div>`;
  
  $("#pendingTasks").append(syntax);
}
 function testRequest(){
  $.ajax({
    type:"GET",
    url:"https://fsdiapi.azurewebsites.net/",
    success: function(res) {
      console.log(1);
      console.log("server say", res)

    },
    error: function (errorDetails) {
      console.log("Error", errorDetails);
    }

  })
  console.log("3");
 }

 function fetchTasks() {
    //GET https://fsdiapi.azurewebsites.net/api/tasks/
    //console.log the response from the server
  $.ajax({
    type:"GET",
    url:"https://fsdiapi.azurewebsites.net/api/tasks",
    success: function(res) {
      let tasks = JSON.parse(res); // array of tasks objects
      // for loop over the array
      // get each item inside the array and send if to display
      for(let i=0; i=0; i< tasks.length; i++){
        let task = tasks[i];
        displayTask(task);
      }
    },
    error: function(details) {
      console.log("Error retrieving tasks", details);
    }

  });

}



function init() {
  console.log('Task Manager Page!');

  //assigns events
  $("#iImportant").click(toggleImportant);
  $("#btnSave").click(saveTask);

  //load initial data
  fetchTasks();
}

window.onload = init;
