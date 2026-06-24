// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads.
$(document).ready(function () {
  render($("#display"), image);
  $("#apply").on("click", applyAndRender);
  $("#reset").on("click", resetAndRender);
});

/////////////////////////////////////////////////////////
//////// event handler functions are below here /////////
/////////////////////////////////////////////////////////

// this function resets the image to its original value; do not change this function
function resetAndRender() {
  reset();
  render($("#display"), image);
}

// this function applies the filters to the image and is where you should call
// all of your apply functions
function applyAndRender() {
  // Multiple TODOs: Call your apply function(s) here
  applyFilter(decreaseBlue);
  applyFilterNoBackground(increaseGreenByBlue);
  applyFilter(decreaseBlue);
  applyFilterNoBackground(reddify);  

  // do not change the below line of code
  render($("#display"), image);
}

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2, 3 & 5: Create the applyFilter function here
function applyFilter(filterFunction){
  for (var r = 0; r < image.length; r++){
    for (var c = 0; c < image[r].length; c++){
      //console.log(updatedPixel);
      // check2seeifworks console.log(image[r][c]);
      var pixel = image[r][c];
      var pixelArray = rgbStringToArray(pixel);
      //this is where i'll modify the color values later
      filterFunction(pixelArray);
      var updatedPixel = rgbArrayToString(pixelArray);
      image[r][c] = updatedPixel;
    }
  }
  /*
  console.log("pixel:", pixel);
console.log("pixelArray:", pixelArray);
console.log("updatedPixel:", updatedPixel);
  */
}



// TODO 9 Create the applyFilterNoBackground function
function applyFilterNoBackground(filterFunction){
  // grabs color from top left pixel
  var backgroundColor = image[0][0];
  // iterates thru the image pixel by pixel
  for (var r = 0; r < image.length; r++){
    for (var c = 0; c < image[r].length; c++){
      // checks if the color is different from background
      if (image[r][c] !== backgroundColor){
        var pixel = image[r][c];
        var pixelArray = rgbStringToArray(pixel);
      //this is where i'll modify the color values later
        filterFunction(pixelArray);
       var updatedPixel = rgbArrayToString(pixelArray);
       image[r][c] = updatedPixel; // update pixel
      }
    }
  }
}

// TODO 6: Create the keepInBounds function
function keepInBounds(num){
  // help return num > 255 ? 255 : num || num < 0 ? 0 : num;
  
  if (num < 0){
    return 0;
  }
  else if (num > 255){
    return 255;
  }
  else {
    return num;
  }
}

/* console.log(keepInBounds(-20)); // should print 0
console.log(keepInBounds(300)); // should print 255
console.log(keepInBounds(125)); // should print 125
*/

// TODO 4: Create reddify filter function
function reddify(pixelArray){
  pixelArray[RED] = 200;
}

/* var testArray = [100, 100, 100];
reddify(testArray);
console.log(testArray); // Should show [200, 100, 100]
*/

// TODO 7 & 8: Create more filter functions
function decreaseBlue(pixelArray){
  pixelArray[BLUE] = pixelArray[BLUE] - 50;
  keepInBounds(pixelArray[BLUE]);
}

function increaseGreenByBlue(pixelArray){
  pixelArray[GREEN] = pixelArray[GREEN] + pixelArray[BLUE];
  keepInBounds(pixelArray[GREEN]);

}
// CHALLENGE code goes below here
