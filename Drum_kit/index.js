document.querySelector(".crash").addEventListener("click",function(){
    var audio = new Audio("crash.mp3");
    return audio.play();
});

document.querySelector(".kick").addEventListener("click",function(){
    var audio = new Audio("kick-bass.mp3");
    return audio.play();
});

document.querySelector(".tom1").addEventListener("click",function(){
    var audio = new Audio("tom-1.mp3");
    return audio.play();
});

document.querySelector(".tom2").addEventListener("click",function(){
    var audio = new Audio("tom-2.mp3");
    return audio.play();
});

document.querySelector(".tom3").addEventListener("click",function(){
    var audio = new Audio("tom-3.mp3");
    return audio.play();
});

document.querySelector(".tom4").addEventListener("click",function(){
    var audio = new Audio("tom-4.mp3");
    return audio.play();
});

document.querySelector(".snare").addEventListener("click",function(){
    var audio = new Audio("snare.mp3");
    return audio.play();
});

document.addEventListener("keydown",function(event){
    makeSound(event.key);
});
function makeSound(key){
   if (key == 'w')
   {var audio = new Audio("crash.mp3");
    return audio.play();
   };
   if (key=='a'){
    var audio = new Audio("kick-bass.mp3");
    return audio.play();
   };

   if (key=='s') {
    var audio = new Audio("tom-1.mp3");
    return audio.play();
};

  if (key=='d'){
    var audio = new Audio("tom-2.mp3");
    return audio.play();
};

   if (key=='j'){
    var audio = new Audio("tom-3.mp3");
    return audio.play();
};
    
 if(key=='k'){
    var audio = new Audio("tom-4.mp3");
    return audio.play();
};

 if(key=='l'){
    var audio = new Audio("snare.mp3");
    return audio.play();
};
};
