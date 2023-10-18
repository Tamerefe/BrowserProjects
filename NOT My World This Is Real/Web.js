// Celladına aşık olmuşsa bir millet
// İster ezan ister çan dinlet 
// İtiraz etmiyorsa sürü gibi illet 
// Müstehaktır ona her türlü zillet


function block(element) {
    element.previousElementSibling.style.display = "block";
}

function none(element) {
  element.previousElementSibling.style.display = "none";
}

var modal = document.getElementById("myModal");

document.getElementById("usa").onclick = function (){

  modal.style.display = "block";

  document.getElementById("countryName").innerHTML = "History Of " + document.getElementById("usa").children[0].children[0].innerHTML;

  document.getElementById("iframechange").src = "https://en.wikipedia.org/wiki/United_States";

}

document.getElementById("brazil").onclick = function (){

  modal.style.display = "block";

  document.getElementById("countryName").innerHTML = "History Of " + document.getElementById("brazil").children[0].children[0].innerHTML;

  document.getElementById("iframechange").src = "https://en.wikipedia.org/wiki/Brazil";

}

document.getElementById("italy").onclick = function (){

  modal.style.display = "block";

  document.getElementById("countryName").innerHTML = "History Of " + document.getElementById("italy").children[0].children[0].innerHTML;

  document.getElementById("iframechange").src = "https://en.wikipedia.org/wiki/Italy";

}

document.getElementById("turkey").onclick = function (){

  modal.style.display = "block";

  document.getElementById("countryName").innerHTML = "History Of " + document.getElementById("turkey").children[0].children[0].innerHTML;

  document.getElementById("iframechange").src = "https://en.wikipedia.org/wiki/Turkey";

}

document.getElementById("egypt").onclick = function (){

  modal.style.display = "block";

  document.getElementById("countryName").innerHTML = "History Of " + document.getElementById("egypt").children[0].children[0].innerHTML;

  document.getElementById("iframechange").src = "https://en.wikipedia.org/wiki/Egypt";

}

document.getElementById("turafricakey").onclick = function (){

  modal.style.display = "block";

  document.getElementById("countryName").innerHTML = "History Of " + document.getElementById("turafricakey").children[0].children[0].innerHTML;

  document.getElementById("iframechange").src = "https://en.wikipedia.org/wiki/Union_of_South_Africa";

}

document.getElementById("china").onclick = function (){

  modal.style.display = "block";

  document.getElementById("countryName").innerHTML = "History Of " + document.getElementById("china").children[0].children[0].innerHTML;

  document.getElementById("iframechange").src = "https://en.wikipedia.org/wiki/China";

}

document.getElementById("russia").onclick = function (){

  modal.style.display = "block";

  document.getElementById("countryName").innerHTML = "History Of " + document.getElementById("russia").children[0].children[0].innerHTML;

  document.getElementById("iframechange").src = "https://en.wikipedia.org/wiki/Russia";

}

document.getElementById("australia").onclick = function (){

  modal.style.display = "block";

  document.getElementById("countryName").innerHTML = "History Of " + document.getElementById("australia").children[0].children[0].innerHTML;

  document.getElementById("iframechange").src = "https://en.wikipedia.org/wiki/Australia";
  
}


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// // When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
