//Counter Code
var button = document.getElementById('counter');
var counter = 0;
button.onclick = function() {
  
  //Make a request to the counter endoint
  
  //Capture the response and store it in a varible
  
  //Render the variable in the correct span
  counter = counter + 1;
  var span = document.getelementById('count');
  span.innerHTML = counter.toString();
};