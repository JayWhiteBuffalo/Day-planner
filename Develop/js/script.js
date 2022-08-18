
//when page loads start 

$(document).ready(function() {
let toDay = moment().format('dddd');    
$("#currentDay").text(toDay);

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
    $taskWidth.addClass('taskBox flex');

    // add col width and row component to row
    $newRow.append($taskWidth);
    $taskWidth.append($taskSpan);

//End Task Row Space

//Start save button portion
//Create space
let $saveBox = $('<div>');
$saveBox.addClass('saveBox flex',);

let $saveBtn = $('<button>');
$saveBtn.textContent = "Save";
$saveBtn.addClass('saveBtn flex');

$saveBtn.attr('id', 'saveBoxBtn');   
    $newRow.append($saveBox);
    $saveBox.append($saveBtn);

     }

  
     
//row colors
     function updateRows(){
       //run function for each element with the class of row
        $('.row').each(function(){
            //current time
            let currentTime = moment().hours();
            //locate hour-index attribute
            let rowHour = $(this).attr('hour-index');
            //change color or row depending on the time row and current time
            if (rowHour == currentTime){
                $(this).addClass('present');
            }
            else if (rowHour < currentTime){
                $(this).addClass('past');
            }
            else{
                $(this).addClass('future');

                };
     })
//end row colors
     }
     updateRows();

    //save function

    
    function taskSave(){
        taskBoxs = {};
        $('.taskBox').each(function(){
            taskBoxs[userTask.id] = this.value;
    })
                //Save tasks to local Storage
                localStorage.setItem('savedTask', JSON.stringify(taskBoxs));
                console.log(localStorage.getItem('savedTask'));
                console.log(JSON.parse(localStorage.getItem('savedTask')));
     }
         let saveBtnEl = document.querySelector('#saveBoxBtn');
    
            saveBtnEl.addEventListener("click", taskSave);
    
        
       



        



});


