function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/If8zK7sqI/model.json",modelloaded);

}
function modelloaded(){
    console.log("modelloaded");
}
function draw(){
    image(video,0,0,300,300);
    classifier.classify(video,gotResult);
}
function gotResult(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("result_object_name").innerHTML="Object: "+results[0].label;
        document.getElementById("result_accuracy_name").innerHTML="Accuracy: "+results[0].confidence.toFixed(2);
    }

}