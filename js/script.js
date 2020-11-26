function init(){
var entry = document.getElementById('entryinput');
var button = document.getElementById('entrybutton');
var txoutput = document.getElementById('textoutput');
button.addEventListener('click', function(){
alert(' Megan Miranda: ' + entry);
txoutput.innerHTML = entry;
});
}
window.addEventListener('load', init);
