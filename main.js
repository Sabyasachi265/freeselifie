var SpeechRecognition = window.webkitSpeechRecognition;

var recogination = new SpeechRecognition();

function start(){
    document.getElementById("textbox").innerHTML = "";
    recogination.start();
}

recogination.onresult = function(event){
    console.log(event);
    var content = event.results[0][0].transcript;
    console.log(content);
    if(content == "take my selfie"){
        console.log("Taking Selfie");
        speak();
    }
}

function speak(){
    var speak_to_text = window.speechSynthesis;
    speak_data = "Taking Your Selfie In 5 Seconds";
    var UtterThis = new SpeechSynthesisUtterance(speak_data);
    speak_to_text.speak(UtterThis);
    Webcam.attach(cam);
    setTimeout(function(){
        take_snapshot();
        save();
    }, 5000);
}

Webcam.set({
    width : 360,
    height : 250,
    image_format : 'png',
    png_quality : 90
});

var cam = document.getElementById("camera");

function take_snapshot(){
    Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML = '<img id="Selfie_image" src="'+data_uri+'">';
    });
}

function save(){
    link = document.getElementById("link");
    img = document.getElementById("Selfie_image").src;
    link.href=img;
    link.click();
}