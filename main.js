function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true})
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/_83g_Z-N1U/model.json",modelReady)
   
}

function modelReady(){
    classifier.classify(gotResults)
}

function gotResult(error,result){
    console.log("Got Result")
}