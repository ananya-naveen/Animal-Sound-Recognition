function start(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/HIh054ezE/model.json',modelready);
}
function modelready(){
    classifier.classify(gotResults);
}
function gotResults(error,results){
    if (error){
        console.log(error);
    }
    else{
        console.log(results);
        r=Math.floor(Math.random()*255)+1;
        g=Math.floor(Math.random()*255)+1;
        b=Math.floor(Math.random()*255)+1;
        document.getElementById("resultLabel").innerHTML="I can hear- "+results[0].label;
        document.getElementById("resultLabel").style.color="rgb("+r+","+g+","+b+")";
        document.getElementById("dog").style.color="rgb("+r+","+g+","+b+")";
        document.getElementById("cat").style.color="rgb("+r+","+g+","+b+")";
        document.getElementById("sheep").style.color="rgb("+r+","+g+","+b+")";
        document.getElementById("pig").style.color="rgb("+r+","+g+","+b+")";
        image=document.getElementById("img");
        if(results[0].label=="Dog"){
            image.src="Dog.png";
        }
        else if(results[0].label=="Cat"){
            image.src="Cat.png";
        }
        else if(results[0].label=="Sheep"){
            image.src="Sheep.png";
        }
        else if(results[0].label=="Pig"){
            image.src="Pig.png";
        }
        else{
            image.src="Ear.png";
        }
    }
}