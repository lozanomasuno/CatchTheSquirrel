
let divArray = document.querySelectorAll('div');
let arrSqareSlide = []
let selectedSqare = 0;
let partOfArray = 0;

function randomSelectSqare(){   
    selectedSqare =  getRandomInt(1, 10);
}
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
}

function makeArraySqareSlide(){
    divArray.forEach((partOfArray)=>{
        arrSqareSlide.push(partOfArray)
    });     
}
function paintEverySecond(){
    makeArraySqareSlide();
    arrSqareSlide[selectedSqare].classList.add('redSelection');     
}

function clearRedBackground(){
    arrSqareSlide = []; 
    makeArraySqareSlide();
  
    for(let i = 1; i < arrSqareSlide.length; i++){
     if(arrSqareSlide[i].classList.contains('redSelection')){
        arrSqareSlide[i].classList.remove('redSelection');
     }
    }
    
}
setInterval(function(){ 
  arrSqareSlide = [];    
  paintTheArrayRed();  
},1000);

setInterval(function(){ 
    arrSqareSlide = [];    
    clearRedBackground();  
  },2000);


function paintTheArrayRed(){ 
    randomSelectSqare();      
    paintEverySecond();
 }

