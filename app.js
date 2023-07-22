 const buttonsEl = document.querySelectorAll('button');
 const inputEl = document.getElementById('natija');

 for(let i=0; i<buttonsEl.length; i++){
    buttonsEl[i].addEventListener("click", ()=>{
        const buttonPressed = buttonsEl[i].textContent;
        if(buttonPressed === "C"){
            natijaToza()
        }else if(buttonPressed === "="){
            natija()
        }else{
            hisob(buttonPressed)
        }
    })
 }
function natijaToza(){
    inputEl.value = "";
}
function natija(){
    inputEl.value = eval(inputEl.value)
}
function hisob(buttonPressed){
    inputEl.value += buttonPressed;
}