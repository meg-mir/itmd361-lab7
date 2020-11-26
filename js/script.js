function init() {
//add your javascrip between these two lines of code
  document.getElementById("entrybutton").addEventListener("click", f1);
  function f1() {
    var button = document.getElementById("entrybutton");
    var entry = document.getElementById("entryinput").value;
      alert(" Megan Miranda: " + entry);
      document.getElementById("textoutput").innerhtml = entry;
  }
window.addEventListener('load', init);
}
