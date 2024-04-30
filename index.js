


// // constructor function




// // function HouseKeeper1(name, age, hasWorkPermit, languages, clean){
// //         this.name = name;
// //         this.age = age;
// //         this.hasworkPermit = hasWorkPermit;
// //         this.languages = languages;
// //         this.clean = function () {
// //             alert("Cleaning in progress")
// //         }
// //     }
    
    
// //     let housekeeper1 = new HouseKeeper1("Samantha", 39, true, ["Enlish", "German", "Spanish"]);
    
    
// //     let housekeeper2 = new HouseKeeper1("Michelle", 20, false, ["Enlish", "German", "Spanish"]);





// // Drum Kit
    
//     // Detecting Button press
    
    let numberOfButtons = document.querySelectorAll(".drum").length;
    
    for(i = 0; i < numberOfButtons; i++) {
        
        document.querySelectorAll(".drum")[i].addEventListener("click", function () {

            let buttonInnerHTML = this.innerHTML;
            
            makeSound(buttonInnerHTML);

            buttonAnimation(buttonInnerHTML);

           
        });
        
    }


//keyboard events

document.addEventListener("keydown", function (event) {

    makeSound(event.key);

    buttonAnimation(event.key);

});


function makeSound(key) {

    switch (key) {
        case "w":
            let tom1 = new Audio("sounds/tom-1.mp3")
            tom1.play();
            break;

        case "a": 
            let tom2 = new Audio("sounds/tom-2.mp3")
            tom2.play();
            break;

        case "s":  
            let tom3 = new Audio("sounds/tom-3.mp3")
            tom3.play(); 
            break; 

        case "d":  
            let tom4 = new Audio("sounds/tom-4.mp3")
            tom4.play();
            break;

        case "j": 
            let snare = new Audio("sounds/snare.mp3")
            snare.play();
            break;

        case "k":
            let crash = new Audio("sounds/crash.mp3")
            crash.play();  
            break;  

        case "l":   
            let kickBass = new Audio("sounds/kick-bass.mp3")
            kickBass.play();
            break;
    
        default:
            console.log(buttonInnerHTML)
        
    }

}

function buttonAnimation(currentKey) {

    let activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function removeClass() {
        activeButton.classList.remove("pressed")        
    }, 100);

    
}




