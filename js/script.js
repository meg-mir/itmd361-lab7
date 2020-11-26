function init(){
var button = document.getElementById('entrybutton');
var txoutput = document.getElementById('textoutput');
  button.addEventListener('click', function(){
    var entry = document.getElementById('entryinput').value;
    alert(' Megan Miranda: ' + entry);
    txoutput.innerHTML = entry;
  });
}
window.addEventListener('load', init);
