function startClassification(){

    navigator.mediaDevices.getUserMedia({audio:true})
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/1B0KPX4Yy/model.json",modelReady)
}
function modelReady(){
    classifier.classify(gotResults)
}
function gotResults(error,results){
if (error) {
    console.log(results)
} else {
    console.log(results)
    var randomR = Math.floor(Math.random()*255)+1
    var randomG = Math.floor(Math.random()*255)+1
    var randomB = Math.floor(Math.random()*255)+1
    document.getElementById("result_label").innerHTML="posso ouvir "+results[0].label
    document.getElementById("result_confidence").innerHTML="precisâo "+(results[0].confidence*100).toFixed(2)+"%"
    document.getElementById("resultlabel").style.color="rgb("+randomR+","+randomG+","+randomR+")"
    var img= document.getElementById("alien1")
    var img1= document.getElementById("alien2")
    var img2= document.getElementById("alien3")
    var img3= document.getElementById("alien4")
    if(results[0].label=="Palmas"){
        img.src="aliens-01.gif"
        img1.src="aliens-02.png"
        img2.src="aliens-03.png"
        img3.src="aliens-04.png"
    }else if(results[0].label=="Assovio"){
        img.src="aliens-01.png"
        img1.src="aliens-02.gif"
        img2.src="aliens-03.png"
        img3.src="aliens-04.png"
    }else if(results[0].label=="Estalos"){
        img.src="aliens-01.png"
        img1.src="aliens-02.png"
        img2.src="aliens-03.gif"
        img3.src="aliens-04.png"
    }else{
             img.src="aliens-01.png"
        img1.src="aliens-02.png"
        img2.src="aliens-03.png"
        img3.src="aliens-04.gif"
    }
}
}