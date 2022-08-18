
//when page loads start 

$(document).ready(function() {



    //Array for all the task
    taskArr = new Array(12);
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
         debugger
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
$saveBtn.attr('id', 'saveBoxBtn');   
    $newRow.append($saveBox);
    $saveBox.append($saveBtn);

       
        
       

    let saveBtnEl = document.querySelector("#saveBoxBtn");
    
    saveBtnEl.addEventListener("click", function(){console.log("touchdown");});
     }

     
});


    //Check localStorage for stored values
    //If stored values exist populate page with values
    //If no stored values exist create intial layout
    //create row for values

//     //Array with objs for each time and value of user txt input
//     const test = false;
// let taskArray =[];
// //variables
// //reference for planner element
// let $plannerRow = $('#plannerContainer');
// //get times f=using moment
// const now = moment().format('MMMM Do YYYY');
// let nowHour24 = moment().format('H');

// //Get stored tasks from localStorage
// let storedTask = JSON.parse(localStorage.getItem("storedTask"));
// //Update the planner with locally stored tasks
// if (storedTask !==null){
//     taskArray = storedTask;
// }else{
//     taskArray = new Array(18);
// }

// // loop to create task rows for preset number of hours
// for (let hour = 7; hour <= 19; hour++ ){
//     //index for array offset by hour
//     let index = hour-7;

//     //build rows
//     let $newRow = $('<div>');
//     $newRow.addClass('row');
//     $newRow.attr('hour-index', hour);

//     //time box build for row
//     let $rowTimeDiv = $('<div>');
//     $rowTimeDiv.addClass('time-block');

//     // create timebox
//     const $timeBox = $('<span>');
//     //grab value in timebox
//     $timeBox.attr('class','hour');

//     //hours for display
//     let displayHour = 0;

//     //populate timebox with time
//     $timeBox.text('${displayHour}');

//     //put rowTimeDiv into the timebox
//     $newRow.append($rowTimeDiv);
//     $rowTimeDiv.append($timeBox);



// }




// //functions

// function logTask(event){
//     //Get the text value of input
//     let textValue = $(this).siblings('.taskTxtArea').val();
//     //Get the time of the block 
//     let timeValue = $(this).siblings('.time').attr('data-time');
// //everytime log task ran, log time and task
// //Create new obj to hold data
// //add +1 to length of array everytime logged
// //add obj to array
// //prevent or erase duplicate objs in array
// //scan array 
// //store obj values to local storage
// //pull values from local storage when page pops up


//     //     function taskValue(timeValue,textValue){
//     //         this.timeValue= timeValue;
//     //         this.textValue = textValue;
//     //         const newTask = new Object();{console.log("Ran thru")};
            
        
//     // const task1 = new taskValue('timeValue', 'textValue');

//     // save task time and text to local storage
//     localStorage.setItem('test', taskValue);
   
//     //add to data to Array
//     timeArray.push(taskValue);
//     console.log(taskValue);
//     }
    

    



// //color the row based on the hour
// // function rowColor() {
// //     taskArray.forEach(element => {
        
// //     });
// // }
// //events
//     //Save button event
// $(document).on('click','i', function(event){
//     event.preventDefault();

//     if (test) { console.log('click pta before '+ timeArray); }

//     let $index = $(this).attr('save-id');

//     let inputId = '#input-'+$index;
//     let $value = $(inputId).val();

//     timeArray[$index] = $value;


//     if (test) { console.log('value ', $value); }
//     if (test) { console.log('index ', $index); }
//     if (test) { console.log('click pta after '+ planTextArr); }


// });
// //runs on page load
// // populate textarea with localstorage
// // loop through rows and add a class (gray, red, green)
// });
