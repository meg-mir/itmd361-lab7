function init(){
//add your javascript between these two lines of code
var entry = document.getElementById('entryinput');
var button = document.getElementById('entrybutton');
var txoutput = document.getElementById('textoutput');
button.addEventListener('click', function(){
alert(' Megan Miranda: ' + entry);
txoutput.innerHTML = entry;
});
}
window.addEventListener('load', init);
