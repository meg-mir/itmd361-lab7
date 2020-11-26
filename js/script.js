function init(){
  var x = document.getElementById("entrybutton"); 
  x.addEventListener('click', function(){
    alert("Megan Miranda: "+ document.getElementById("entryinput").value)
    document.getElementById("textoutput").innerHTML = document.getElementById("entryinput").value;
  });
} 
  window.addEventListener('load', init);
