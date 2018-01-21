
const grid = document.getElementById("pixel_canvas");
const buttonSubmit = document.getElementById("submit_button");
const pickColor = document.getElementById("color_picker");
const clearTable = document.getElementById("clear_button");
let heightInput = document.getElementById("input_height");
let widthInput = document.getElementById("input_width");

//Build the grid event listener.
buttonSubmit.addEventListener("click", makeGrid);
//Function creating canvas grid with html table. 
function makeGrid(e){
  //Prevent form submit from reloading the page. 
  e.preventDefault();
  //Get the input value of height and width of the table. 
  let height = document.getElementById("input_height").value;
  let width = document.getElementById("input_width").value;

  //Prevent user from inputting value larger than 100.
  maxInputValue();
  //Change button value to "Reset" after clicking "Submit".
  buttonToggle();
  // If usser input value is less from or equal to 100, create table cells.
  if(height <= 100 && width <= 100){
    for(let i=0; i < height; i++){
      let row = document.createElement("tr");
      grid.appendChild(row);

      for(let j=0; j < width; j++){
        let cell = document.createElement("td");
        row.appendChild(cell);
        //Change cell color after clicking on it.
        cell.addEventListener("click", changeColor);
        //Remove color on double click.
        cell.addEventListener("dblclick", removeBackground);
        //Clears the table.
        clearTable.addEventListener("click", function(){
        cell.style.backgroundColor = null;
 
      });
    }
  }
}

function maxInputValue(){
  if(height > 100 || width > 100){
    heightInput.setAttribute("style", "background-color: #ff831c; border: none; opacity: 0.6; cursor: not-allowed;");
    widthInput.setAttribute("style", "background-color: #ff831c; border: none; opacity: 0.6; cursor: not-allowed;");
    
    alert("Please choose a value between 1 and 100")
  }
}
//Function to set cell color.
function changeColor(){
  this.style.backgroundColor = pickColor.value;
}
//Function to clear the table. 
function removeBackground(){
  this.style.backgroundColor = null;
}
//Function to change between "Submit" and "Reset" button. 
function buttonToggle(){
  if (buttonSubmit.value == "Submit"){
    buttonSubmit.value = "Reset";
    //Change style of the button.
    buttonSubmit.setAttribute("style", "background-color: #ff831c; border-color:#ff831c; color:#ffffff;");
    //Reset the grid.
    buttonSubmit.removeEventListener("click",makeGrid);
  }
  else{
    buttonSubmit.value = "Submit";
  }
}
}



