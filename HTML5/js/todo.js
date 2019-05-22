var inputValueRef = document.getElementById("taskid");
var currentCounter = 0;

var addTask = function(){  
    if(inputValueRef.value == ""){
        alert("Task is not Empty");
        return false;
    }      
    if(isNaN(localStorage.getItem("counter"))){
        currentCounter = 0;  
    }
    else{
        currentCounter = localStorage.getItem("counter");
    } 
    localStorage.setItem("counter",currentCounter);
    localStorage.setItem("task_" + currentCounter, inputValueRef.value);
    localStorage.counter++;
    inputValueRef.value = "";
    loadAllValues();
    return true;
}

var deleteAllTask = function(){
    currentCounter = localStorage.getItem("counter"); 
    for(var i = 0; i<currentCounter; i++){        
        localStorage.removeItem("task_" + i);
        localStorage.counter--;
    }
    
    loadAllValues();
}
var deleteTask = function(count){     
    localStorage.removeItem("task_" + count);  
    localStorage.counter--;  
    loadAllValues();
}
var loadAllValues = function(){
    var containerRef = document.getElementById("taskcontainer");
    containerRef.innerHTML = "";
    var newol = document.createElement("ol");
    containerRef.appendChild(newol);
    var maxCounter = 0;
    if(isNaN(localStorage.getItem("counter"))){
        maxCounter = 0;  
    }
    else{
        maxCounter = localStorage.getItem("counter");
    }   
    maxCounter = localStorage.getItem("counter");
    for(var i = 0; i<maxCounter; i++){     
        var newli = document.createElement("li");
        var deleteButton = document.createElement("button");
        deleteButton.innerHTML = "Delete";
        newli.innerHTML = localStorage.getItem("task_" + i);
        //deleteButton.onclick =
        deleteButton.onclick = function () {
            deleteTask(i);
          }
        newol.appendChild(newli);
        newol.appendChild(deleteButton);
    }
}

var initializeValue = function(){
    loadAllValues();
}