
//when page loads start 

$(document).ready(function() {



    //Array for all the task
    taskArr = new Array(13);
//loop will run untill 19th hour reached
     for (let hour = 7; hour <= 19; hour++ ){
             //index for array offset by hour
         let index = hour-7;
//adds rows to plannerContainer
        let $newRow = $('<div>');
         $newRow.addClass('row');
         $newRow.addClass('flex');
         //giving each row created its own hour
         $newRow.attr('hour-index', hour);
         //display created row on page
         $("#plannerContainer").append($newRow);
     

//Start task time space    
//create div where time can be put
         let $timeDiv = $('<div>');
         $timeDiv.addClass('time-block');
         $newRow.append($timeDiv);
//create timeBox
    const $timeBoxtxt = $('<span>');
        $timeBoxtxt.attr('class','timeBox');
        $timeBoxtxt.attr('id','timeBoxSpan');
        $timeBoxtxt.addClass('timeBox');
        $newRow.append($timeBoxtxt);
//Display the time
        $timeBoxtxt.text(`${hour}`);

//End Task Time space
//input task Tow space
let $taskSpan = $('<input>');

$taskSpan.attr('id',`input-${index}`);
$taskSpan.attr('hour-index',index);
$taskSpan.attr('type','text');
  $taskSpan.attr('class','dailyPlan');

  //access index from data array for hour
  $taskSpan.val(taskArr[index]);

 
    // create col to control width
    let $taskWidth = $('<div>');
    $taskWidth.addClass('taskBox');

    // add col width and row component to row
    $newRow.append($taskWidth);
    $taskWidth.append($taskSpan);

//End Task Row Space

//Start save button portion
//Create space
let $saveBox = $('<div>');
$saveBox.addClass('saveBox');

let $saveBtn = $('<button>');
$saveBtn.textContent = "Save";
$saveBtn.addClass('saveBtn');

$saveBtn.attr('id', 'saveBoxBtn');   
    $newRow.append($saveBox);
    $saveBox.append($saveBtn);

    
        
       

    let saveBtnEl = document.querySelector("#saveBoxBtn");
    
    saveBtnEl.addEventListener("click", function(){console.log("touchdown");

        
        //Save tasks to local Storage
        localStorage.setItem("tasks", JSON.stringify(taskArr));


});

     }

     //button takes userInput
     
});

