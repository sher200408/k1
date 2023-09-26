let inp = document.querySelector("#inp1");
let inpThe = document.querySelector("#inp2");
let jox = document.querySelector("#javobi1");

function theBest() {
    jox.innerHTML = parseInt(inp.value)+parseInt(inpThe.value)
}
function  BestFox() {
    jox.innerHTML = parseInt(inp.value)-parseInt(inpThe.value)
}
function doxClick() {
    jox.innerHTML = parseInt(inp.value) / parseInt (inpThe.value)
}
function foxClick() {
    jox.innerHTML = (inp.value)*(inpThe.value)

}