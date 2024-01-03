// THESE FUNCTIONS ENABLE GLOW LOOK WHEN ASSIGNED DIV IS CLICKED ON
function showGlow(){
    document.getElementById("loop1").classList.toggle("loopPad");
    console.log("click worked");
}

function showGlow2(){
    document.getElementById("loop2").classList.toggle("loopPad");
    console.log("click worked");
}

function showGlow3(){
    document.getElementById("loop3").classList.toggle("loopPad");
    console.log("click worked");
}

function showGlow4(){
    document.getElementById("loop4").classList.toggle("loopPad");
    console.log("click worked");
}

function showGlow5(){
    document.getElementById("loop5").classList.toggle("loopPad");
    console.log("click worked");
}

function showGlow6(){
    document.getElementById("loop6").classList.toggle("loopPad");
    console.log("click worked");
}

window.addEventListener('load', () =>{
    const sounds = document.querySelectorAll(".sound");
    const sounds2 = document.querySelectorAll(".sound2");
    const pads = document.querySelectorAll(".pads div");
    const pads2 = document.querySelectorAll(".pads2 div");
    const visual = document.querySelector('.visual');
   
    const colors = [
        
        "#d60c93",
        "#f89705",
        "#d3d160",
        "#0dda17",
        "#51c8f7",
        "#8b26e9",
        "#d60c93",
        "#f89705",
        "#d3d160",
        "#0dda17",
        "#51c8f7",
        "#8b26e9",
        "#d60c93",
        "#f89705",
        "#d3d160",
        "#0dda17",
        "#51c8f7",
        "#8b26e9",
        "#d60c93",
        "#f89705",
        "#d3d160",
        "#0dda17",
        "#51c8f7",
        "#8b26e9",
       
    ];

    const colors2 = [
        
        "#fa0303",
        "#f8f8f8",
        "#00ffd5",
        "#fa0303",
        "#f8f8f8",
        "#00ffd5"      
        
    ];

//The sound clips we want to play once
    pads.forEach((pad, index) =>{

        pad.addEventListener('click', function(){
                             
            sounds[index].currentTime = 0;
            sounds[index].play();

            accentColor1(index);
        })   
    });

//The Pad groups we want to loop and pause when we click them
    pads2.forEach((pad2, index) =>{            
                pad2.addEventListener('click', function(){

// MORE INFO ON THESE TYPES OF ATTRIBUTES: https://www.w3schools.com/tags/ref_av_dom.asp                     
                    return sounds2[index].paused ? sounds2[index].play() : sounds2[index].load();
                                           
               })           
            });

//ALLOWS COLOR CHANGE OF LOOPS IN THE PADS2 GROUP
            pads2.forEach((pad2, index) =>{
                        pad2.addEventListener('click', function(){
                               
                            accentColor2(index); 
                                                
                       })                   
                    });            

//Create function that changes background color
const accentColor1 = (index) => {
    const backColor1 = document.body.style.backgroundColor = colors[index];
    
    backColor1.addEventListener('animationend', function(){
        visual.removeChild(this);
    })
}

const accentColor2 = (index) => {
    const backColor2 = document.body.style.backgroundColor = colors2[index];
        
    backColor2.addEventListener('animationend', function(){
        visual.removeChild(this);
    })
}

});