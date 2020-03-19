import 'bootstrap';
import '../src/index.html'
import 'bootstrap/js/dist/util';
import 'bootstrap/js/dist/alert';

function myFunction() {
    document.getElementById("test_js").innerHTML = "Hello World";
}




function submitFunction() {
  var text = "you have submitted your feedback";

  document.getElementById("myForm").innerHTML(alert(text));
}

// function formsFunction() {
    // document.getElementById("myForm").submit(alert);
  // }


const myForm = document.getElementById('myForm')

  function submitFunction() {
    var text = "you have submitted you application";
  
    document.getElementById("myForm").innerHTML(alert(text));
  }