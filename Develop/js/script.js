
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
$("#saveBtn").text("Save");
$saveBtn.addClass('saveBtn flex');

$saveBtn.attr('class', 'saveBoxBtn');   
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
        
        //grab text from input
        let userTaskInput0 = document.querySelector("input[hour-index= '0']").value;
        
        let userTaskInput1 = document.querySelector("input[hour-index= '1']").value;
        
        let userTaskInput2 = document.querySelector("input[hour-index= '2']").value;
        
        let userTaskInput3 = document.querySelector("input[hour-index= '3']").value;
        
        let userTaskInput4 = document.querySelector("input[hour-index= '4']").value;
        
        let userTaskInput5 = document.querySelector("input[hour-index= '5']").value;
        
        let userTaskInput6 = document.querySelector("input[hour-index= '6']").value;
        
        let userTaskInput7 = document.querySelector("input[hour-index= '7']").value;
        
        let userTaskInput8 = document.querySelector("input[hour-index= '8']").value;
        
        let userTaskInput9 = document.querySelector("input[hour-index= '9']").value;
        
        let userTaskInput10 = document.querySelector("input[hour-index= '10']").value;
        
        let userTaskInput11 = document.querySelector("input[hour-index= '11']").value;
        
        let userTaskInput12 = document.querySelector("input[hour-index= '12']").value;
        //store text in local storage with a key
        localStorage.setItem('savedTask0', (userTaskInput0));
        localStorage.setItem('savedTask1', (userTaskInput1));
        localStorage.setItem('savedTask2', (userTaskInput2));
        localStorage.setItem('savedTask3', (userTaskInput3));
        localStorage.setItem('savedTask4', (userTaskInput4));
        localStorage.setItem('savedTask5', (userTaskInput5));
        localStorage.setItem('savedTask6', (userTaskInput6));
        localStorage.setItem('savedTask7', (userTaskInput7));
        localStorage.setItem('savedTask8', (userTaskInput8));
        localStorage.setItem('savedTask9', (userTaskInput9));
        localStorage.setItem('savedTask10', (userTaskInput10));
        localStorage.setItem('savedTask11', (userTaskInput11));
        localStorage.setItem('savedTask12', (userTaskInput12));

        console.log(localStorage.getItem('savedTask0'));


    }

    function restoreTasks(){
        //get out of storage
        $("input[hour-index= '0']").val(localStorage.getItem('savedTask0'));
        $("input[hour-index= '1']").val(localStorage.getItem('savedTask1'));
        $("input[hour-index= '2']").val(localStorage.getItem('savedTask2'));
        $("input[hour-index= '3']").val(localStorage.getItem('savedTask3'));
        $("input[hour-index= '4']").val(localStorage.getItem('savedTask4'));
        $("input[hour-index= '5']").val(localStorage.getItem('savedTask5'));
        $("input[hour-index= '6']").val(localStorage.getItem('savedTask6'));
        $("input[hour-index= '7']").val(localStorage.getItem('savedTask7'));
        $("input[hour-index= '8']").val(localStorage.getItem('savedTask8'));
        $("input[hour-index= '9']").val(localStorage.getItem('savedTask9'));
        $("input[hour-index= '10']").val(localStorage.getItem('savedTask10'));
        $("input[hour-index= '11']").val(localStorage.getItem('savedTask11'));
        $("input[hour-index= '12']").val(localStorage.getItem('savedTask12'));
        
    }
    restoreTasks();

    //target button

    let saveBtnEl = document.getElementById('saveBoxBtn');

    $('.saveBoxBtn').on('click', taskSave);
        
       



        



});


