function firstFunction() {
    alert("Your application was submitted");
}
function secondFunction() {
    alert("Your message was correctly sent!");
}
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}