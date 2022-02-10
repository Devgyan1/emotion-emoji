prediction_1=""
prediction_2=""
 
Webcam.set({
    width:350,
    height:300,
    image_format= 'png',
    png_quality:90
})

camera=document.getElementById("camera");

Webcam.attach('#camera');

function takeSnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
    });
}

console.log("ml5 version:", ml5.version);

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/sKDmRRV6n/model.json",modelLoaded);

function modelLoaded() {
    console.log('Model Loaded!');
}

function speak(){
    synth = window.speechSynthiesis;
    speak_data_1= "The first prediction is " + prediction_1;
    speak_data_2= "The second prediction is " + prediction_2;
utterThis= new SpeechSyntheisisUtterance1(speak_data_1+speak_data_2);
synth.speak(utterThis);
}

function check(){
    img= document.getElementById('result');
    classifier.classify(img, gotResult);
}

function gotResult(){
    if (error) {
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById('result_emotion_name').innerHTML = results[0].label;
        document.getElementById('result_emotion_name2').innerHTML = results[1].label;
        pediction_1= results[0].label;
        pediction_2= results[1].label;
        speak();
        if (result[0].label == "Happy"){
            document.getElementById("update_emoji").innerHTML ="&#128522;";
        }
        if (result[0].label == "Crying"){
            document.getElementById("update_emoji").innerHTML ="&#128546;";
        }
        if (result[0].label == "Angry"){
            document.getElementById("update_emoji").innerHTML ="&#128545;";
        } 
        if (result[0].label == "Energetic"){
            document.getElementById("update_emoji").innerHTML ="🙃";
        } 

        if (result[1].label == "Happy"){
            document.getElementById("update_emoji").innerHTML ="&#128522;";
        }
        if (result[1].label == "Crying"){
            document.getElementById("update_emoji").innerHTML ="&#128546;";
        }
        if (result[1].label == "Angry"){
            document.getElementById("update_emoji").innerHTML ="&#128545;";
        } 
        if (result[1].label == "Energetic"){
            document.getElementById("update_emoji").innerHTML ="🙃";
        } 
    }
}