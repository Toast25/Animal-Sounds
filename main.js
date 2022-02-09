function Sound() {
    navigator.mediaDevices.getUserMedia({
        audio:true
    });
    model1= ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/NnvgGjnvE/model.json", model_loaded);
}
function model_loaded() {
    console.log("The Model Has Been Loaded");
    model1.classify(results_1);
}
function results_1(error, results) {
    if (error) {
        console.log(error);
    } else {
        console.log(results);
        random_r = Math.floor(Math.random()*255) +1;
        random_g = Math.floor(Math.random()*255) +1;
        random_b = Math.floor(Math.random()*255) +1;
        document.getElementById("object").style.color = "rgb(" + random_r + "," + random_g + "," + random_b + ",1)";
        document.getElementById("object_a").style.color = "rgb(" + random_r + "," + random_g + "," + random_b + ",1)";
        document.getElementById("object").innerHTML = "I Can Hear-" + results[0].label;
        document.getElementById("object_a").innerHTML = "Accuracy-" + (results[0].confidence*100).toFixed(2) + "%";

        al1 = document.getElementById("img1");
        
        if (results[0].label == "Cow") {
            al1.src = "R.gif"; 
        } else if (results[0].label == "Dog") {
            al1.src = "R (1).gif";
        } else if (results[0].label == "Lion") {
            al1.src = "R (2).gif";
        } else {
            al1.src = "R (3).gif";
        }

    }
}
