function setBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-[#1DD100]');
    element.classList.add('text-white');
}

// inner text ar jonno
function getTextElementValue(elementId){
    const element = document.getElementById(elementId);
    const elementText = element.innerText;
    const value = parseInt(elementText);
    return value;
}
// inner text set ar jonno
function setTextElementValue(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}

function getInputText(){
    
}