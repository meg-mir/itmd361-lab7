function init() {
//add your javascrip between these two lines of code
  document.getElementById("entrybutton").addEventListener("click", f1);
  function f1() {
    var hObj =  document.querySelectorAll("h2.center");
    var button = document.getElementById('entrybutton');
    var txoutput = document.getElementById('textoutput');
    var entry = document.getElementById('entryinput').value;
      alert(' Megan Miranda: ' + entry);
      txoutput.innerHTML = entry;
  }
window.addEventListener('load', init);
}
