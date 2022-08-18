
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
        
        //grab text from input
        let userTaskInput0 = document.querySelector("input[hour-index= '0']").value;
        console.log(userTaskInput0);
        let userTaskInput1 = document.querySelector("input[hour-index= '1']").value;
        console.log(userTaskInput1);
        let userTaskInput2 = document.querySelector("input[hour-index= '2']").value;
        console.log(userTaskInput2);
        let userTaskInput3 = document.querySelector("input[hour-index= '3']").value;
        console.log(userTaskInput3);
        let userTaskInput4 = document.querySelector("input[hour-index= '4']").value;
        console.log(userTaskInput4);
        let userTaskInput5 = document.querySelector("input[hour-index= '5']").value;
        console.log(userTaskInput5);
        let userTaskInput6 = document.querySelector("input[hour-index= '6']").value;
        console.log(userTaskInput6);
        let userTaskInput7 = document.querySelector("input[hour-index= '7']").value;
        console.log(userTaskInput7);
        let userTaskInput8 = document.querySelector("input[hour-index= '8']").value;
        console.log(userTaskInput8);
        let userTaskInput9 = document.querySelector("input[hour-index= '9']").value;
        console.log(userTaskInput9);
        let userTaskInput10 = document.querySelector("input[hour-index= '10']").value;
        console.log(userTaskInput10);
        let userTaskInput11 = document.querySelector("input[hour-index= '11']").value;
        console.log(userTaskInput11);
        let userTaskInput12 = document.querySelector("input[hour-index= '12']").value;
        console.log(userTaskInput12);
        localStorage.setItem('savedTask0', JSON.stringify(userTaskInput0));
        localStorage.setItem('savedTask1', JSON.stringify(userTaskInput1));
        localStorage.setItem('savedTask2', JSON.stringify(userTaskInput2));
        localStorage.setItem('savedTask3', JSON.stringify(userTaskInput3));
        localStorage.setItem('savedTask4', JSON.stringify(userTaskInput4));
        localStorage.setItem('savedTask5', JSON.stringify(userTaskInput5));
        localStorage.setItem('savedTask6', JSON.stringify(userTaskInput6));
        localStorage.setItem('savedTask7', JSON.stringify(userTaskInput7));
        localStorage.setItem('savedTask8', JSON.stringify(userTaskInput8));
        localStorage.setItem('savedTask9', JSON.stringify(userTaskInput9));
        localStorage.setItem('savedTask10', JSON.stringify(userTaskInput10));
        localStorage.setItem('savedTask11', JSON.stringify(userTaskInput11));
        localStorage.setItem('savedTask12', JSON.stringify(userTaskInput12));


        
        // for (var i = 0; i < taskArr.length; i++) {
        //     if (taskArr[i] === null){
        //         //check local storage 
        //         //populate text field with that data
        //         //if no data there, return
        //     }
        //     //if the input does not match the data stored in array
        //    else if (userTask !== taskArr[i]){
        //     //replace the data in array to match user input
        //         taskArr[i] = userTask;


        //     }
        // };
        
        // taskArr.push(userTask);
        // $('.dailyplan').each(function(){

        //     taskArr[this.id] = userTask.value;
            
        
        // })
        // localStorage.setItem('savedTask', JSON.stringify(taskArr));
        // console.log(localStorage.getItem('savedTask'));

    }

    //     taskBoxs = {};
    //     $('.taskBox').each(function(){
    //         taskBoxs[userTask.id] = this.value;
    // })
    //             //Save tasks to local Storage
    //             localStorage.setItem('savedTask', JSON.stringify(taskBoxs));
    //             console.log(localStorage.getItem('savedTask'));
    //             console.log(JSON.parse(localStorage.getItem('savedTask')));
    //  }
    //      let saveBtnEl = document.querySelector('#saveBoxBtn');
    
    //         saveBtnEl.addEventListener("click", taskSave);

    //target button

    let saveBtnEl = document.getElementById('saveBoxBtn');

    saveBtnEl.onclick = taskSave;
        
       



        



});


