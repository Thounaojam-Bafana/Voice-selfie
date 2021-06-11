var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start(){
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function (event) {
    console.log(event);
    var Content = event.results [0] [0].transcript; 
    console.log(Content);
    if(Content == "take my selfie"){
        console.log("taking selfie");
        speak();
        
    }
    document.getElementById("textbox").innerHTML = Content;
}
function speak(){
    var synth = window.speechSynthesis;
    var speak_data = "taking your selfie in five seconds";
    var utter_this = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utter_this);
    Webcam.attach(camera);

    setTimeout(function()
    {
        TakeSnapshot();
        save();
    }, 5000);


}
Webcam.set({
    width: 360, 
    height: 250,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");
function TakeSnapshot(){
    Webcam.snap(function(data_uri)
    {
        document.getElementById("result").innerHTML= "<img id='selfie_img' src="+ data_uri +">";

    })
}

function save(){
    var link = document.getElementById("link");
    var image = document.getElementById("selfie_img").src;
    link.href = image;
    link.click();
}
